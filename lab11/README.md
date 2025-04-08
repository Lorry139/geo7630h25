# Cartographie interactive avec MapLibreGL
## Élaborer les bases du webmapping
Tout d'abord, commencer par créer les fichiers .env, et index.html et les configurer

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/ad4947871171cf5fa52b9d43b08502d8b8b20a28/lab11/Images/Capture%20d%E2%80%99%C3%A9cran%202025-04-07%20142827.png)

Enuite, ne pas oublier de configurer un docker en fonction du repértoire.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/b169f0cf09d1de5a64aa5ec4c679d78731730de7/lab11/Images/Capture%20d%E2%80%99%C3%A9cran%202025-04-07%20142849.png)

## Créer un fichier : map-controls.js

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

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/b169f0cf09d1de5a64aa5ec4c679d78731730de7/lab11/Images/Capture%20d%E2%80%99%C3%A9cran%202025-04-07%20143013.png)

## Ajout des couches de données
Créer le fichier : map-layers.js
Créer un fichier map-layers.js et créer les layers sous forme de variable objet en commençant par la couche des commerces de Montréal.

Source GeoJSON dynamique depuis Montréal Source GeoJSON via données ouvertes ou pgfeatureserv ou pgtileserv ex : https://donnees.montreal.ca/dataset/c1d65779-d3cb-44e8-af0a-b9f2c5f7766d/resource/ece728c7-6f2d-4a51-a36d-21cd70e0ddc7/download/businesses.geojson

Aussi, avec le style de la couche comme variable de couche.

var commercesSource = {
  type: 'geojson',
  data: 'https://donnees.montreal.ca/dataset/c1d65779-d3cb-44e8-af0a-b9f2c5f7766d/resource/ece728c7-6f2d-4a51-a36d-21cd70e0ddc7/download/businesses.geojson'
};

var commercesLayer = {
  id: 'commerces',
  type: 'circle',
  source: 'commerces_source',
  paint: {
    'circle-radius': [
      'match',
      ['get', 'type'],
      'Épicerie', 5,
      'Pâtisserie/Boulangerie', 7,
      'Distributrice automatique', 4,
      'Pharmacie', 6,
      'Restaurant', 5,
      3
    ],
    'circle-color': [
      'match',
      ['get', 'type'],
      'Épicerie', 'orange',
      'Pâtisserie/Boulangerie', 'yellow',
      'Distributrice automatique', 'blue',
      'Pharmacie', 'green',
      'Restaurant', 'purple',
      'grey'
    ],
    'circle-stroke-color': '#fff',
    'circle-stroke-width': 1
  },
  filter: ['==', ['get', 'statut'], 'Ouvert']
};

Filtrage pour ne garder que ceux au statut "Ouvert" ajouté le à la suite du "paint" configuration sur la dernière lihne de ce code.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/b169f0cf09d1de5a64aa5ec4c679d78731730de7/lab11/Images/Capture%20d%E2%80%99%C3%A9cran%202025-04-07%20143034.png)

Pour le visuel des couches commerces :

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/b169f0cf09d1de5a64aa5ec4c679d78731730de7/lab11/Images/Capture%20d%E2%80%99%C3%A9cran%202025-04-01%20182253.png)


Arrondissements :
Source GeoJSON via données ouvertes ou pgfeatureserv ou pgtileserv
Polygones avec contour noir, remplissage semi-transparent
Labels centrés par arrondissement sur la propriété : nom

var arrondissementsSource = {
  type: 'geojson',
  data: 'https://donnees.montreal.ca/dataset/9797a946-9da8-41ec-8815-f6b276dec7e9/resource/e18bfd07-edc8-4ce8-8a5a-3b617662a794/download/limites-administratives-agglomeration.geojson'
};

var arrondissementsLayer = {
  id: 'arrondissements',
  type: 'fill',
  source: 'arrondissements_source',
  paint: {
    'fill-color': '#ccc',
    'fill-opacity': 0.3,
    'fill-outline-color': '#000'
  }
};

var arrondissementsLabelsLayer = {
  id: 'arrondissements-labels',
  type: 'symbol',
  source: 'arrondissements_source', // ✅ correspond bien au nom de la source
  layout: {
    'text-field': ['get', 'NOM'],
    'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
    'text-size': 14,
    'text-anchor': 'center'
  },
  paint: {
    'text-color': '#111',
    'text-halo-color': '#fff',
    'text-halo-width': 1.5
  },

};

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/b169f0cf09d1de5a64aa5ec4c679d78731730de7/lab11/Images/Capture%20d%E2%80%99%C3%A9cran%202025-04-07%20143048.png)

## Chargement des couches dans la carte

Fichier : app.js
Créer un fichier app.js et injecter les layers précédement créer dans le map-layers.js
Ajout des sources et des couches :
        commerces_source → commerces
        arrondissements-source → arrondissements, arrondissements-labels

map.on('load', function () {
  // Ajouter sources
  map.addSource('commerces_source', {
    type: 'geojson',
    data: 'https://donnees.montreal.ca/dataset/c1d65779-d3cb-44e8-af0a-b9f2c5f7766d/resource/ece728c7-6f2d-4a51-a36d-21cd70e0ddc7/download/businesses.geojson'
  });
  map.addSource('arrondissements_source', {
    type: 'geojson',
    data: 'https://donnees.montreal.ca/dataset/9797a946-9da8-41ec-8815-f6b276dec7e9/resource/e18bfd07-edc8-4ce8-8a5a-3b617662a794/download/limites-administratives-agglomeration.geojson'
  });

  // Ajouter couches
  map.addLayer({
    id: 'commerces',
    type: 'circle',
    source: 'commerces_source',
    paint: {
      'circle-radius': [
        'match',
        ['get', 'type'],
        'Épicerie', 5,
        'Pâtisserie/Boulangerie', 7,
        'Distributrice automatique', 4,
        'Pharmacie', 6,
        'Restaurant', 5,
        3
      ],
      'circle-color': [
        'match',
        ['get', 'type'],
        'Épicerie', 'orange',
        'Pâtisserie/Boulangerie', 'yellow',
        'Distributrice automatique', 'blue',
        'Pharmacie', 'green',
        'Restaurant', 'purple',
        'grey'
      ],
      'circle-stroke-color': '#fff',
      'circle-stroke-width': 1
    },
    filter: ['==', ['get', 'statut'], 'Ouvert']
  });
  map.addLayer(arrondissementsLayer);
  map.addLayer({
    id: 'arrondissements-labels',
    type: 'symbol',
    source: 'arrondissements_source',
    layout: {
      'text-field': ['get', 'NOM'],
      'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
      'text-size': 14,
      'text-anchor': 'center'
    },
    paint: {
      'text-color': '#111',
      'text-halo-color': '#fff',
      'text-halo-width': 1.5
    },
  });

});

En somme, voici la version regroupant ces deux couches, avec les noms et les styles disticnts qui ont été configurés.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/b169f0cf09d1de5a64aa5ec4c679d78731730de7/lab11/Images/Capture%20d%E2%80%99%C3%A9cran%202025-04-02%20083314.png)

## Ajout des interactions souris
Fichier : mouse-controls.js
Créer un fichier mouse-controls.js et injecter les controleurs de souris
Survol (mouseenter / mouseleave) : changement du curseur
Clic sur un commerce :
        Affiche une popup (nom + type)
        Effectue un zoom et un recentrage (flyTo)

Voici le code ayant permis de le réaliser ;
        map.on('mouseenter', 'commerces', () => {
    // Change le curseur en pointeur (main) pour indiquer que l'élément est interactif
    map.getCanvas().style.cursor = 'pointer';
});

//  Quand la souris quitte la couche "commerces" : on remet le curseur par défaut
map.on('mouseleave', 'commerces', () => {
    map.getCanvas().style.cursor = '';
});

//  Événement au clic sur un commerce
map.on('click', 'commerces', (e) => {
    // On récupère la première entité (feature) cliquée
    const feature = e.features[0];

    // Extraction des coordonnées du point (on fait une copie avec slice())
    const coordinates = feature.geometry.coordinates.slice();

    // Récupération de propriétés pour alimenter la popup
    const name = feature.properties.name;
    const description = feature.properties.type;

    // Création et affichage d'une popup HTML à la position cliquée
    new maplibregl.Popup()
        .setLngLat(coordinates)
        .setHTML(`<strong>${name}</strong><br>${description}`)
        .addTo(map);

    // Zoom et centrage automatique vers le point sélectionné
    map.flyTo({ center: coordinates, zoom: 14 }); // JumpTo
});

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/b169f0cf09d1de5a64aa5ec4c679d78731730de7/lab11/Images/Capture%20d%E2%80%99%C3%A9cran%202025-04-02%20101240.png)
