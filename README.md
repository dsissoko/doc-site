# doc-site | ![Logo](logo_ds.png)

[🇺🇸 English (US) friendly](https://translate.google.com/translate?sl=auto&tl=en&u=https://github.com/dsissoko/doc-site)

Bienvenue sur doc-site, un template Jekyll conçu pour générer un site statique élégant et structuré, avec une double option de déploiement :

- **GitHub Pages** : Idéal pour les projets open-source.
- **Netlify** : Parfait pour les projets privés (la version gratuite prend en charge les dépôts privés).

🚀 **Pour utiliser ce projet, nous vous recommandons d'utiliser la fonction GitHub "[Use this template](https://github.com/YOUR-REPO-URL/generate)"** afin de créer rapidement votre propre dépôt basé sur ce modèle.

Ce template repose sur le thème [Just the Docs](https://just-the-docs.github.io/just-the-docs/), qui offre une expérience fluide et moderne pour organiser et présenter vos contenus.

### ✨ Personnalisations incluses
- Un **mode clair/sombre** avec un bouton de bascule intégré.
- **Support de Mermaid 11.4.1** pour vos diagrammes et schémas.

---

## 🚀 Fonctionnalités

- **Jekyll** : Un générateur de site statique performant et flexible.
- **Déploiement optimisé** : GitHub Pages pour les projets publics, Netlify pour les projets privés.
- **Organisation simplifiée** : Tout le contenu est centralisé dans `docs/` pour une gestion fluide.
- **Thème Just the Docs** : Navigation intuitive, recherche intégrée et mise en page responsive.

---

## 📁 Structure du Dépôt

- `docs/` : Contient l’intégralité du site (pages, layouts, assets, etc.).
- `README.md` : Ce fichier, qui détaille le fonctionnement du template et les options de déploiement.
- Autres fichiers de configuration et documentation.

---

## 🚀 Déploiement

### ▶️ GitHub Pages (Projets Publics)

1. **Créez un dépôt** en partant de ce template via **"Use this template"**.
2. **Activez GitHub Pages** dans les paramètres du dépôt (l'action de déploiement est déjà configurée dans `.github/workflows`).
3. **Profitez du site** : Le déploiement s'effectue automatiquement.

### 🔒 Netlify (Projets Privés)

1. **Connectez votre dépôt** à [Netlify](https://www.netlify.com/).
2. **Définissez `docs/`** comme répertoire de publication lors de la configuration.
3. **Déployez** et laissez Netlify s’occuper du reste !

---

## 📖 Démarrer avec Just the Docs

Le template inclut le thème [Just the Docs](https://just-the-docs.github.io/just-the-docs/), idéal pour structurer votre documentation.

### 🔹 Premiers pas :
1. Consultez la [documentation officielle](https://just-the-docs.github.io/just-the-docs/) pour explorer toutes les options de personnalisation.
2. Adaptez le contenu du répertoire `docs/` selon vos besoins.
3. Expérimentez la navigation et les options disponibles pour optimiser votre documentation.

---

## 💻 Développement Local

Envie de tester avant de déployer ? Voici comment lancer le site en local :

1. Installez [Ruby](https://www.ruby-lang.org/fr/) et [Bundler](https://bundler.io/).
2. Dans le dossier `docs/`, installez les dépendances :

   ```bash
   bundle install
   ```

3. Lancez Jekyll pour voir le site en local :

   ```bash
   bundle exec jekyll serve
   ```

4. Accédez à **[http://localhost:4000](http://localhost:4000)** pour voir le rendu.

---

## 🤝 Contribuer

Toutes les contributions sont les bienvenues !  
Si vous avez des suggestions ou des améliorations, n’hésitez pas à soumettre une **issue** ou une **pull request**.

---

## 📜 Licence

Ce projet est sous licence MIT. Consultez le fichier [LICENSE](LICENSE) pour plus de détails.

## 🎯 Badges

[![Deploy Jekyll site to Pages](https://github.com/dsissoko/doc-site/actions/workflows/jekyll.yml/badge.svg)](https://github.com/dsissoko/doc-site/actions/workflows/jekyll.yml)

[![Netlify Status](https://api.netlify.com/api/v1/badges/62c43b36-9522-4424-b8d4-f1d7e4c87a3b/deploy-status)](https://app.netlify.com/sites/r3edge-doc-site/deploys)
