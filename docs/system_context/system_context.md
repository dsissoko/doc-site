---
layout: page
title: System context
has_toc: true
has_children: true
nav_order: 2
permalink: /systemctx/
---

# System context

Depending on the complexity of the system, multiple contexts can be created. This is an arbitrary architectural choice. However, a single context allows capturing many already complex use cases.

From a markdown file structure perspective, you can place them flat or in a directory hierarchy. In all cases, each `.md` file must have a unique name.

I recommend naming files simply with the name of the abstraction they document (<https://c4model.com/abstractions>). For example, if you are documenting a webapp-type container for a traveler information system, name the file `webapp-voyageur-iv.md`.

Personally, I prefer a directory structure as it allows navigating through the complexity of the system during the drafting phase without getting lost.
The examples in this template are organized by directory:

```plaintext
system_context/
├── context1
│   ├── container1
│   │   ├── component1
│   │   │   └── component1.md
│   │   ├── component2
│   │   │   ├── code1
│   │   │   │   └── code1.md
│   │   │   ├── code2
│   │   │   │   └── code2.md
│   │   │   └── component2.md
│   │   └── container1.md
│   ├── container2
│   │   ├── component3
│   │   │   └── component3.md
│   │   ├── component4
│   │   │   └── component4.md
│   │   └── container2.md
│   └── context1.md
├── context2
│   └── context2.md
└── system_context.md
```

⚠️ Remember: you can duplicate the directories name but ecach files name and title page have to be unique.

