---
layout: page
title: About
nav_order: 6
permalink: /about/
---

# 📌 About doc-site

{% if site.data.build_info %}
**Version:** {{ site.data.build_info.version }}
**Build Date:** {{ site.data.build_info.buildDate }}
{% else %}
No build information available.
{% endif %}

**doc-site** is a Jekyll template designed to create clear and well-structured documentation, with flexible deployment on **GitHub Pages** or **Netlify**.

**Based on Just the Docs**, it offers intuitive navigation and integrated search.

**Supports Mermaid 11.4.1** to easily integrate diagrams.

**Ready to use**: use **[Use this template](https://github.com/dsissoko/doc-site/generate)** to quickly start your own documentation!

---
