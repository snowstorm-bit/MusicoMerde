# MusicoMerde

## Installation des packages
- npm install

Après avoir fait rouler la commande, il est sensé y trouver les packages suivants :
- nodemon
- jshint
- express
- mongoose
- body-parser

## Commande pour démarrer MongoDB en local
cd ./mongodb/bin
mongod.exe --dbpath ..\data\db

### Ouvrir un autre terminal
cd ./mongodb/bin
mongo.exe

## Pour voir la base de donnée hostée
Voir .env => DATABASE_URL
La clé contient la connection string

## Commande pour démarrer l'API
npm start

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/truc123/musicomerde.git
git branch -M main
git push -uf origin main
```
