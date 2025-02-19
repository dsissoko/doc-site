---
layout: page
title: À propos
nav_order: 6
permalink: /about/
---

# 📌 À propos de doc-site

{% if site.data.build_info %}
**Version :** {{ site.data.build_info.version }}
**Build Date :** {{ site.data.build_info.buildDate }}
{% else %}
Aucune information de build n'est disponible.
{% endif %}

**doc-site** est un template Jekyll conçu pour créer une documentation claire et bien structurée, avec un déploiement flexible sur **GitHub Pages** ou **Netlify**.

**Basé sur Just the Docs**, il offre une navigation intuitive et une recherche intégrée.

**Support de Mermaid 11.4.1** pour intégrer facilement des diagrammes.

**Prêt à l'emploi** : utilisez **[Use this template](https://github.com/YOUR-REPO-URL/generate)** pour démarrer rapidement votre propre documentation !

---
