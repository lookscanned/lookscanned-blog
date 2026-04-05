---
date: "2026-04-05T14:00:00+08:00"
draft: false
title: "Comment supprimer les métadonnées d'un PDF avant de le partager"
summary: "Votre PDF peut contenir des métadonnées cachées qui révèlent votre identité, le logiciel que vous avez utilisé et quand vous avez travaillé dessus. Voici ce qu'il faut vérifier, comment les supprimer, et pourquoi la conversion en PDF d'apparence scannée fait le travail de manière plus complète que n'importe quel éditeur de métadonnées."
description: "Votre PDF peut contenir des métadonnées cachées qui révèlent votre identité, le logiciel que vous avez utilisé et quand vous avez travaillé dessus. Voici ce qu'il faut vérifier, comment les supprimer, et pourquoi la conversion en PDF d'apparence scannée fait le travail de manière plus complète que n'importe quel éditeur de métadonnées."
tags: ["pdf", "confidentialité", "métadonnées", "sécurité documentaire", "documents sensibles"]
keywords:
  - "comment supprimer les métadonnées d'un pdf"
  - "risque de confidentialité métadonnées pdf"
  - "supprimer métadonnées pdf avant partage"
  - "vérifier métadonnées pdf"
  - "données cachées dans un pdf"
  - "outil de suppression de métadonnées pdf"
---

La semaine dernière, j'ai vérifié les métadonnées d'un PDF que j'étais sur le point d'envoyer. Il contenait encore mon nom complet, le chemin de fichier interne de mon entreprise et l'horodatage exact de chaque révision que j'avais faite au cours du dernier mois.

La page semblait propre. Le fichier ne l'était pas.

La plupart des gens n'ouvrent jamais le panneau des propriétés d'un PDF avant de le partager. Le contenu visible monopolise toute l'attention. Mais le fichier lui-même peut en dire bien plus que ce qui est imprimé sur la page, et c'est cette couche cachée qui fait l'objet de cet article.

## La réponse courte

Les métadonnées d'un PDF peuvent inclure votre nom, le logiciel que vous avez utilisé, les horodatages de création et de modification, l'historique des révisions, les commentaires et même les coordonnées GPS des images intégrées.

Pour les supprimer, vous avez plusieurs options :

- utiliser un éditeur de métadonnées ou un outil d'assainissement pour supprimer des champs spécifiques
- utiliser un outil en ligne de commande comme exiftool pour un contrôle total
- convertir le PDF en un fichier basé sur des images avec une apparence de scan, ce qui remplace toute la structure du document et supprime toutes les données cachées d'un seul coup

Si le document est finalisé et destiné à sortir de votre organisation, cette dernière option est l'étape unique la plus complète que vous puissiez effectuer.

## Ce que les métadonnées d'un PDF contiennent réellement

Un PDF peut transporter trois couches d'information au-delà de ce que vous voyez sur la page.

La première couche est constituée des **propriétés du document**. Ce sont les métadonnées auxquelles la plupart des gens pensent : nom de l'auteur, titre, sujet, date de création, date de modification et le logiciel qui a produit le fichier. Ouvrez n'importe quel PDF dans un lecteur, vérifiez Fichier > Propriétés, et vous verrez probablement des champs comme « Auteur : Jean Dupont » et « Producteur : Microsoft Word 2021 ». Ces informations accompagnent le fichier partout où il va.

La deuxième couche est constituée des **métadonnées XMP et intégrées**. C'est moins visible mais souvent plus révélateur. Si votre PDF contient des images intégrées, ces images peuvent encore porter leurs données EXIF originales, y compris le modèle d'appareil photo, les horodatages et les coordonnées GPS. Les métadonnées XMP peuvent également inclure l'historique d'édition, des balises personnalisées et des informations sur les licences de polices. La plupart des gens ignorent que cette couche existe parce que les lecteurs PDF standard ne l'affichent pas.

La troisième couche est constituée des **données structurelles cachées**. Selon la façon dont le PDF a été créé et édité, le fichier peut contenir l'historique des révisions, du texte supprimé mais récupérable, des commentaires, des annotations, des valeurs par défaut de champs de formulaire, des calques cachés, du JavaScript et des pièces jointes intégrées. C'est la couche qui cause le plus de dommages en cas de fuite, car elle peut inclure du contenu que l'auteur pensait avoir supprimé.

Si vous avez déjà réfléchi à ce type de données cachées dans le contexte du téléversement de fichiers vers des outils web, [Est-il sûr d'utiliser des outils PDF en ligne pour des documents sensibles ?](../is-it-safe-to-use-online-pdf-tools-for-sensitive-documents/) couvre le modèle de confiance plus large.

## Pourquoi c'est plus important qu'on ne le pense

Les fuites de métadonnées ne sont pas spectaculaires. Elles sont silencieuses, spécifiques et difficiles à annuler une fois le fichier partagé.

**Identification de l'auteur quand l'anonymat compte.** Si le PDF a été créé par une personne spécifique, le champ auteur ou le chemin de fichier interne peuvent remonter jusqu'à elle. Cela compte pour les lanceurs d'alerte, les rapports anonymes, les documents divulgués ou toute situation où l'identité de l'expéditeur est censée rester hors du fichier.

**L'historique des révisions exposant la stratégie de négociation.** Un PDF de contrat qui contient encore des modifications suivies ou des métadonnées de révision peut révéler votre position initiale, ce que vous avez supprimé et ce que vous avez adouci avant d'envoyer la version finale. L'autre partie n'a pas besoin d'être technique pour tomber dessus. Certains lecteurs PDF affichent automatiquement les données de révision.

**Les horodatages révélant des moments sensibles.** Les dates de création et de modification indiquent à quelqu'un quand le document a été commencé, quand il a été modifié pour la dernière fois et combien de fois il a été touché. Dans des contextes juridiques, de conformité ou concurrentiels, ce type d'information temporelle peut compter plus que le contenu lui-même.

**Coordonnées GPS des images intégrées.** Si vous avez collé une photo dans le PDF et que cette photo porte encore des données de localisation EXIF, les coordonnées GPS de l'endroit où l'image a été prise sont maintenant intégrées dans le fichier. La plupart des gens n'y pensent pas car les métadonnées résident dans l'objet image, pas dans le panneau des propriétés du PDF.

**Les versions de logiciel révélant les outils internes.** Des champs comme « Producteur : Adobe Acrobat Pro DC 24.1.30225 » ou « Créateur : Microsoft Word pour Microsoft 365 » indiquent à quelqu'un quels outils et versions votre organisation utilise. Pour la plupart des documents, c'est anodin. Pour les contextes sensibles, c'est une fuite d'information inutile.

Rien de tout cela n'est hypothétique. Ce sont les fuites de métadonnées banales qui se produisent réellement.

## Comment vérifier quelles métadonnées contient votre PDF

Avant de supprimer quoi que ce soit, regardez ce qui se trouve réellement dans le fichier.

**Boîte de dialogue des propriétés du lecteur PDF.** Dans la plupart des lecteurs PDF, Fichier > Propriétés ou Propriétés du document affiche les champs de base : auteur, titre, sujet, date de création, date de modification et application productrice. Cela couvre la première couche mais manque presque tout le reste.

**exiftool en ligne de commande.** Exécuter `exiftool document.pdf` vous montrera tout : propriétés du document, données XMP, EXIF des images intégrées et champs personnalisés. C'est la méthode d'inspection la plus complète, mais elle nécessite d'être à l'aise avec un terminal. Si vous ne l'avez jamais utilisé, cela vaut la peine de l'installer rien que pour voir ce qu'un seul PDF peut contenir.

**Lecteurs de métadonnées en ligne.** Certains sites web vous permettent de téléverser un PDF pour inspecter ses métadonnées. Si la raison pour laquelle vous vérifiez les métadonnées est la confidentialité, téléverser le fichier vers un service tiers pour l'inspecter est une décision discutable. Vous essayez de savoir si le fichier divulgue des informations, et la première étape est de l'envoyer à un inconnu.

Une fois que vous savez ce qu'il y a dans le fichier, la question est de savoir comment le supprimer.

## Méthodes pour supprimer les métadonnées d'un PDF

Il n'existe pas de méthode unique idéale. Le bon choix dépend de ce que vous devez conserver et du degré de rigueur dont vous avez besoin.

### Adobe Acrobat (Assainir le document)

Acrobat Pro inclut les fonctions « Supprimer les informations masquées » et « Assainir le document » qui peuvent supprimer les métadonnées, le texte masqué, les commentaires, les données de formulaire, les pièces jointes et tout autre contenu non visible. C'est l'une des approches les plus complètes si vous devez conserver la couche de texte intacte et le fichier consultable par recherche.

La limite est qu'il faut une licence Acrobat Pro payante. Si vous l'avez déjà, c'est une option solide. Si ce n'est pas le cas, ce type de problème ne justifie pas l'abonnement à lui seul.

### exiftool et autres outils CLI

exiftool peut supprimer chirurgicalement des champs de métadonnées spécifiques ou tout supprimer d'un PDF en une seule commande. Il est gratuit, fonctionne sur toutes les plateformes et offre un contrôle précis sur exactement ce qui est supprimé.

La limite est la barrière technique. Il se concentre également sur les champs de métadonnées plutôt que sur les données structurelles cachées. Si le PDF contient un historique de révisions, des calques cachés ou des objets intégrés, exiftool ne les détectera pas. Il est excellent dans ce qu'il fait, mais ne couvre pas toutes les couches.

### Outils de suppression de métadonnées en ligne

Plusieurs sites web vous permettent de téléverser un PDF, de supprimer les métadonnées et de télécharger la version nettoyée. Le processus est simple et ne nécessite aucune installation de logiciel.

La limite devrait être évidente. Vous téléversez un document vers un serveur tiers pour résoudre un problème de confidentialité. C'est un peu comme donner votre journal intime à un inconnu pour qu'il arrache la page avec votre adresse.

Si le fichier est à faible risque, cela peut être un compromis acceptable. Si vous supprimez les métadonnées parce que le document est sensible, cette approche introduit exactement le type d'exposition que vous essayez d'éviter. Pour en savoir plus sur ce compromis, [Est-il sûr d'utiliser des outils PDF en ligne pour des documents sensibles ?](../is-it-safe-to-use-online-pdf-tools-for-sensitive-documents/) le couvre en détail.

### Imprimer en PDF

Réimprimer un PDF via une imprimante virtuelle crée un nouveau fichier qui supprime souvent certaines métadonnées et aplatit certains éléments. C'est gratuit et intégré à la plupart des systèmes d'exploitation.

Les résultats sont incohérents. Certaines imprimantes virtuelles injectent leurs propres métadonnées dans le résultat. Certaines suppriment les données XMP, d'autres non. Les données EXIF des images intégrées peuvent ou non survivre au processus. Si vous utilisez cette méthode, vérifiez toujours le résultat au lieu de supposer qu'il est propre.

### Conversion en PDF d'apparence scannée

Cette approche convertit chaque page du PDF en image, puis emballe ces images dans un nouveau PDF. Parce que toute la structure du document est remplacée, toutes les données cachées sont supprimées : métadonnées, couches de texte, commentaires, historique des révisions, fichiers intégrés, champs de formulaire, JavaScript, tout. Le résultat est un nouveau PDF qui ne contient que des images rendues des pages.

Le compromis est que le fichier n'est plus consultable par recherche de texte. Il se comporte comme une photo de chaque page. Pour les documents finalisés et destinés à sortir de votre organisation, ce compromis en vaut souvent la peine. Pour les documents qui doivent encore être recherchés, cités ou modifiés en aval, ce n'est pas le cas.

C'est le travail que fait [Look Scanned](https://lookscanned.io). Il convertit le PDF en version d'apparence scannée localement dans votre navigateur, de sorte que le fichier ne quitte jamais votre appareil. Le résultat est un PDF propre basé sur des images, sans données cachées, sans couches de texte, sans métadonnées de l'original et sans traitement côté serveur dont il faut se soucier.

## Comparaison

| Méthode | Supprime les propriétés du document | Supprime les calques cachés | Supprime EXIF des images | Conserve la recherche de texte | Nécessite un téléversement | Coût |
| --- | --- | --- | --- | --- | --- | --- |
| Adobe Acrobat (Assainir) | Oui | Oui | Dépend des paramètres | Oui | Non | Payant |
| exiftool / CLI | Oui | Partiel | Oui | Oui | Non | Gratuit |
| Outils de métadonnées en ligne | Généralement | Généralement non | Parfois | Oui | Oui | Gratuit |
| Imprimer en PDF | Partiellement | Partiellement | Parfois | Généralement | Non | Gratuit |
| Conversion en scan (ex. Look Scanned) | Oui | Oui | Oui | Non | Non (navigateur local) | Gratuit |

Aucune ligne n'est parfaite pour toutes les situations. La question est toujours de savoir quels compromis comptent pour ce fichier spécifique.

## Quand chaque approche est pertinente

**Le document est encore en cours de travail.** Supprimez les métadonnées avec Acrobat ou exiftool. Conservez la couche de texte. La suppression de métadonnées à ce stade est de l'entretien, pas l'événement principal.

**Le document est finalisé et sort de votre organisation.** Si la recherche n'est pas critique, une conversion en apparence de scan est l'étape unique la plus complète. Elle supprime tout en un seul passage. Si le fichier doit encore être consultable par recherche, utilisez plutôt la fonction Assainir d'Acrobat, et vérifiez le résultat.

**Le document est hautement sensible.** Combinez les approches. Occupez-vous d'abord de la biffure appropriée, puis du nettoyage des métadonnées, puis d'une conversion finale en apparence de scan. Chaque étape couvre une couche différente. Si la biffure fait partie de votre flux de travail, [Les barres noires ne sont pas de la biffure](../black-bars-arent-redaction-pdf-redaction-checklist/) explique pourquoi le masquage visuel ne suffit pas.

**Vous n'êtes pas sûr de ce que contient le fichier.** Vérifiez d'abord avec exiftool ou le panneau des propriétés. Puis décidez en fonction de ce que vous trouvez et de la destination du fichier. Choisir une méthode de suppression avant de comprendre ce qui doit être supprimé mène soit à de l'excès, soit à des données manquées.

Si vous vous demandez si un PDF d'apparence scannée est le bon format pour votre situation, [PDF scanné vs PDF modifiable : lequel devriez-vous envoyer ?](../scanned-pdf-vs-editable-pdf/) couvre cette décision de manière plus large.

## Le flux de travail que j'utilise réellement

1. Finaliser d'abord le contenu du document. Ne pas nettoyer les métadonnées d'un fichier qui est encore en cours de modification.
2. Vérifier les métadonnées de l'export final. Fichier > Propriétés au minimum. exiftool si c'est important.
3. Supprimer ou assainir selon ce que j'ai trouvé et la sensibilité de la destination.
4. Si le fichier sort et n'a pas besoin d'être consultable par recherche, je le convertis en PDF d'apparence scannée. [Look Scanned](https://lookscanned.io) gère cette étape dans le navigateur sans téléverser le fichier.
5. Ouvrir le résultat dans un lecteur neuf et vérifier. Vérifier les propriétés, essayer de sélectionner du texte, chercher des termes qui devraient avoir disparu.

Cette dernière étape détecte plus de données résiduelles que les gens ne l'imaginent.

Si l'aplatissement est suffisant pour votre situation et que vous n'avez pas besoin de la conversion complète en apparence de scan, [Comment aplatir un PDF avant de l'envoyer](../how-to-flatten-a-pdf-before-sending/) couvre ce juste milieu.

## FAQ

### La conversion en PDF scanné supprime-t-elle toutes les métadonnées ?

Oui. La conversion en PDF basé sur des images remplace toute la structure du fichier. Le résultat ne contient aucune couche de texte, aucun objet caché, aucune propriété du document d'origine et aucune métadonnée de fichier intégré. Le résultat est un nouveau PDF ne contenant que des images rendues des pages.

### Quelqu'un peut-il récupérer les métadonnées d'un PDF d'apparence scannée ?

Pas à partir du PDF lui-même. La structure originale a disparu. Les seules métadonnées dans le nouveau fichier sont celles que l'outil de conversion inscrit, comme sa propre balise producteur. Si la conversion se fait localement dans le navigateur, aucune copie côté serveur n'existe non plus.

### Supprimer les métadonnées, est-ce la même chose que la biffure ?

Non. La suppression des métadonnées élimine les propriétés cachées et les données au niveau du document. La biffure supprime le contenu visible de la page. Si vous devez supprimer des noms, des numéros ou du texte de la page elle-même, c'est une étape distincte qui doit avoir lieu avant le nettoyage des métadonnées. [Les barres noires ne sont pas de la biffure](../black-bars-arent-redaction-pdf-redaction-checklist/) explique pourquoi le masquage visuel seul ne suffit pas.

### Dois-je supprimer les métadonnées de chaque PDF que j'envoie ?

Pas nécessairement. Pour les documents courants qui sont déjà publics ou à faible risque, les métadonnées sont inoffensives. La question devient importante lorsque le document est sensible, que le destinataire est externe ou que l'identité de l'auteur est censée rester hors du fichier.

## Réflexion finale

La plupart des gens ne vérifient jamais ce que leur PDF dit d'eux avant de l'envoyer.

Le fichier est peut-être propre. Ou il contient peut-être votre nom, votre historique de révisions et les coordonnées GPS du café où vous l'avez modifié mardi dernier.

Si le document est suffisamment important pour être partagé avec précaution, il est suffisamment important pour être vérifié. Et si la vérification révèle plus que ce que vous attendiez, il existe des moyens simples de corriger le problème avant d'appuyer sur envoyer.
