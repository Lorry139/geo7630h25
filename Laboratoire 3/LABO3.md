# Documentation pour le laboratoire n°3
## Optimisation de la densité d’implantation d’arbres dans les parcs de Montréal

- Outils a utiliser : Données Montréal sur les arbres et les parcs comme dans le Labo2
- QGIS
- FME

### 1- Chargement des données sur FME
Ajout d'un Reader CSV pour les données des arbres de Montréal, et d'un Reader GEOJSON pour les données des quartiers de Montréal.


### 2- Reprojection des données avec l'outil Reprojector
Conformément au LABO 2, le transformer Reprojector sera parametré dans le Systeme de coordonnées EPSG : 32188 pour les deux jeux de données.
![Image Alt]().

### 3- Jointure Spatiale
Comme dans le LABO 2, la jointure spatiale se fera avec l'outil de transformation "PointOnAreaOverlay", en choisissant point_count sur l'onglet Overlap Attribute
![Image Alt]().

### 4- Nettoyage des données
Pour le nettoyage et la sélection des données, on utilisera soit l'outil Attribute Keeper, soit l'outil Attribute Manager. Il est important de conserver les données nécessaires pour la lecture et la vulgarisation pour ne pas surcharger notre base de données.
