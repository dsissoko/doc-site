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
│   ├── containers
│   │   ├── container1
│   │   │   ├── components
│   │   │   │   ├── component1
│   │   │   │   │   └── component1-diag1.md
│   │   │   │   └── component2
│   │   │   │       ├── code
│   │   │   │       │   ├── code1
│   │   │   │       │   │   └── code1-diag1.md
│   │   │   │       │   └── code2
│   │   │   │       │       └── code2-diag1.md
│   │   │   │       ├── component2-diag1.md
│   │   │   │       └── component2-diag2.md
│   │   │   └── container1-diag1.md
│   │   ├── container2
│   │   │   ├── component3
│   │   │   │   ├── component3-diag1.md
│   │   │   │   └── component3-diag2.md
│   │   │   ├── component4
│   │   │   │   └── component4-diag1.md
│   │   │   └── container2-diag1.md
│   │   └── containers-overview.md
│   └── context1-diag1.md
├── context2
│   └── context2.md
└── contexts-overview.md
```

⚠️ Reminder: You can duplicate directory names, but each file name and page title must be unique.

