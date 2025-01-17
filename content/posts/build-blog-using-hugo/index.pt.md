---
title: "Construindo o Blog do Look Scanned com Hugo"
date: "2025-01-17T14:22:31+08:00"
description: "Um guia completo sobre como criar um blog moderno usando o gerador de sites estáticos Hugo. Da instalação à implantação, incluindo configurações e personalizações - um guia prático para desenvolvedores de todos os níveis."
tags: ["hugo", "blog", "web", "site-estático", "tutorial"]
---

## Sobre o Look Scanned

O [Look Scanned](https://lookscanned.io) é uma aplicação web leve que simula o efeito de documentos digitalizados em PDF. Desenvolvido com foco total em privacidade, permite que desenvolvedores, designers e usuários em geral criem PDFs com aparência de digitalizados sem precisar de impressora ou scanner físico.

## Por que escolhemos o Hugo?

Após avaliarmos diversos geradores de sites estáticos para o blog do Look Scanned, escolhemos o Hugo pelos seguintes motivos:

1. **Velocidade Excepcional** - Desenvolvido em Go, oferece uma compilação incrivelmente rápida
2. **Fácil de Usar** - Configuração simples e aprendizado gradual
3. **Variedade de Temas** - Ampla coleção de temas elegantes e customizáveis
4. **Comunidade Engajada** - Suporte rápido e documentação completa
5. **Internacionalização Nativa** - Recursos multilíngue já integrados

## Começando

### Instalação do Hugo

No macOS (via Homebrew):

```bash
brew install hugo
```

No Windows (via Chocolatey):

```bash
choco install hugo-extended
```

No Linux, siga o [guia de instalação](https://gohugo.io/installation/linux/).

### Criando o Projeto

Execute os comandos:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### Instalando o Tema

Adicione o tema PaperMod como submódulo do Git:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

No arquivo `config.toml`, adicione:

```toml
theme = "PaperMod"
```

### Configuração de Idiomas

Configure os idiomas no `config.toml`:

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
  # Outros idiomas...
```

### Criando Conteúdo

Crie seu primeiro artigo:

```bash
hugo new posts/build-blog-using-hugo/index.pt.md
```

### Ambiente de Desenvolvimento

Inicie o servidor local:

```bash
hugo server -D
```

Acesse [http://localhost:1313](http://localhost:1313) para ver o site.

## Implantação

Automatize a implantação com GitHub Actions:

1. **Deploy no GitHub Pages**

   - Crie um repositório no GitHub
   - Faça push do código do projeto
   - Ative o GitHub Pages nas configurações
   - Configure a implantação automática

2. **Deploy no Cloudflare Pages**
   - Conecte seu repositório do GitHub
   - Configure o comando de build para `hugo`
   - Defina a pasta `public` como diretório de publicação

## Personalizações

Para melhorar a experiência do usuário, removemos o seletor de idiomas do cabeçalho. Você pode conferir as alterações no tema [neste link](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html).

## Considerações Finais

O Hugo é uma ferramenta excelente para criar blogs pessoais. Com sua alta performance, flexibilidade nas configurações e documentação detalhada, atende desenvolvedores de todos os níveis. Conforme você explora a ferramenta, descobrirá ainda mais possibilidades para criar um blog único e personalizado.

## Links Úteis

- [Documentação do Hugo](https://gohugo.io/documentation/)
- [Tema PaperMod](https://github.com/adityatelange/hugo-PaperMod)
