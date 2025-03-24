# Webmapping open Source et Interaction avec MapLibre GL
Dans ce labo, nous allons arpenter les techniques de Webmapping dans les plateformes Open Source comm MapLibre GL et comment modifier les différents paramètres de visualisation.

Pour ce faire, il faut tout d'abord installer Visual Code Studio et la connecter à notre compte GitHub.

## Clonage du Repository sur Github et création de la branche de travail
Cloner le repository GitHub en utilisant Visual Studio ou la ligne de commande :

Créer ensuite une branche personnelle pour les modifications.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/467f40aeb3891904646ee297382bf99e478c4956/Laboratoire%209/Capture%20d%E2%80%99%C3%A9cran%202025-03-11%20210715.png)

Accéder ensuite au repértoire du laboratoire 9 de la branche qui a été créee.
Et ouvrir le fichier nommé lab9.html qui s'y trouve.
Nous aurons ainsi cette carte ci-dessous.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/467f40aeb3891904646ee297382bf99e478c4956/Laboratoire%209/Capture%20d%E2%80%99%C3%A9cran%202025-03-11%20211124.png)

## Modification du code
### Modifier les coordonnées de départ

Dans le fichier lab9.js, localisez et modifiez les coordonnées et le niveau de zoom par défaut :

[-73.55, 45.55] // Coordonnées originales

Changer par d'autres valeurs et sauvegarder.

Tester la modification en rechargeant (F5) la page web.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/467f40aeb3891904646ee297382bf99e478c4956/Laboratoire%209/Capture%20d%E2%80%99%C3%A9cran%202025-03-11%20211331.png)

## Ajout du Fichier GeoJson pour visualisation des couches
Avec le bouton déjà préparé, ajouter le fichier GeoJSON.
Les couches ont une symbole déja préparés à l'avance.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/fef2e91fe8b5b2607dedec375ce0e4c8c56f672a/Laboratoire%209/Capture%20d%E2%80%99%C3%A9cran%202025-03-11%20212210.png)

## Modifier la couleur des polygones

Dans la fonction colorPolygons() (ligne 96) du fichier .js , changer :

'color': 'red'

par :

'color': '#9f40ff' (notation Hexadécimale des couleurs)
Tester avec le bouton Colorier.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/fef2e91fe8b5b2607dedec375ce0e4c8c56f672a/Laboratoire%209/Capture%20d%E2%80%99%C3%A9cran%202025-03-11%20212358.png)

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/fef2e91fe8b5b2607dedec375ce0e4c8c56f672a/Laboratoire%209/Capture%20d%E2%80%99%C3%A9cran%202025-03-11%20212432.png)

## Créer une fonction de couleur aléatoire

Créer un nouveau fichier randomColor.js dans le repértoire et insérer le code suivant :

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

Ajouter dans index.html :

<script type='text/javascript' src='./randomColor.js'></script>

## Appliquer une couleur aléatoire aux polygones

Modifier la fonction colorPolygons() pour utiliser randomColor() à la place de la couleur codé en dur :

'color': randomColor()
Recharger la page et tester.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/fef2e91fe8b5b2607dedec375ce0e4c8c56f672a/Laboratoire%209/Capture%20d%E2%80%99%C3%A9cran%202025-03-11%20212753.png)

Nous pouvons désormais avoir des couleurs aléatoires à partir des cette ligne de code.

## Ajouter une coloration thématique

Remplacer randomColor() par une symbologie thématique basé sur l’attribut operator_id :

{
  property: 'operator_id',
  stops: [
    [2, randomColor()],
    [3, randomColor()],
    [15, randomColor()],
    [20, randomColor()],
    [25, randomColor()],
    [30, randomColor()]
  ]
 }

En MapLibreGL, cet extrait de code est utilisé pour définir une règle de style conditionnelle basée sur la propriété operator_id d’un ensemble de données géospatiales (comme un GeoJSON ou une couche de tuiles vectorielles).
Explication du code

- property: 'operator_id' : Indique que la couleur sera déterminée en fonction de l’attribut operator_id des entités dans la couche, mais cela pourrait être n'importe quel attribut. Chaque entité possède une valeur spécifique pour operator_id qui sera comparée aux valeurs des stops.

- stops: [...] : Définit une échelle de correspondance entre les valeurs de operator_id et des couleurs aléatoires.

Chaque élément de stops est une paire dans un tableau : [valeur, couleur] :

Si operator_id == 2, la couleur sera randomColor(). Si operator_id == 3, la couleur sera randomColor(). Si operator_id == 15, la couleur sera randomColor() …etc.

- randomColor() : Appelle une fonction générant une couleur aléatoire en hexadécimal (#RRGGBB). Chaque valeur de operator_id recevra une couleur différente à chaque rechargement.

## Utilisation dans un style MapLibreGL

Ce type de paramètre est souvent utilisé dans la propriété fill-color d’un layer de type fill pour colorier des polygones en fonction de l’attribut operator_id :

map.addLayer({
  'id': 'garages-layer',
  'type': 'fill',
  'source': 'geojson-source',
  'paint': {
    'fill-color': [
      'match',
      ['get', 'operator_id'], 
      2, randomColor(),
      3, randomColor(),
      15, randomColor(),
      20, randomColor(),
      25, randomColor(),
      30, randomColor(),
      '#000000' // Couleur par défaut si aucune correspondance
    ],
    'fill-opacity': 0.8
  }
});

Explication du match dans MapLibreGL :

    ['get', 'operator_id'] : Récupère la valeur de operator_id pour chaque entité.
    Chaque paire valeur, couleur affecte une couleur aux polygones ayant cette valeur.
    Couleur de fallback #000000 si operator_id n’est pas dans la liste.

Résultats attendus

    Chaque polygone dans la carte sera coloré en fonction de son operator_id.
    La couleur sera aléatoire à chaque exécution de l’application.
    Une valeur operator_id inconnue recevra la couleur noire (#000000).

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/fef2e91fe8b5b2607dedec375ce0e4c8c56f672a/Laboratoire%209/Capture%20d%E2%80%99%C3%A9cran%202025-03-11%20215532.png)

## Ajouter des étiquettes aux polygones

Dans la fonction handleFileSelect (ligne 32) injectez le morceau de code suivant à la fin (après la méthode map.addLayer()) pour permettre l'ajout d'un nouveau layer d'étiquettes à vos polygones de garages :

map.addLayer({
  'id': 'geojson-label',
  'type': 'symbol',
  'source': 'geojson-source',
  'layout': {
    'text-field': ['get', 'operator_id'],
  },
  'paint': {
    'text-color': '#202',
    'text-halo-color': '#fff',
    'text-halo-width': 2
  }
})

Recharger et tester.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/fef2e91fe8b5b2607dedec375ce0e4c8c56f672a/Laboratoire%209/Capture%20d%E2%80%99%C3%A9cran%202025-03-11%20215751.png)

Versionnement avec GitHub

Vérifiez les fichiers modifiés :

git status

Ajoutez-les à la mise en attente :

git add .

Faites un commit :

git commit -m "Mise à jour du Laboratoire 9"

Poussez vos changements :

git push origin votre_nom-labo9

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/fef2e91fe8b5b2607dedec375ce0e4c8c56f672a/Laboratoire%209/Capture%20d%E2%80%99%C3%A9cran%202025-03-11%20221540.png)

Fin du Laboratoire 9
