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
