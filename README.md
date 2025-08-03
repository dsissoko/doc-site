# doc-site | ![Logo](logo_ds.png)

**Template Jekyll moderne pour générer un site de documentation technique, clé en main pour vos projets open source ou privés.**

> 🚀 Pourquoi adopter `doc-site` ?
>
> ✅ **Déploiement instantané sur GitHub Pages OU Netlify**  
> ✅ Structure prête pour documenter vos solutions en suivant le **C4 model**   
> ✅ Basé sur le thème **[Just the Docs](https://just-the-docs.github.io/just-the-docs/)** (pro, responsive, recherche intégrée)  

Projet documenté en 🇫🇷 par défaut.  
Une version anglaise auto-traduite est disponible ici :

[👉 English (auto-translated by Google)](https://translate.google.com/translate?sl=auto&tl=en&u=https://github.com/dsissoko/doc-site)

---

## 📋 Fonctionnalités clés

- ✅ **Déploiement instantané** sur GitHub Pages *(public, OSS-friendly)* ou Netlify *(idéal pour les dépôts privés)*
- ✅ **Organisation simple** : tout le contenu dans `docs/`
- ✅ **Thème [Just the Docs](https://just-the-docs.github.io/just-the-docs/)** : navigation latérale, recherche intégrée, responsive
- ✅ **Support natif de [Mermaid](https://mermaid.js.org/)** pour vos diagrammes et schémas
- ✅ **Documentation C4 model-ready** : modélisez vos architectures ([C4 model](https://c4model.com))
- ✅ **Déploiement conditionnel** : variable `PAGES_ENABLED=false` pour désactiver GitHub Pages et éviter les erreurs d’action
- ✅ **Personnalisation facile** : éditez [`docs/_config.yml`](docs/_config.yml) pour adapter le thème ou la navigation (toutes les options [Just the Docs](https://just-the-docs.github.io/just-the-docs/docs/configuration/) sont supportées)

---

## ⚡ Démarrage express

### 1️⃣ Créez votre site depuis ce template

- Cliquez sur [Use this template](https://github.com/dsissoko/doc-site/generate) pour générer votre repo en 2 clics

### 2️⃣ Déployez… selon votre besoin

#### ▶️ Sur GitHub Pages (public OSS)

- Activez **GitHub Pages** dans les Settings du repo  
- Le workflow `.github/workflows` est déjà configuré
- Si GitHub Pages n’est pas activé :  
  - Positionnez la variable **PAGES_ENABLED** à `false` pour éviter le fail de l’action
- Le site sera publié sur  
  - `https://<votre-user>.github.io/<votre-repo>/`

#### 🔒 Sur Netlify (projet privé ou public)

- [Connectez votre repo à Netlify](https://www.netlify.com/)
- **Définissez `docs/` comme répertoire de publication**
- Déployez, c’est fait :  
  - Demo : https://docsite-demo.netlify.app/

---

## 💻 Développement local

### Prérequis

- [Ruby](https://rvm.io/) + Bundler
- OS Linux/Mac/WSL conseillé pour dev local

### Setup

```bash
# Installez Ruby via RVM (ou autre)
gpg --keyserver keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
curl -sSL https://get.rvm.io | bash -s stable
source ~/.rvm/scripts/rvm
rvm install 3.2.2

# Dans docs/, installez les dépendances
cd docs
bundle install

# Lancez le serveur Jekyll local avec live reload
bundle exec jekyll serve --livereload
```

> 🖥️ Le site est accessible sur http://localhost:4000  
> Modifiez le contenu, ajoutez des pages dans `docs/`, rafraîchissez pour voir le résultat !

---

## 🎯 Badges

[![Deploy Jekyll site to Pages](https://github.com/dsissoko/doc-site/actions/workflows/jekyll.yml/badge.svg)](https://github.com/dsissoko/doc-site/actions/workflows/jekyll.yml)

[![Netlify Status](https://api.netlify.com/api/v1/badges/82f3fd88-b7c6-425f-9886-a4d707b48874/deploy-status)](https://app.netlify.com/sites/docsite-demo/deploys)

---

📫 Maintenu par [@dsissoko](https://github.com/dsissoko) – suggestions et étoiles appréciées !
