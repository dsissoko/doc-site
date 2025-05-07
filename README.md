# doc-site | ![Logo](logo_ds.png)

[🇺🇸 English (US) friendly](https://translate.google.com/translate?sl=auto&tl=en&u=https://github.com/dsissoko/doc-site)

Bienvenue sur doc-site, un template Jekyll conçu pour générer un site de documenation de solutions logicielles. Deux proposions:

1. **Double option de déploiement** : 
   - **GitHub Pages** : Idéal pour les projets open-source. <https://dsissoko.github.io/doc-site/>
   - **Netlify** : Parfait pour les projets privés (le plan gratuit prend en charge les dépôts privés). <https://docsite-demo.netlify.app/>
2. **Une méthode de documentation de vos solutions logicielles** basée sur [C4 model ](https://c4model.com)

🚀 **Pour utiliser ce projet, nous vous recommandons d'utiliser la fonction GitHub "[Use this template](https://github.com/dsissoko/doc-site/generate)"** afin de créer rapidement votre propre dépôt basé sur ce modèle.

Ce template repose sur le thème [Just the Docs](https://just-the-docs.github.io/just-the-docs/), qui offre une expérience fluide et moderne pour organiser et présenter vos contenus.

### ✨ Personnalisations incluses
- voir le [**_config.yml**](docs/_config.yml)
- **Support de Mermaid 11.4.1** pour vos diagrammes et schémas.

---

## 🚀 Fonctionnalités

- **Jekyll** : Un générateur de site statique performant et flexible.
- **Déploiement optimisé** : GitHub Pages pour les projets publics, Netlify pour les projets privés.
- **Déploiement conditionnel** : Pour éviter un failed de l'action github de déploiement quand les GITHUB pages ne sont pas activées, vous pouvez positionner une variable pour les actions **PAGES_ENABLED** à false dans les settings de votre projet.
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
2. **Activez GitHub Pages** dans les paramètres du dépôt (l'action de déploiement est déjà configurée dans `.github/workflows`). L'action GITHUB échouera tant que nous n'avez pas activé les pages ou que vous n’avez pas positionnée une variable **PAGES_ENABLED** à false
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

1. Installez [Ruby](https://rvm.io/)

   ```bash
   # suivez la procédure à jour sur https://rvm.io/ qui resemble à ça:
   gpg --keyserver keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
   # vous pouvez utiliser gpg2 également
   curl -sSL https://get.rvm.io | bash -s stable
   source ~/.rvm/scripts/rvm
   rvm install 3.2.2
   ruby -v
   ruby 3.2.2 (2023-03-30 revision e51014f9c0) [x86_64-linux]
   gem -v
   3.4.10   
   ```

3. Dans le dossier `docs/`, installez les dépendances :

   ```bash
   cd docs
   # la magie rvm opère en détectant directement .ruby-version
   Using /home/david/.rvm/gems/ruby-3.2.2
   bundle install
   ```

4. Lancez Jekyll pour voir le site en local :

   ```bash
   bundle exec jekyll serve
   ```

5. Accédez à **[http://localhost:4000](http://localhost:4000)** pour voir le rendu.

## 🔗 Démarrer avec C4 model

- [Visualising software architecture with the C4 model](https://www.youtube.com/watch?v=x2-rSnhpw0g&t=1689s)

---

## 🤝 Contribuer

Toutes les contributions sont les bienvenues !  
Si vous avez des suggestions ou des améliorations, n’hésitez pas à soumettre une **issue** ou une **pull request**.

---

## 📜 Licence

© 2024-2025 David Sissoko. Distribué sous licence [MIT](LICENSE).

## 🎯 Badges

[![Deploy Jekyll site to Pages](https://github.com/dsissoko/doc-site/actions/workflows/jekyll.yml/badge.svg)](https://github.com/dsissoko/doc-site/actions/workflows/jekyll.yml)

[![Netlify Status](https://api.netlify.com/api/v1/badges/82f3fd88-b7c6-425f-9886-a4d707b48874/deploy-status)](https://app.netlify.com/sites/docsite-demo/deploys)
