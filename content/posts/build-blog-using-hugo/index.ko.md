---
title: "Hugo로 구축하는 Look Scanned 블로그"
date: 2025-01-17
description: "정적 사이트 생성기 Hugo로 만드는 현대적인 블로그 구축 가이드입니다. 설치부터 설정, 배포, 맞춤 설정까지 개발자 수준에 관계없이 쉽게 따라할 수 있는 안내서입니다."
tags: ["hugo", "블로그", "웹", "정적-사이트", "튜토리얼"]
---

## Look Scanned란?

[Look Scanned](https://lookscanned.io)는 PDF에 스캔한 듯한 효과를 입힐 수 있는 가벼운 웹 애플리케이션입니다. 개인정보 보호를 최우선으로 설계되어, 개발자와 디자이너는 물론 일반 사용자도 실제 프린터나 스캐너 없이 스캔한 듯한 PDF를 손쉽게 만들 수 있습니다.

## Hugo를 선택한 이유

Look Scanned 블로그를 위한 플랫폼을 선정하면서 다양한 정적 사이트 생성기를 검토했습니다. 그 중 Hugo를 선택한 핵심적인 이유는 다음과 같습니다:

1. **압도적인 속도** - Go 언어로 작성되어 빌드 속도가 매우 빠름
2. **편리한 사용성** - 설정이 단순하고 배우기 쉬운 구조
3. **풍부한 테마** - 세련된 디자인과 자유로운 커스텀이 가능한 다양한 테마
4. **든든한 커뮤니티** - 적극적인 지원과 풍부한 레퍼런스 제공
5. **뛰어난 다국어 지원** - 다국어 기능이 기본으로 내장

## 시작하기

### Hugo 설치

macOS에서 설치(Homebrew 사용):

```bash
brew install hugo
```

Windows에서 설치(Chocolatey 사용):

```bash
choco install hugo-extended
```

Linux 사용자는 [이 가이드](https://gohugo.io/installation/linux/)를 참고해 주세요.

### 블로그 생성

아래 명령어로 새 블로그를 만듭니다:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### 테마 적용

PaperMod 테마를 Git 서브모듈로 가져옵니다:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

`config.toml` 파일에 추가:

```toml
theme = "PaperMod"
```

### 다국어 지원 설정

`config.toml`에 다국어 설정을 추가합니다:

```toml
defaultContentLanguage = 'en'
defaultContentLanguageInSubdir = false

[params]
  displayFullLangName = true

[languages]
  [languages.en]
    languageCode = 'en'
    languageName = 'English'
    title = 'Look Scanned Blog'
  [languages.zh]
    languageName = '简体中文'
    title = 'Look Scanned 博客'
  [languages.zh-tw]
    languageCode = 'zh-TW'
    languageName = '繁體中文'
    title = 'Look Scanned 部落格'
  # 추가 언어 설정...
```

### 글 작성하기

첫 포스트를 작성합니다:

```bash
hugo new posts/build-blog-using-hugo/index.ko.md
```

### 개발 환경 실행

로컬 서버 실행하기:

```bash
hugo server -D
```

[http://localhost:1313](http://localhost:1313)에서 작성 중인 블로그를 확인하세요.

## 배포하기

GitHub Actions로 쉽게 배포하는 방법:

1. **GitHub Pages로 배포**

   - GitHub에 새 저장소 만들기
   - 블로그 코드 올리기
   - GitHub Pages 활성화하기
   - GitHub Actions로 자동 배포 설정하기

2. **Cloudflare Pages로 배포**
   - GitHub 저장소 연동하기
   - 빌드 명령어 `hugo` 설정하기
   - 배포 폴더 `public` 지정하기

## 맞춤 설정

사용자 편의성을 높이기 위해 헤더의 언어 선택 메뉴를 제거했습니다. 자세한 수정 내용은 [여기](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html)에서 확인할 수 있습니다.

## 맺음말

Hugo는 개인 블로그를 만들기에 최적화된 도구입니다. 빠른 속도, 자유로운 커스터마이징, 풍부한 문서화 덕분에 누구나 쉽게 시작할 수 있습니다. 사용하면 할수록 새로운 가능성을 발견하게 되며, 자신만의 독특한 블로그를 만들어갈 수 있습니다.

## 참고 자료

- [Hugo 공식 문서](https://gohugo.io/documentation/)
- [Hugo PaperMod 테마](https://github.com/adityatelange/hugo-PaperMod)
