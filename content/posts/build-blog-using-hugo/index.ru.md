---
title: "Создаём блог Look Scanned с помощью Hugo"
date: 2025-01-17
description: "Подробное руководство по созданию современного блога на базе генератора статических сайтов Hugo. От установки до публикации — все этапы с пояснениями для разработчиков любого уровня."
---

## О проекте Look Scanned

[Look Scanned](https://lookscanned.io) — веб-приложение для создания PDF-файлов с эффектом сканирования. Особое внимание уделено конфиденциальности пользователей. Разработчики, дизайнеры и другие пользователи могут создавать PDF-документы, выглядящие как отсканированные, без использования сканера или принтера.

## Почему мы выбрали Hugo

В процессе выбора генератора статических сайтов для блога Look Scanned мы остановились на Hugo по нескольким причинам:

1. **Впечатляющая скорость** - Реализация на Go обеспечивает мгновенную сборку
2. **Удобство в работе** - Интуитивно понятные настройки и простое освоение
3. **Разнообразие тем** - Большая коллекция стильных тем с гибкими настройками
4. **Сильное сообщество** - Быстрая помощь и качественная документация
5. **Поддержка i18n** - Встроенные инструменты для мультиязычности

## Приступаем к работе

### Установка Hugo

На macOS (через Homebrew):

```bash
brew install hugo
```

На Windows (через Chocolatey):

```bash
choco install hugo-extended
```

Для Linux есть [подробная инструкция](https://gohugo.io/installation/linux/).

### Создание проекта

Запустите следующие команды:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### Подключение темы

Добавьте PaperMod как подмодуль Git:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

В файл `config.toml` добавьте:

```toml
theme = "PaperMod"
```

### Настройка языков

Отредактируйте `config.toml` для поддержки разных языков:

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
  # Дополнительные языки...
```

### Создание статей

Создайте первую публикацию:

```bash
hugo new posts/build-blog-using-hugo/index.ru.md
```

### Локальная разработка

Запустите сервер для разработки:

```bash
hugo server -D
```

Перейдите на [http://localhost:1313](http://localhost:1313) для просмотра сайта.

## Публикация

Автоматизация публикации через GitHub Actions:

1. **Размещение на GitHub Pages**

   - Создайте новый репозиторий
   - Загрузите код проекта
   - Активируйте GitHub Pages
   - Настройте автоматическую публикацию

2. **Размещение на Cloudflare Pages**
   - Подключите GitHub-репозиторий
   - Настройте команду сборки `hugo`
   - Укажите папку `public` для публикации

## Персонализация

Мы упростили интерфейс, убрав переключатель языков из шапки сайта. Все изменения темы доступны [в репозитории](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html).

## Итоги

Hugo — отличный выбор для создания личного блога. Высокая производительность, гибкость настройки и подробная документация делают его доступным для разработчиков с любым опытом. Со временем вы откроете для себя дополнительные возможности для создания уникального блога.

## Ссылки

- [Документация Hugo](https://gohugo.io/documentation/)
- [Тема PaperMod](https://github.com/adityatelange/hugo-PaperMod)
