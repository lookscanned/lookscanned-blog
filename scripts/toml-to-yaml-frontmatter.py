"""Convert TOML frontmatter (+++) to YAML frontmatter (---) across all posts.

The frontmatter schema is constrained to: date, draft, title, summary,
description, tags. We rely on tomllib to parse and emit YAML with double-quoted
strings (matching the project convention documented in CLAUDE.md).
"""
from __future__ import annotations

import sys
import tomllib
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
POSTS = ROOT / "content" / "posts"

ALLOWED_KEYS = ["date", "draft", "title", "summary", "description", "tags"]


def yaml_escape(s: str) -> str:
    """Escape a string for a YAML double-quoted scalar."""
    return s.replace("\\", "\\\\").replace('"', '\\"')


def emit_scalar(value) -> str:
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, str):
        return f'"{yaml_escape(value)}"'
    raise TypeError(f"Unsupported scalar type: {type(value).__name__}")


def emit_tags(tags: list[str]) -> str:
    items = ", ".join(emit_scalar(t) for t in tags)
    return f"[{items}]"


def convert(text: str) -> str | None:
    if not text.startswith("+++\n"):
        return None
    try:
        end = text.index("\n+++\n", 4)
    except ValueError:
        return None
    fm = tomllib.loads(text[4:end])
    body = text[end + len("\n+++\n") :]

    lines = ["---"]
    for key in ALLOWED_KEYS:
        if key not in fm:
            continue
        value = fm[key]
        if key == "tags":
            lines.append(f"tags: {emit_tags(value)}")
        else:
            lines.append(f"{key}: {emit_scalar(value)}")

    unknown = set(fm) - set(ALLOWED_KEYS)
    if unknown:
        print(f"  ! unknown keys: {sorted(unknown)}", file=sys.stderr)
        for key in sorted(unknown):
            lines.append(f"{key}: {emit_scalar(fm[key])}")

    lines.append("---\n")
    return "\n".join(lines) + body


def main() -> int:
    converted = 0
    skipped = 0
    failed = 0
    for md in sorted(POSTS.glob("*/index.*.md")):
        text = md.read_text()
        if not text.startswith("+++"):
            skipped += 1
            continue
        try:
            new_text = convert(text)
        except Exception as exc:
            print(f"FAIL {md}: {exc}", file=sys.stderr)
            failed += 1
            continue
        if new_text is None:
            skipped += 1
            continue
        md.write_text(new_text)
        converted += 1
    print(f"converted={converted} skipped={skipped} failed={failed}")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
