# Cartographie interactive avec MapLibreGL
## 1- Initialisation de la carte

### Élaborer les bases du webmapping
Tout d'abord, commencer par créer les fichiers .env, et index.html et les configurer

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/ad4947871171cf5fa52b9d43b08502d8b8b20a28/lab11/Images/Capture%20d%E2%80%99%C3%A9cran%202025-04-07%20142827.png)



### Créer un fichier : map-controls.js

Créer un fichier map-controls.js et injecter la carte et les controleurs de carte (var map = new maplibregl.Map , var control = map.NavigationControl(...) etc...)

    Création de la carte MapLibreGL
    Définition du fond de carte via MapTiler
    Ajout des contrôles :
    - Navigation (zoom + boussole)
    - Géolocalisation
    - Échelle

Voici le code qu'on a utilisé pour celui-ci :

// création de la carte Mapbox GL
var map = new maplibregl.Map({
    container: 'map', // identifiant de l'élément HTML conteneur de la carte
    style: 'https://api.maptiler.com/maps/dataviz/style.json?key=JhO9AmIPH59xnAn5GiSj', // URL du style de la carte
    center: [-73.55, 45.55], // position centrale de la carte
    zoom: 9, // niveau de zoom initial
    hash: true // activation du hash pour la gestion de l'historique de la carte
});
map.addControl(new maplibregl.NavigationControl({
    showCompass: true,
    showZoom: true,
    visualizePitch: true
}), 'top-right');
map.addControl(new maplibregl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
}), 'bottom-right');
map.addControl(new maplibregl.ScaleControl({
    maxWidth: 200,
    unit: 'metric'
}), 'bottom-left');

![Image Alt]()

![Image Alt]()

![Image Alt]()

![Image Alt]()

![Image Alt]()

![Image Alt]()
