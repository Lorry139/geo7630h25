# Configuration Geoserver et mise en place de services VTS et WFS
## 1- Configuration et lancement d’une instance de Geoserver

Ouvrir GitHub et se connecter
Lancer un Codespace à partir du fork du dépot github du cours (sur la branche main le codespace, ouvrir directement le codespace sur ce Github).
Cela démarre un environnement virtuel où l'on pourra modifier et tester du code, ainsi que démarrer des services cartographiques.

## 2- Configuration de l’environnement

Copier-coller le fichier .env.example situé dans le dossier Atlas (dans le même dossier).
Renommer le fichier en .env (supprimez le .example).
Modifier les variables d’environnement avec nos propres informations personnelles :

DB_USER=CODEPERMANENT
DB_PASSWORD=VOTREMOTDEPASSE
DB_HOST=geo7630h25.cvwywmuc8u6v.us-east-1.rds.amazonaws.com
DB_NAME=geo7630

Dans le dossier Atlas, faire un clic droit sur le fichier docker-compose.yml et sélectionnez Compose Up.


