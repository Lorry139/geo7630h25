# Documentation pour le laboratoire n°3
## Optimisation de la densité d’implantation d’arbres dans les parcs de Montréal

- Outils a utiliser : Données Montréal sur les arbres et les parcs comme dans le Labo2
- QGIS
- FME

### 1- Chargement des données sur FME
Ajout d'un Reader CSV pour les données des arbres de Montréal, et d'un Reader GEOJSON pour les données des quartiers de Montréal.
![Image Alt](https://github.com/Lorry139/geo7630h25/blob/820fde92eba9d5a59f4990076be961f98627f741/Laboratoire%203/Capture%20d%E2%80%99%C3%A9cran%202025-02-04%20092956.png).

### 2- Reprojection des données avec l'outil Reprojector
Conformément au LABO 2, le transformer Reprojector sera parametré dans le Systeme de coordonnées EPSG : 32188 pour les deux jeux de données.
![Image Alt](https://github.com/Lorry139/geo7630h25/blob/9572c4912e6a2786b8be684a1e8088b1b6c88a0e/Laboratoire%203/Capture%20d%E2%80%99%C3%A9cran%202025-02-04%20093427.png).

### 3- Jointure Spatiale
Comme dans le LABO 2, la jointure spatiale se fera avec l'outil de transformation "PointOnAreaOverlay", en choisissant point_count sur l'onglet Overlap Attribute
![Image Alt](https://github.com/Lorry139/geo7630h25/blob/a1be6a90aa0734399b68a8cb9b19a06e32b82388/Laboratoire%203/Capture%20d%E2%80%99%C3%A9cran%202025-02-04%20094342.png).

### 4- Nettoyage des données
Pour le nettoyage et la sélection des données, on utilisera soit l'outil Attribute Keeper, soit l'outil Attribute Manager.
