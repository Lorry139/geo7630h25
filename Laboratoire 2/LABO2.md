# Documentation laboratoire n°2

## Objectifs : Apprendre les techniques de Jointures et traitements de données 

### 1- Ouverture de FME pour le traitement de deux données sources dont : Données ponctuelles (CSV) et Polygones (GeoJSON)

#### a- Ajout des données des arbres (CSV) via la fenetre Add Reader
![Image Alt](https://github.com/Lorry139/geo7630h25/blob/66b95a084174c154f381d3fdead9c8c31f46a504/Laboratoire%202/Capture%20d%E2%80%99%C3%A9cran%202025-02-02%20133913.png).
- Ensuite, ajout des données de type GEOJSON pour les données des quartiers de Montréal
![Image Alt](https://github.com/Lorry139/geo7630h25/blob/c096432630ea517214f4c755e4109c73c71c4950/Laboratoire%202/Capture%20d%E2%80%99%C3%A9cran%202025-02-02%20134335.png).

Remarques : Toujours vérifier si l'option feature caching est activée pour inspecter les données sur FME avant utilisation.

#### b- Reprojection des données avec l'outil Reprojector
Reprojeter en **MTM8 (EPSG:32188)** garantit l’alignement des couches SIG, améliore la précision des analyses locales et minimise les distorsions. Ce système est adapté aux régions spécifiques comme le Québec, respectant les standards géospatiaux locaux.
![Image Alt](https://github.com/Lorry139/geo7630h25/blob/b7bdf1b9034dd7c31279852b5bca64fa6a7bd73e/Laboratoire%202/Capture%20d%E2%80%99%C3%A9cran%202025-02-02%20135220.png).

#### c- Jointure spatiale des données avec l'outil de transformation **PointOnAreaOverlay**
Une **jointure spatiale** associe des données de deux couches SIG en fonction de leur relation géographique (intersection, contenance, proximité). Elle permet d'enrichir les données en liant attributs et géométries selon leur emplacement spatial.
- Elle permet d'associer chaque arbre dans chaque quartier.
- Elle permet aussi de calculer la somme des arbres dans chaque quartier.

##### - Mais avant tout, utiliser l'outil attribute filter sur le fichier CSV (Arbres)
![Image Alt](https://github.com/Lorry139/geo7630h25/blob/2079635c29549a955d1faaef143de2b0a2151f71/Laboratoire%202/Capture%20d%E2%80%99%C3%A9cran%202025-02-02%20141609.png).

- Nettoyage des attributs en utilisant l'outil **AttributeKeeper** pour filtrer les jeux de données dont nous aurons besoin, les attributs pertinents ( nombres d'arbres et noms de quartiers )
![Image Alt](https://github.com/Lorry139/geo7630h25/blob/aaeb5a0b33787f3087ebfea0053b7176babd0d10/Laboratoire%202/Capture%20d%E2%80%99%C3%A9cran%202025-02-02%20142853.png).

#### d- Calcul des statistiques via l'outil Attribute Creator (Création d'un attribut pour désigner la densité d'arbres dans chaque quartier)
Pour ce faire, l'"Attribute Creator" nous permettra de créer un nouvel attribut : Densité d'arbres, en procédant par le calcul, nombres d'arbres/Area dans la fenetre "FME feature Attribute" et dans la "FME feature Function" sur la colonne value.
Sur la colonne Output Attribute, nous écrirons le champ "densité d'arbres"
![Image Alt](https://github.com/Lorry139/geo7630h25/blob/a4caf959ceb4db0f2318aeee779c254571e3b8c3/Laboratoire%202/Capture%20d%E2%80%99%C3%A9cran%202025-02-05%20145706.png).
PS : ne pas oublier de changer le format de l'attribut en real64 et d'ajouter des parentheses avant et apres les expressions de calculs avant de confirmer.

### 2- Exportation des données via un Writer
Pour exporter les données traités et pouvoir la visualiser directement sur QGIS, il faut ajouter un Writer dans laquelle on pourra connecter les données traitées directement vers un serveur PostGIS disponible sur QGIS ou ArcGIS Online.
![Image Alt](https://github.com/Lorry139/geo7630h25/blob/028a1c1e293f37ed5e12269507c3880ba39e0414/Laboratoire%202/Capture%20d%E2%80%99%C3%A9cran%202025-02-10%20221803.png).

### 3- Visualisation sur QGIS
Aller dans l'onglet PostGreSQL de QGIS, ensuite ouvrir la base de données qui a été liée dans le Writer précédent (Geo7630H25).
Suite a cela, nous trouverons bien sur la base de données de type dataset postgreSQL nommée "LABO n°2" que nous pourrons ensuite ouvrir.
Modifier le style de la couche et ajouter un basemap (ESRI dark dans l'image ou selon les préférences) pour avoir un bon visuel du résultats.
![Image Alt](https://github.com/Lorry139/geo7630h25/blob/dd69918578a73f5ac82c6a864a912ad51b1b5fb0/Laboratoire%202/Capture%20d%E2%80%99%C3%A9cran%202025-02-10%20223046.png).

Pour terminer, nous avons donc pu traiter des données en utilisant plusieurs autres types de Transformers dans ce Labo, tout en manipulant les styles visuels sur QGIS.
