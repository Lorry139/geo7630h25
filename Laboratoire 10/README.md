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

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/0688b0cf976607345a6641372f250cc7f958c944/Laboratoire%2010/Capture%20d%E2%80%99%C3%A9cran%202025-03-18%20204240.png)

Dans le dossier Atlas, faire un clic droit sur le fichier docker-compose.yml et sélectionnez Compose Up.
Si l’option Compose Up n’apparaît pas, installer l’extension Docker. (Ctrl+shift+x cherchez Docker)

Vérifier que les conteneurs s’exécutent correctement en consultant l’icône de la baleine Docker.
Normalement, on devrait avoir comme ceci après avoir cliqué dessus.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/0688b0cf976607345a6641372f250cc7f958c944/Laboratoire%2010/Capture%20d%E2%80%99%C3%A9cran%202025-03-18%20204531.png)

Ouvrir un terminal (CTRL+J) et tester l’application en accédant à son interface web, en cliquant sur port, et en ouvrant ensuite l'un de ces ports (8000).

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/0688b0cf976607345a6641372f250cc7f958c944/Laboratoire%2010/Capture%20d%E2%80%99%C3%A9cran%202025-03-18%20204629.png)

## 3- Ajout de contrôles de carte
Dans le fichier /Atlas/app/app.js, ajouter des contrôles suivants cette image.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/0688b0cf976607345a6641372f250cc7f958c944/Laboratoire%2010/Capture%20d%E2%80%99%C3%A9cran%202025-03-18%20204916.png)

### - Contrôle de navigation : 

var nav = new maplibregl.NavigationControl({
    showCompass: true,
    showZoom: true,
    visualizePitch: true
});
map.addControl(nav, 'top-right');

### - Contrôle de géolocalisation : 

var geolocateControl = new maplibregl.GeolocateControl({
    positionOptions: { enableHighAccuracy: true },
    trackUserLocation: true
});
map.addControl(geolocateControl, 'bottom-right');

### - Contrôle d’échelle :

var scale = new maplibregl.ScaleControl({ unit: 'metric' });
map.addControl(scale);

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/0688b0cf976607345a6641372f250cc7f958c944/Laboratoire%2010/Capture%20d%E2%80%99%C3%A9cran%202025-03-18%20205528.png)

Carte après ajout des controle.
https://maplibre.org/maplibre-gl-js/docs/API/#markers-and-controls un lien pour trouver différents marqueurs et controles de navigation.

## 4- Chargement de données depuis un serveur de tuiles vectorielles
Une source de tuiles vectorielles est définie par une URL qui suit le schéma {z}/{x}/{y}.pbf, où :

z représente le niveau de zoom
x et y représentent les coordonnées de la tuile
La source doit être déclarée avant d’ajouter une couche qui l’utilise.

PS: Ne jamais oublier de mettre la visibilité de nos ports en Public pour qu'ils soient totalement opérationnelle.

1. Accéder à l’interface d’administration du serveur de tuiles (par exemple pg_tileserv dans notre image, soit port 8801).
2. Rechercher le service de tuiles vectorielles correspondant à notre couche.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/0688b0cf976607345a6641372f250cc7f958c944/Laboratoire%2010/Capture%20d%E2%80%99%C3%A9cran%202025-03-18%20205754.png)

Cliquer sur JSON
![Image Alt](https://github.com/Captain-Oski/GEO7630_H25/raw/main/Laboratoires/Semaine%2010/image.png)

Repérer l'url en bas et n'oubliez pas de changer le début de l'adresse du serveur pour votre adresse.
Copier l’URL du service et remplacez-la dans le script.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/52ab4cf24fe1887d783112e6fa3aafa31ce46943/Laboratoire%2010/Capture%20d%E2%80%99%C3%A9cran%202025-03-18%20210212.png)

Le source-layer correspond au nom de la couche à afficher à partir du service de tuiles. Il est essentiel d’utiliser le bon nom, qui est défini dans la configuration du serveur de tuiles.

Ajouter la méthode map.onLoad() dans app.js :

map.on('load', function () {
    map.addSource('NOM UNIQUE QUE VOUS SOUHAITEZ DONNER À VOTRE SOURCE', {
        type: 'vector',
        tiles: ['https://your-server-url/PROPRIÉTÉ IS DE LA SOURCE.JSON/{z}/{x}/{y}.pbf']
    });
    map.addLayer({
        'id': 'IDENTIFIANT UNIQUE DU LAYER QUE VOUS SOUHAITEZ DONNER ',
        'type': 'fill',
        'source': 'NOM QUE VOUS AVEZ DONNÉ À VOTRE SOURCE',
        'source-layer': 'PROPRIÉTÉ IS DE LA SOURCE.JSON'
    });
});


![Image Alt]()

![Image Alt]()

![Image Alt]()

![Image Alt]()
