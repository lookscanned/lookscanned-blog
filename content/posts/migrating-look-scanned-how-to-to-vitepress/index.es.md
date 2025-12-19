---
date: "2025-12-19T15:55:33+08:00"
draft: false
title: "Migración de la documentación de Look Scanned a VitePress con seguridad mejorada"
summary: "Descubre cómo Look Scanned actualizó su infraestructura de documentación migrando de Vue + Vite a VitePress, mientras implementaba npm Trusted Publishers con OIDC para publicaciones de paquetes seguras sin tokens."
description: "Descubre cómo Look Scanned actualizó su infraestructura de documentación migrando de Vue + Vite a VitePress, mientras implementaba npm Trusted Publishers con OIDC para publicaciones de paquetes seguras sin tokens."
tags: ["vitepress", "documentación", "seguridad", "cicd", "npm"]
---

En [Look Scanned](https://lookscanned.io), mejoramos constantemente nuestra infraestructura para proporcionar mejor documentación y prácticas de desarrollo más seguras. Hoy, nos complace compartir detalles sobre una actualización significativa de nuestro sitio de documentación: la migración de una aplicación personalizada Vue + Vite a VitePress, mientras mejoramos simultáneamente nuestra seguridad CI/CD con npm Trusted Publishers.

## 📚 Por qué migramos a VitePress

Nuestro sitio de documentación ([github.com/lookscanned/how-to](https://github.com/lookscanned/how-to)) sirve como guía de uso completa para Look Scanned. Aunque nuestra configuración anterior de Vue + Vite funcionaba bien, reconocimos que VitePress sería una mejor opción para un sitio de documentación orientado al contenido.

### ¿Qué es VitePress?

VitePress es un generador de sitios estáticos diseñado específicamente para documentación. Construido sobre Vite y Vue 3, combina lo mejor de ambos mundos: una experiencia de desarrollo ultrarrápida con potentes características de documentación listas para usar.

### Beneficios clave de la migración

**🎯 Mejor arquitectura para documentación**
- **Enrutamiento basado en archivos**: Cada archivo markdown se convierte automáticamente en una página, haciendo que la organización del contenido sea intuitiva
- **Características de documentación integradas**: Tabla de contenidos, búsqueda, internacionalización y más vienen preconfigurados
- **Generación de sitios estáticos**: HTML prerenderizado proporciona excelente SEO y cargas de página instantáneas

**⚡ Experiencia de desarrollador mejorada**
- **Recarga instantánea en caliente**: Los cambios aparecen inmediatamente durante el desarrollo
- **Markdown primero**: Enfócate en el contenido, no en el andamiaje de componentes
- **Soporte de componentes Vue**: Cuando sea necesario, aún podemos usar componentes Vue personalizados dentro de markdown

**🔧 Mantenimiento más fácil**
- **Estructura más clara**: La documentación sigue convenciones, reduciendo la carga cognitiva para los colaboradores
- **Compilaciones más estables**: La estructura opinionada de VitePress conduce a compilaciones más reproducibles
- **Mejor colaboración**: Los miembros del equipo pueden contribuir a la documentación sin conocimientos profundos de Vue

## 🔒 Seguridad mejorada con npm Trusted Publishers

Junto con la migración de VitePress, implementamos una mejora de seguridad crítica: **npm Trusted Publishers usando autenticación OIDC**.

### El problema con los tokens tradicionales de npm

Anteriormente, publicar paquetes en npm requería almacenar un `NPM_TOKEN` de larga duración en los secretos del repositorio. Este enfoque tiene varios inconvenientes:

- **Riesgo de seguridad**: Los tokens pueden ser expuestos accidentalmente o comprometidos
- **Sobrecarga de gestión**: Los tokens necesitan rotación y actualizaciones manuales
- **Desafíos de auditoría**: Difícil rastrear quién publicó qué y cuándo

### La solución: publicación confiable basada en OIDC

[npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers/) aprovecha OpenID Connect (OIDC) para habilitar publicaciones seguras sin tokens directamente desde GitHub Actions. Así es como funciona:

1. **Sin secretos almacenados**: En lugar de guardar tokens, GitHub Actions solicita credenciales de corta duración a npm
2. **Verificación de identidad**: npm verifica que la solicitud de publicación provino del repositorio de GitHub autorizado
3. **Gestión automática de credenciales**: Las credenciales se emiten automáticamente y expiran rápidamente

### Beneficios del mundo real

Este cambio trae mejoras inmediatas a nuestro flujo de trabajo de desarrollo:

- ✅ **No más gestión de tokens**: No es necesario crear, almacenar o rotar tokens npm
- ✅ **Superficie de ataque reducida**: Las credenciales de corta duración minimizan el riesgo de exposición
- ✅ **Mejor auditabilidad**: Cada acción de publicación está vinculada a una ejecución específica de GitHub Actions
- ✅ **Mejores prácticas modernas**: Se alinea con los principios de seguridad de confianza cero

**Nota técnica**: Para admitir npm Trusted Publishers, actualizamos nuestra configuración de CI para usar Node.js `lts/*`, asegurando que tengamos la última versión de npm requerida para la autenticación OIDC.

## 📦 Cronograma de lanzamiento

La migración se completó a través de tres versiones el 19 de diciembre de 2025:

- **v2.0.0**: Migración principal de Vue + Vite a VitePress (cambio importante)
- **v2.0.1**: Corrección de CI para admitir npm Trusted Publishers con la versión adecuada de Node.js
- **v2.0.2**: Mejora de rendimiento al mover `@fontsource/noto-mono` a devDependencies

## 🌍 Soporte multilingüe continuo

Una nota importante: nuestra documentación genera PDF multilingües que siempre se han utilizado como archivos de ejemplo en la aplicación principal de Look Scanned (disponible en [lookscanned.io/en/scan](https://lookscanned.io/en/scan)). Esta migración de VitePress no cambia esa funcionalidad, simplemente proporciona una mejor base para mantener y mejorar nuestra infraestructura de documentación.

## 💡 Qué significa esto para los usuarios

Si usas la documentación de Look Scanned:

- **Mismo acceso, mejor experiencia**: La documentación permanece en la misma URL con carga y navegación mejoradas
- **Más confiable**: La generación de sitios estáticos significa cargas más rápidas y mejor estabilidad
- **Mejor búsqueda y descubrimiento**: La búsqueda integrada de VitePress te ayuda a encontrar respuestas más rápido
- **Soporte continuo de PDF**: La generación de PDF multilingüe continúa como antes

## 🚀 Qué sigue

Con la actualización de infraestructura completa, nos enfocamos en mejoras de contenido:

- **Casos de uso ampliados**: Más ejemplos prácticos y guías paso a paso
- **Mejoras de consistencia**: Refinando la terminología multilingüe para mayor claridad
- **Exportación de PDF mejorada**: Mejorando la experiencia de generación de PDF entre navegadores

## Prueba Look Scanned hoy

Look Scanned proporciona efectos de escaneo de PDF basados en navegador y centrados en la privacidad sin cargar tus archivos en ningún lugar. La documentación mejorada hace que sea más fácil que nunca comenzar.

👉 **Visita [lookscanned.io](https://lookscanned.io) para experimentar un escaneo de documentos rápido y seguro en tu navegador.**
