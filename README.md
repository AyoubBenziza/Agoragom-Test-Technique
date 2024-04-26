# Gestionnaire de Tâches Full-Stack (React & Node.js)

Bonjour et bienvenue dans le défi technique d'Agoragom !   
Vous devez créer une application full-stack avec **React** pour le frontend et **Node.js** pour le backend qui permettra la **gestion de tâches**.

##  Instructions

> Les deux parties de l'application sont pré-configurées pour vous aider à démarrer rapidement.  
> Vous pouvez les trouver dans les dossiers `my-tasks-frontend` et `my-tasks-backend`.  
> Libre à vous de les remplacer pour partir de zéro.

1. **Forker** ce dépôt sur votre compte GitHub. (bouton en haut à droite).
2. **Cloner** le fork sur votre machine locale.

```bash
git clone https://github.com/VOTRE_COMPTE_GITHUB/Agoragom-Test-Technique.git
```

3. **Installer** les dépendances des projets `my-tasks-frontend` et `my-tasks-backend`.

```bash
cd my-tasks-frontend
npm install
cd ../my-tasks-backend
npm install
```

4. **Lancer** les projets
   `my-tasks-frontend` et `my-tasks-backend`.

```bash
npm run dev
```

> Note: il sera peut être nécessaire d'installer nodemon sur votre machine si vous ne l'avais jamais utilisé pour `my-tasks-backend`, installez la dépendance comme ceci `npm i -g nodemon`.

##  Étapes à suivre

###  Backend (Node.js)

1. Créez un serveur **Node.js** avec **Express**.
2. Définissez une route `GET /api/tasks` qui retournera la liste de toutes les tâches.
3. Définissez une route `POST /api/tasks` qui permettra de créer une nouvelle tâche à partir des données envoyées dans le corps de la requête.
4. Stockez les données des tâches dans un fichier **JSON**.
5. Utiliser des codes de statut **HTTP** appropriés pour chaque réponse.

>  Une tâche est constitué de deux champs
>
> ```js
> {
>   id: number; //Un identifiant unique
>   title: string; //Un titre
> }
> ```

>  Pour stocker les données des tâches dans un fichier JSON, Utilisez [writeFileSync](https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options) et [readFileSync](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options).
>
> ```json
> exemple de ficher JSON
> [
>  {
>    "id": 1,
>    "title": "Faire les courses"
>  },
>  {
>    "id": 2,
>    "title": "Préparer le dîner"
> }
> ]
> ```

###  Frontend (React)

1. Créez un composant `TaskList` qui affichera la liste des tâches.
2. Au chargement du composant, récupérez les données des tâches depuis `backend` en utilisant une requête `GET`.
3. Affichez la liste des tâches avec leur titre respectif.
4. Ajoutez un formulaire permettant de créer une nouvelle tâche en saisissant son titre.
5. Lors de l'envoi du formulaire, utiliser une requête `POST` à `backend` avec les données de la nouvelle tâche.

####  Structure de base des projets

```plaintext
my-tasks-frontend
  ┣ src
  ┃ ┣ 📂assets
  ┃ ┣ 📂components
  ┃ ┣ 📂styles
  ┗ ┗ 📜main.jsx
📦my-tasks-backend
  ┣ 📂src
  ┃ ┣ 📂data
  ┃ ┃ ┗ 📜tasks.json
  ┗ ┗ 📜server.js
```

Libre à vous de changer la structure des projets si vous le souhaitez.

### 🌟 Bonus

- Une attention particulière à l'UI/UX.
- Finissez le `CRUD` en définissant:  
   Une route `DELETE /api/tasks/:id` pour supprimer une tâche existante,  
   Une route `PUT /api/tasks/:id` pour mettre à jour une tâche existante.  
  Mettre en forme ces changements dans le `frontend`.
- Coder en anglais (variables, fonctions, commentaires, etc.).
- Supprimer les bases des projets `my-tasks` et initialiser les projets en TypeScript.

## 📦 Rendu

Fournir un lien vers votre dépôt GitHub (pensez à le rendre public)
à l'adresse suivante : webmaster@agoragom.com

---

Bon courage ! 🚀

```

```
