---
date: "2026-04-05T14:00:00+08:00"
draft: false
title: "How to Remove Metadata from a PDF Before Sharing"
summary: "Your PDF may contain hidden metadata that reveals who you are, what software you used, and when you worked on it. Here is what to check, how to remove it, and when converting to a scan-style PDF handles the job more thoroughly than any metadata editor."
description: "Your PDF may contain hidden metadata that reveals who you are, what software you used, and when you worked on it. Here is what to check, how to remove it, and when converting to a scan-style PDF handles the job more thoroughly than any metadata editor."
tags: ["pdf", "privacy", "metadata", "document security", "sensitive documents"]
keywords:
  - "how to remove metadata from pdf"
  - "pdf metadata privacy risk"
  - "remove pdf metadata before sharing"
  - "check pdf metadata"
  - "hidden data in pdf"
  - "pdf metadata removal tool"
---

I checked the metadata on a PDF I was about to send last week. It still had my full name, my company's internal file path, and the exact timestamp of every revision I had made over the past month.

The page looked clean. The file was not.

Most people never open the properties panel on a PDF before sharing it. The visible content gets all the attention. But the file itself can say a lot more than what is printed on the page, and that hidden layer is what this post is about.

## The short answer

PDF metadata can include your name, the software you used, creation and modification timestamps, revision history, comments, and even GPS coordinates from embedded images.

To remove it, you have a few options:

- use a metadata editor or sanitization tool to strip specific fields
- use a command-line tool like exiftool for full control
- convert the PDF to a scan-style image-based file, which replaces the entire document structure and removes all hidden data at once

If the document is final and heading outside your organization, that last option is the most thorough single step you can take.

## What PDF metadata actually contains

A PDF can carry three layers of information beyond what you see on the page.

The first layer is **document properties**. This is the metadata most people think of: author name, title, subject, creation date, modification date, and the software that produced the file. Open any PDF in a viewer, check File > Properties, and you will probably see fields like "Author: Jane Smith" and "Producer: Microsoft Word 2021." That information travels with the file wherever it goes.

The second layer is **XMP and embedded metadata**. This is less visible but often more revealing. If your PDF contains embedded images, those images may still carry their original EXIF data, including camera model, timestamps, and GPS coordinates. XMP metadata can also include editing history, custom tags, and font licensing information. Most people do not know this layer exists because standard PDF viewers do not show it.

The third layer is **hidden structural data**. Depending on how the PDF was created and edited, the file may contain revision history, deleted-but-recoverable text, comments, annotations, form field defaults, hidden layers, JavaScript, and embedded file attachments. This is the layer that causes the most damage when it leaks, because it can include content the author thought they removed.

If you have already thought about this kind of hidden data in the context of uploading files to web tools, [Is It Safe to Use Online PDF Tools for Sensitive Documents?](../is-it-safe-to-use-online-pdf-tools-for-sensitive-documents/) covers the broader trust model.

## Why this matters more than people think

Metadata leaks are not dramatic. They are quiet, specific, and hard to undo once the file has been shared.

**Author identification when anonymity matters.** If the PDF was created by a specific person, the author field or internal file path can link back to them. This matters for whistleblowers, anonymous reports, leaked documents, or any situation where the sender's identity is supposed to stay out of the file.

**Revision history exposing negotiation strategy.** A contract PDF that still contains tracked changes or revision metadata can reveal your initial position, what you deleted, and what you softened before sending the final version. The other side does not need to be technical to stumble on this. Some PDF viewers surface revision data automatically.

**Timestamps revealing sensitive timing.** Creation and modification dates tell someone when the document was started, when it was last changed, and how many times it was touched. In legal, compliance, or competitive contexts, that kind of timing information can matter more than the content itself.

**GPS coordinates from embedded images.** If you pasted a photo into the PDF and that photo still carries EXIF location data, the GPS coordinates of where the image was taken are now embedded in the file. Most people do not think about this because the metadata lives inside the image object, not in the PDF properties panel.

**Software versions revealing internal tools.** Fields like "Producer: Adobe Acrobat Pro DC 24.1.30225" or "Creator: Microsoft Word for Microsoft 365" tell someone what tools and versions your organization uses. For most documents this is trivial. For sensitive contexts, it is an unnecessary information leak.

None of these are hypothetical. They are the boring metadata leaks that actually happen.

## How to check what metadata your PDF contains

Before removing anything, look at what is actually in the file.

**PDF viewer properties dialog.** In most PDF readers, File > Properties or Document Properties shows the basic fields: author, title, subject, creation date, modification date, and producer application. This catches the first layer but misses almost everything else.

**exiftool on the command line.** Running `exiftool document.pdf` will show you everything: document properties, XMP data, embedded image EXIF, and custom fields. This is the most complete inspection method, but it requires comfort with a terminal. If you have never used it before, it is worth installing just to see what a single PDF can contain.

**Online metadata viewers.** Some websites let you upload a PDF to inspect its metadata. If the reason you are checking metadata is privacy, uploading the file to a third-party service to inspect it is a questionable move. You are trying to find out whether the file leaks information, and the first step is sending it to a stranger.

Once you know what is in the file, the question is how to remove it.

## Methods for removing PDF metadata

There is no single best method. The right choice depends on what you need to keep and how thorough you need to be.

### Adobe Acrobat (Sanitize Document)

Acrobat Pro includes "Remove Hidden Information" and "Sanitize Document" features that can strip metadata, hidden text, comments, form data, attachments, and other non-visible content. This is one of the most complete approaches if you need to keep the text layer intact and the file searchable.

The limitation is that it requires a paid Acrobat Pro license. If you already have it, this is a strong option. If you do not, this is not the kind of problem that justifies the subscription by itself.

### exiftool and other CLI tools

exiftool can surgically remove specific metadata fields or strip everything from a PDF in one command. It is free, runs on any platform, and gives precise control over exactly what is removed.

The limitation is the technical barrier. It also focuses on metadata fields rather than structural hidden data. If the PDF contains revision history, hidden layers, or embedded objects, exiftool will not catch those. It is excellent at what it does, but it does not cover every layer.

### Online metadata removal tools

Several websites let you upload a PDF, strip the metadata, and download the cleaned version. The workflow is simple and requires no software installation.

The limitation should be obvious. You are uploading a document to a third-party server in order to solve a privacy problem. That is a little like handing your diary to a stranger so they can tear out the page with your address on it.

If the file is low-risk, that may be an acceptable trade. If you are removing metadata because the document is sensitive, this approach introduces the exact kind of exposure you are trying to avoid. For more on that trade-off, [Is It Safe to Use Online PDF Tools for Sensitive Documents?](../is-it-safe-to-use-online-pdf-tools-for-sensitive-documents/) covers it in detail.

### Print to PDF

Re-printing a PDF through a virtual printer creates a new file that often strips some metadata and flattens certain elements. It is free and built into most operating systems.

The results are inconsistent. Some virtual printers inject their own metadata into the output. Some strip XMP data, others do not. Embedded image EXIF may or may not survive the round trip. If you use this method, always verify the result rather than assuming it is clean.

### Converting to a scan-style PDF

This approach converts every page of the PDF into an image, then wraps those images into a new PDF. Because the entire document structure is replaced, all hidden data is removed: metadata, text layers, comments, revision history, embedded files, form fields, JavaScript, everything. The output is a new PDF that contains only rendered page images.

The tradeoff is that the file is no longer text-searchable. It behaves like a picture of each page. For documents that are final and heading outside your organization, that tradeoff is often worth it. For documents that still need to be searched, quoted, or edited downstream, it is not.

That is the job [Look Scanned](https://lookscanned.io) does. It converts the PDF to a scan-style version locally in your browser, so the file never leaves your device. The result is a clean image-based PDF with no hidden data, no text layers, no metadata from the original, and no server-side processing to worry about.

## Comparison

| Method | Removes document properties | Removes hidden layers | Removes image EXIF | Keeps text searchable | Requires upload | Cost |
| --- | --- | --- | --- | --- | --- | --- |
| Adobe Acrobat (Sanitize) | Yes | Yes | Depends on settings | Yes | No | Paid |
| exiftool / CLI | Yes | Partial | Yes | Yes | No | Free |
| Online metadata tools | Usually | Usually not | Sometimes | Yes | Yes | Free |
| Print to PDF | Partially | Partially | Sometimes | Usually | No | Free |
| Scan-style conversion (e.g. Look Scanned) | Yes | Yes | Yes | No | No (local browser) | Free |

No single row is perfect for every situation. The question is always which tradeoffs matter for this specific file.

## When each approach makes sense

**The document is still being worked on.** Strip metadata with Acrobat or exiftool. Keep the text layer. Metadata removal at this stage is housekeeping, not the main event.

**The document is final and going outside your organization.** If searchability is not critical, a scan-style conversion is the most thorough single step. It removes everything in one pass. If the file still needs to be searchable, use Acrobat's Sanitize feature instead, and verify the result.

**The document is highly sensitive.** Combine approaches. Handle proper redaction first, then metadata cleanup, then a final scan-style conversion. Each step covers a different layer. If redaction is part of your workflow, [Black Bars Aren't Redaction](../black-bars-arent-redaction-pdf-redaction-checklist/) covers why visual masking is not enough.

**You are not sure what is in the file.** Check first with exiftool or the properties panel. Then decide based on what you find and where the file is going. Choosing a removal method before understanding what needs to be removed leads to either overkill or missed data.

If you are weighing whether a scan-style PDF is the right format for your situation, [Scanned PDF vs Editable PDF: Which One Should You Send?](../scanned-pdf-vs-editable-pdf/) covers that decision more broadly.

## The workflow I actually use

1. Finish the document content first. Do not clean metadata on a file that is still changing.
2. Check the metadata on the final export. File > Properties at minimum. exiftool if it matters.
3. Remove or sanitize based on what I found and how sensitive the destination is.
4. If the file is going outside and does not need to be searchable, I convert it to a scan-style PDF. [Look Scanned](https://lookscanned.io) handles that step in the browser without uploading the file.
5. Open the result in a fresh viewer and verify. Check properties, try to select text, search for terms that should be gone.

That last step catches more leftover data than people expect.

If flattening is enough for your situation and you do not need the full scan-style conversion, [How to Flatten a PDF Before Sending It](../how-to-flatten-a-pdf-before-sending/) covers that middle ground.

## FAQ

### Does converting to a scanned PDF remove all metadata?

Yes. Converting to an image-based PDF replaces the entire file structure. The result contains no text layer, no hidden objects, no document properties from the original, and no embedded file metadata. The output is a new PDF containing only rendered page images.

### Can someone recover metadata from a scan-style PDF?

Not from the PDF itself. The original structure is gone. The only metadata in the new file is whatever the conversion tool writes, such as its own producer tag. If the conversion happens locally in the browser, no server-side copy exists either.

### Is removing metadata the same as redaction?

No. Metadata removal strips hidden properties and document-level data. Redaction removes visible content from the page. If you need to remove names, numbers, or text from the page itself, that is a separate step that must happen before metadata cleanup. [Black Bars Aren't Redaction](../black-bars-arent-redaction-pdf-redaction-checklist/) explains why visual masking alone does not count.

### Should I remove metadata from every PDF I send?

Not necessarily. For routine documents that are already public or low-risk, metadata is harmless. The question becomes important when the document is sensitive, the recipient is external, or the author identity is supposed to stay out of the file.

## Final thought

Most people never check what their PDF says about them before they send it.

The file might be clean. Or it might contain your name, your revision history, and the GPS coordinates of the coffee shop where you edited it last Tuesday.

If the document matters enough to share carefully, it matters enough to check. And if checking reveals more than you expected, there are straightforward ways to fix it before you hit send.
