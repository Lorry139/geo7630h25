# Intégration Matricielle FME + QGIS
Ce laboratoire vise à : 
- Lire et traiter un ou plusieurs types de rasters : TIF, GeoTIFF, PNG.
- Extraire des valeurs des rasters pour les transformer en vecteurs.
- Stocker des rasters non tuilés dans PostgreSQL/PostGIS.
- Générer des tuiles raster pour une manipulation et diffusion efficaces.
- Créer des pyramides de tuiles raster pour une visualisation web optimisée.
- Associer les valeurs Z des rasters à des vecteurs.

    Les données que nous allons utiliser se trouvent dans ce lien : https://drive.google.com/drive/folders/1iRcyRWS_JiTciNdonm8leC7Nq03hRY5_?usp=sharing

# Intégration des données sur FME
Dans cette 1ère partie, nous allons intégrer les données de types TIF et ou CoG (Cloud Optimized GEOtiff) via un Reader de type CoG et un reader de type PNG.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/d065ad0fbaf0af53435f0956a3c209fe8d32c398/Laboratoire%204/LABO4_1.png).

Ensuite, il faut créer un bookmarks pour chaque traitement que l'on va faire, mais aussi pour bien distinguer les données qui ont été upload dans FME.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/d065ad0fbaf0af53435f0956a3c209fe8d32c398/Laboratoire%204/LABO4_2.png).

## 1- Intégration d'image aérienne standard
### a- Reprojection des données
La première partie de labo consistera donc à reprojeter les données d'images aériennes ( PNG) en EPSG:32188 en utilisant l'outil de transformation "Reprojector".

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/ecffd1a2090b6a596e6f538ac6e1d763e0630d50/Laboratoire%204/LABO4_3.png).

### b- Extraction des métadonnées du raster
L'étape d'extraction des métadonnées consiste à extraire des propriétés et des métadonnées d'un raster, telles que la dimension, le type de données, le nombre de bandes, et d'autres informations essentielles à son analyse et traitement.
Pour cela, nous allons utiliser l'outil de transformation "RasterPropertyExtractor", et les données les importants sont ainsi liés aux proprietés essentielles d'un raster, c'est-à-dire les pixels, les rangées, et les bandes.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/ed735b85f31fa381a76465c811abb46d0f200bc1/Laboratoire%204/LABO4_4.png).

### c- Réechantillonnage de l'image raster
Le transformateur "RasterResampler" dans FME est utilisé pour redimensionner ou rééchantillonner une image raster, ajustant ainsi sa résolution, sa taille ou sa géométrie pour répondre à des exigences spécifiques ou pour l'aligner avec d'autres données spatiales.
Nous allons donc réechantillonner les rows/columns par 10 en utilisant le calculateur integré du transformateur soit Nombre de colomne/10 et Nombre de rows/10.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/352254ad167520969dfdc6a8916d46591d01f152/Laboratoire%204/LABO4_5.png)

### d- Optimisation de l'affichage par création de pyramides sur le raster
Cela consiste à créer une série de pyramides raster, c'est-à-dire des versions de résolution inférieure d'une image raster originale, ce qui optimise l'affichage et l'analyse de grandes images sur différents niveaux de zoom.
Nous allons donc utiliser l'outil "RasterPyramider" et changer dans les parametres le nombre de niveau à 10.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/f6287647412b8eb624e49f39003ec9e591644990/Laboratoire%204/LABO4_6.png).

### e- Ajout d'un FeatureWriter
L'outil "FeatureWriter" permet de de chaîner les actions à la suite de l’écriture, contrairement au Writer de base.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/73cfaf7b7bfa6f5550cf29290eef147a3d2ab7df/Laboratoire%204/LABO4_7.png).

### f- SQL Executor pour visualiser à la fin
L'utilisation d'un outil "SQL Executor" est nécessaire pour exécuter des requêtes SQL directement sur une base de données spatiale ou non spatiale

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/73cfaf7b7bfa6f5550cf29290eef147a3d2ab7df/Laboratoire%204/LABO7_8.png).

## 2-  Intégration de raster analytique - Ilôts de chaleur
La premiere étape sera de faire la meme chose que dans la premiere partie, c'est à-dire reprojeter les données pour les ilots de chaleur en EPSG:321888
### a- Conversion des images raster en entités vectorielles polygonales
Cette procédure se fait à partir de l'outil "RasterToPolygonCoercer". Cet outil sert à transformer des informations raster, comme des classifications d'images ou des modèles numériques de terrain, en formes vectorielles pour une analyse ou une visualisation plus poussée.
Changer le label attribute en "Classification"

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/6dd0e3b8135d6ff543a4f6e06e83f98e40db8a78/Laboratoire%204/LABO7_9.png).

