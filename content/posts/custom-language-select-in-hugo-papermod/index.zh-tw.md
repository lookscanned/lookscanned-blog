+++
date = '2025-01-17T21:11:58+08:00'
draft = false
title = '為 Hugo PaperMod 打造優雅的語言切換器'
summary = '如何在 Hugo PaperMod 主題中實現一個下拉式語言切換器，透過簡潔的圖示和優雅的下拉選單取代原生的平鋪式語言選項，讓支援多語言的網站導覽列更加整潔'
description = '如何在 Hugo PaperMod 主題中實現一個下拉式語言切換器，透過簡潔的圖示和優雅的下拉選單取代原生的平鋪式語言選項，讓支援多語言的網站導覽列更加整潔'
tags = ['hugo', 'papermod', '教學', '多語言', 'html', 'i18n', 'css']
+++

## 為什麼需要自訂語言切換器？

Hugo PaperMod 主題雖然內建了語言切換功能，但其實現方式比較簡單 —— 直接在頁面頂部平鋪顯示所有可用語言。這種做法在支援少量語言時尚可接受，但對於像 Look Scanned 這樣支援 20 多種語言的網站來說，會讓導覽列顯得非常擁擠。為了解決這個問題，我們需要設計一個更優雅的下拉式語言切換器。

![PaperMod 主題原生語言切換器](./old-language-select.webp)

## 實現步驟

### 找到並重寫原始佈局

PaperMod 主題的語言切換器程式碼位於 `themes/PaperMod/layouts/partials/header.html`。要自訂它，我們需要在 `layouts/partials/header.html` 建立新的實現。以下是原始程式碼：

```html
{{- $lang := .Lang}} {{- $separator := or $label_text (not
site.Params.disableThemeToggle)}} {{- with site.Home.Translations }}
<ul class="lang-switch">
  {{- if $separator }}
  <li>|</li>
  {{ end }} {{- range . -}} {{- if ne $lang .Lang }}
  <li>
    <a
      href="{{- .Permalink -}}"
      title="{{ .Language.Params.languageAltTitle | default (.Language.LanguageName | emojify) | default (.Lang | title) }}"
      aria-label="{{ .Language.LanguageName | default (.Lang | title) }}"
    >
      {{- if (and site.Params.displayFullLangName (.Language.LanguageName)) }}
      {{- .Language.LanguageName | emojify -}} {{- else }} {{- .Lang | title -}}
      {{- end -}}
    </a>
  </li>
  {{- end -}} {{- end}}
</ul>
{{- end }}
```

### 實現下拉式切換器

我們的新設計採用了 ionicons5 的語言圖示作為觸發按鈕，滑鼠懸停時顯示所有可用語言。具體實現如下：

```html
{{- $lang := .Lang }}
{{- $separator := or $label_text (not site.Params.disableThemeToggle)}}
{{- with site.Home.Translations }}
{{- if $separator }}<span class="nav-separator">|</span>{{ end }}
<div class="lang-select-dropdown">
    <!-- 語言切換按鈕 -->
    <button class="lang-select-dropdown-trigger" aria-label="{{- i18n "translations" | default "Translations" }}" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width="24" height="18"><path d="M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z" fill="currentColor"></path><path d="M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z" fill="currentColor"></path></svg>
    </button>
    <!-- 下拉選單 -->
    <div class="lang-select-dropdown-content">
        {{- range . -}}
        {{- if ne $lang .Lang }}
        <a lang="{{ .Lang }}" href="{{- .Permalink -}}" title="{{ .Language.Params.languageAltTitle | default (.Language.LanguageName | emojify) | default (.Lang | title) }}"
            aria-label="{{ .Language.LanguageName | default (.Lang | title) }}">
            {{- if (and site.Params.displayFullLangName (.Language.LanguageName)) }}
            {{- .Language.LanguageName | emojify -}}
            {{- else }}
            {{- .Lang | title -}}
            {{- end -}}
        </a>
        {{- end -}}
        {{- end}}
    </div>
</div>
{{- end }}
```

### 添加樣式美化

為了讓下拉選單美觀且流暢，我們需要添加以下 CSS 樣式：

```css
.lang-select-dropdown {
  position: relative;
  display: inline-block;
}

.lang-select-dropdown-content {
  top: 50px;
  display: none;
  position: absolute;
  background-color: var(--entry);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  max-height: calc(min(20em, 100vh - 100px));
  overflow-y: auto;
  overflow-x: hidden;
}

.lang-select-dropdown-content a {
  font-size: 14px;
  font-weight: inherit;
  line-height: 1;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  white-space: nowrap;
  transition: background-color 0.1s ease-in-out;
}

.lang-select-dropdown-content a:hover {
  background-color: #f1f1f1;
}

.lang-select-dropdown:hover .lang-select-dropdown-content {
  display: block;
}

.lang-select-dropdown-trigger {
  height: 100%;
  font-size: 26px;
  margin: auto 4px;
}

.nav-separator {
  margin: auto 4px;
}
```

實現效果如下，當滑鼠懸停在語言圖示上時，會顯示一個簡潔的下拉選單：

![自訂語言切換器效果](./custom-language-select.webp)

完整程式碼可以在這個 [GitHub commit](https://github.com/lookscanned/lookscanned-blog/commit/a47f5c2be887ab3ae198d1967f328d3683504ff0) 中查看。

## 參考資料

- [PaperMod 主題常見問題與使用指南](https://adityatelange.github.io/hugo-PaperMod/posts/papermod/papermod-faq/#bundling-custom-css-with-themes-assets)
