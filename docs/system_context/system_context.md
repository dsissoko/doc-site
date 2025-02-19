---
layout: page
title: System context
has_toc: true
has_children: true
nav_order: 2
permalink: /systemctx/
---

# System context

En fonction de la complexité du système, on peux tout à fait créer plusieurs contextes. C'est un choix d'architecture arbitraire. Toutefois un seul contexte permet de capter de nombreux cas d'usage déjà très complexes.

D'un point de vue structure des fichiers markdown, vous pouvez les placer à plat ou dans une arborescence de répertoire. Dans tous les cas, chaque fichier .md doit avoir un nom unique.

Je vous recommande de nommer les fichiers simplement avec le nom de l'abstraction qu'ils documentent (<https://c4model.com/abstractions>). Par exemple si vous documentez un container de type webapp pour un système d'information voyageur, alors nommez le fichier webapp-voyageur-iv.md.

Personnelement, je préfère une structure en répertoire car cela permet pendant la phase de rédaction de naviguer dans la complexité du système sans se perdre.
Les exemples de ce template sont organisés par répertoire:

```plaintext
system_context/
├── context1
│   ├── container1
│   │   ├── component1
│   │   │   └── ctx1ct1component1.md
│   │   ├── component2
│   │   │   ├── code1
│   │   │   │   └── ctx1ct1cp2code1.md
│   │   │   ├── code2
│   │   │   │   └── ctx1ct1cp2code2.md
│   │   │   └── ctx1ct1component2.md
│   │   └── ctx1container1.md
│   ├── container2
│   │   ├── component1
│   │   │   └── ctx1ct2component1.md
│   │   ├── component2
│   │   │   └── ctx1ct2component2.md
│   │   └── ctx1container2.md
│   └── context1.md
├── context2
│   └── context2.md
└── system_context.md
```