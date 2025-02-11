# Documentation pour le laboratoire n°3
## Optimisation de la densité d’implantation d’arbres dans les parcs de Montréal

- Outils a utiliser : Données Montréal sur les arbres et les parcs comme dans le Labo2
- QGIS
- FME

### 1- Chargement des données sur FME
Ajout d'un Reader CSV pour les données des arbres de Montréal, et d'un Reader GEOJSON pour les données des quartiers de Montréal.
![Image Alt](https://github.com/Lorry139/geo7630h25/blob/4272f66ac276690b546f22e97bc56911647fdd06/Laboratoire%203/Capture%20d%E2%80%99%C3%A9cran%202025-02-11%20171545.png).

### 2- Reprojection des données avec l'outil Reprojector
Conformément au LABO 2, le transformer Reprojector sera parametré dans le Systeme de coordonnées EPSG : 32188 pour les deux jeux de données.
![Image Alt](https://github.com/Lorry139/geo7630h25/blob/646ecddeaf496f473c5dcad4a7505c48ffc7ac96/Laboratoire%203/Capture%20d%E2%80%99%C3%A9cran%202025-02-11%20173227.png).

### 3- Jointure Spatiale
Comme dans le LABO 2, la jointure spatiale se fera avec l'outil de transformation "PointOnAreaOverlay", en choisissant point_count sur l'onglet Overlap Attribute durant le paramétrage.
![Image Alt](https://github.com/Lorry139/geo7630h25/blob/19aacebe92ae96ae778791376601e01522b9c553/Laboratoire%203/Capture%20d%E2%80%99%C3%A9cran%202025-02-11%20173454.png).

### 4- Nettoyage des données
Pour le nettoyage et la sélection des données, on utilisera soit l'outil Attribute Keeper, soit l'outil Attribute Manager. Il est important de conserver les données nécessaires pour la lecture et la vulgarisation pour ne pas surcharger notre base de données.
