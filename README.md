# Nom du Projet

Ce dépôt est un template pour un site statique Jekyll, conçu pour offrir une double possibilité de déploiement :

- **GitHub Pages** pour les projets publics (le site est déployé depuis le répertoire `docs`)
- **Netlify** pour les projets privés (la version gratuite de Netlify prend en charge les dépôts privés)

Ce template intègre le thème [Just the Docs](https://just-the-docs.github.io/just-the-docs/), qui fournit une documentation élégante et conviviale pour structurer et présenter vos contenus. La seule customization concerne un bouton de switch de theme "light/dark".

## Fonctionnalités

- **Jekyll** : Un générateur de site statique performant et personnalisable.
- **Déploiement Flexible** : Choisissez GitHub Pages pour les projets open-source ou Netlify pour garder votre dépôt privé.
- **Structure Claire** : Tout le contenu du site se trouve dans le répertoire `docs`, pour une gestion simplifiée.
- **Thème Just the Docs** : Bénéficiez d'une mise en page moderne et d'une navigation intuitive pour votre documentation.

## Structure du Dépôt

- `docs/` : Contient l'intégralité du site Jekyll (pages, layouts, assets, etc.)
- `README.md` : Ce fichier, qui décrit le fonctionnement et les options de déploiement.
- Autres fichiers de configuration et documentation.

## Instructions d'Utilisation

### Pour un Déploiement sur GitHub Pages (projets publics)

1. Créez un nouveau dépôt à partir de ce template.
2. Dans les paramètres du dépôt, activez GitHub Pages. L'action Github de déploiement est déjà configurée dans .github/workflows.
3. Le site sera automatiquement déployé sur GitHub Pages.

### Pour un Déploiement sur Netlify (projets privés)

1. Connectez votre dépôt à [Netlify](https://www.netlify.com/).
2. Lors de la configuration, spécifiez le dossier `docs` comme répertoire de publication.
3. Suivez les instructions Netlify pour finaliser le déploiement.

## Démarrer avec Just the Docs

Ce template intègre le thème [Just the Docs](https://just-the-docs.github.io/just-the-docs/), idéal pour créer une documentation claire et structurée.

Pour bien démarrer :

1. Consultez la [documentation officielle de Just the Docs](https://just-the-docs.github.io/just-the-docs/) pour découvrir toutes les options de configuration et de personnalisation.
2. Explorez les exemples et les options de navigation offertes par le thème.
3. Adaptez le contenu du répertoire `docs` selon vos besoins en suivant les guides proposés.

## Développement Local

Pour tester le site en local :

1. Installez [Ruby](https://www.ruby-lang.org/fr/) et [Bundler](https://bundler.io/).
2. Dans le répertoire `docs`, installez les dépendances :

```bash
   bundle install
```

3. Lancez Jekyll pour visualiser le site :

```bash
   bundle exec jekyll serve
```

4. Rendez-vous sur [http://localhost:4000](http://localhost:4000) pour voir le résultat.

## Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à soumettre une issue ou une pull request pour améliorer ce template.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus d'informations.
