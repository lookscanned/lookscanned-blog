---
date: "2025-12-19T15:55:33+08:00"
draft: false
title: "Migrando a documentação Look Scanned How-To para VitePress com segurança aprimorada"
summary: "Descubra como Look Scanned atualizou sua infraestrutura de documentação migrando de Vue + Vite para VitePress, enquanto implementava npm Trusted Publishers com OIDC para publicações de pacotes seguras sem token."
description: "Descubra como Look Scanned atualizou sua infraestrutura de documentação migrando de Vue + Vite para VitePress, enquanto implementava npm Trusted Publishers com OIDC para publicações de pacotes seguras sem token."
tags: ["vitepress", "documentação", "segurança", "cicd", "npm"]
---

Na [Look Scanned](https://lookscanned.io), estamos constantemente melhorando nossa infraestrutura para fornecer melhor documentação e práticas de desenvolvimento mais seguras. Hoje, estamos empolgados em compartilhar detalhes sobre uma atualização significativa em nosso site de documentação: a migração de uma aplicação personalizada Vue + Vite para VitePress, enquanto simultaneamente aprimoramos nossa segurança CI/CD com npm Trusted Publishers.

## 📚 Por que migramos para VitePress

Nosso site de documentação ([github.com/lookscanned/how-to](https://github.com/lookscanned/how-to)) serve como o guia de uso abrangente para Look Scanned. Embora nossa configuração anterior Vue + Vite funcionasse bem, reconhecemos que VitePress seria uma escolha melhor para um site de documentação orientado por conteúdo.

### O que é VitePress?

VitePress é um gerador de sites estáticos especificamente projetado para documentação. Construído em cima de Vite e Vue 3, combina o melhor de dois mundos: experiência de desenvolvimento extremamente rápida com recursos poderosos de documentação prontos para uso.

### Principais benefícios da migração

**🎯 Melhor arquitetura para documentação**
- **Roteamento baseado em arquivos**: Cada arquivo markdown torna-se automaticamente uma página, tornando a organização de conteúdo intuitiva
- **Recursos de documentação integrados**: Índice, pesquisa, internacionalização e muito mais vêm pré-configurados
- **Geração de site estático**: HTML pré-renderizado fornece excelente SEO e carregamentos de página instantâneos

**⚡ Experiência de desenvolvedor aprimorada**
- **Recarga instantânea a quente**: Mudanças aparecem imediatamente durante o desenvolvimento
- **Markdown primeiro**: Foco no conteúdo, não na estrutura de componentes
- **Suporte a componentes Vue**: Quando necessário, ainda podemos usar componentes Vue personalizados dentro do markdown

**🔧 Manutenção mais fácil**
- **Estrutura mais clara**: A documentação segue convenções, reduzindo a carga cognitiva para colaboradores
- **Builds mais estáveis**: A estrutura opinativa do VitePress leva a builds mais reproduzíveis
- **Melhor colaboração**: Membros da equipe podem contribuir com documentação sem conhecimento profundo de Vue

## 🔒 Segurança aprimorada com npm Trusted Publishers

Juntamente com a migração VitePress, implementamos uma melhoria crítica de segurança: **npm Trusted Publishers usando autenticação OIDC**.

### O problema com tokens npm tradicionais

Anteriormente, publicar pacotes no npm exigia armazenar um `NPM_TOKEN` de longa duração nos segredos do repositório. Esta abordagem tem várias desvantagens:

- **Risco de segurança**: Tokens podem ser expostos acidentalmente ou comprometidos
- **Sobrecarga de gerenciamento**: Tokens precisam de rotação e atualizações manuais
- **Desafios de auditoria**: Difícil rastrear quem publicou o que e quando

### A solução: Publicação confiável baseada em OIDC

[npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers/) aproveita OpenID Connect (OIDC) para permitir publicação segura sem token diretamente do GitHub Actions. Veja como funciona:

1. **Sem segredos armazenados**: Em vez de salvar tokens, GitHub Actions solicita credenciais de curta duração do npm
2. **Verificação de identidade**: npm verifica se a solicitação de publicação veio do repositório GitHub autorizado
3. **Gerenciamento automático de credenciais**: Credenciais são emitidas automaticamente e expiram rapidamente

### Benefícios do mundo real

Esta mudança traz melhorias imediatas ao nosso fluxo de trabalho de desenvolvimento:

- ✅ **Sem mais gerenciamento de tokens**: Não é necessário criar, armazenar ou rotacionar tokens npm
- ✅ **Superfície de ataque reduzida**: Credenciais de curta duração minimizam o risco de exposição
- ✅ **Melhor auditabilidade**: Cada ação de publicação está vinculada a uma execução específica do GitHub Actions
- ✅ **Melhores práticas modernas**: Alinha-se com princípios de segurança zero-trust

**Nota técnica**: Para suportar npm Trusted Publishers, atualizamos nossa configuração CI para usar Node.js `lts/*`, garantindo que temos a versão mais recente do npm necessária para autenticação OIDC.

## 📦 Cronograma de lançamento

A migração foi concluída através de três lançamentos em 19 de dezembro de 2025:

- **v2.0.0**: Migração principal de Vue + Vite para VitePress (mudança importante)
- **v2.0.1**: Correção de CI para suportar npm Trusted Publishers com versão apropriada do Node.js
- **v2.0.2**: Melhoria de desempenho movendo `@fontsource/noto-mono` para devDependencies

## 🌍 Suporte multilíngue contínuo

Uma nota importante: nossa documentação gera PDFs multilíngues que sempre foram usados como arquivos de exemplo no aplicativo principal Look Scanned (disponível em [lookscanned.io/en/scan](https://lookscanned.io/en/scan)). Esta migração VitePress não altera essa funcionalidade - simplesmente fornece uma base melhor para manter e melhorar nossa infraestrutura de documentação.

## 💡 O que isso significa para os usuários

Se você usa a documentação do Look Scanned:

- **Mesmo acesso, melhor experiência**: A documentação permanece na mesma URL com carregamento e navegação aprimorados
- **Mais confiável**: Geração de site estático significa carregamentos mais rápidos e melhor estabilidade
- **Melhor busca e descoberta**: A busca integrada do VitePress ajuda você a encontrar respostas mais rapidamente
- **Suporte contínuo a PDF**: Geração de PDF multilíngue continua como antes

## 🚀 O que vem a seguir

Com a atualização de infraestrutura completa, estamos focando em melhorias de conteúdo:

- **Casos de uso expandidos**: Mais exemplos práticos e guias passo a passo
- **Melhorias de consistência**: Refinando terminologia multilíngue para clareza
- **Exportação de PDF aprimorada**: Melhorando a experiência de geração de PDF entre navegadores

## Experimente Look Scanned hoje

Look Scanned fornece efeitos de digitalização de PDF baseados em navegador, com privacidade em primeiro lugar, sem fazer upload de seus arquivos para qualquer lugar. A documentação aprimorada torna mais fácil do que nunca começar.

👉 **Visite [lookscanned.io](https://lookscanned.io) para experimentar digitalização de documentos rápida e segura em seu navegador.**
