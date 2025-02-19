---
layout: page
title: System context
has_toc: true
has_children: true
permalink: /systemctx/
nav_order: 2
---

# System context

En fonction de la complexité du système, il est tout à fait possible de définir plusieurs contextes. C'est un choix d'architecture arbitraire. Cependant, un **contexte unique** permet déjà de couvrir un large éventail de cas d'usage complexes.

En ce qui concerne l'organisation des fichiers Markdown, vous pouvez choisir une structure **plate** (tout dans un même dossier) ou une **arborescence de répertoires** selon vos besoins. Dans tous les cas, **chaque fichier `.md` doit avoir un nom unique**.

Pour garantir une cohérence dans le nommage des fichiers, il est préférable d'utiliser le nom de l'**abstraction C4 Model** correspondante (<https://c4model.com/abstractions>).  
Par exemple, si vous documentez un **container de type webapp** pour un **système d'information voyageur**, nommez le fichier **`webapp-voyageur-iv.md`**.

Je privilégie une **structure en répertoires**, car elle facilite la navigation et évite de se perdre dans la complexité du système lors de la rédaction.  
Les exemples de ce template sont organisés par répertoire :

```plaintext
system_context
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

