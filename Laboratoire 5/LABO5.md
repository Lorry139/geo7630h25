# Intégration et visualisation de données 3D Lidar et tuiles 3D Vectorielles
## 1- Importation et nettoyage des données Lidar
### a- Importation des données
Premierement, importer les données LIDAR en faisant un drag and drop des 6 données que l'on a soit par ajout via des Readers.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/530e1e2f70424aaf337350476191f7e949d5dea4/Laboratoire%205/Capture%20d%E2%80%99%C3%A9cran%202025-02-11%20201952.png)

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/530e1e2f70424aaf337350476191f7e949d5dea4/Laboratoire%205/Capture%20d%E2%80%99%C3%A9cran%202025-02-11%20202118.png)

On devrait avoir ces données a traiter pour cette premiere étape.

### b- Nettoyage et reprojection
Dans cette partie, nous allons premierement utiliser un outil "PointCloudThinner" qui consiste a réduire la densité des points dans un nuage de points (point cloud) tout en conservant la représentation générale de la surface ou de l'objet.
Dans les parametres, modifier les filtres a 30.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/530e1e2f70424aaf337350476191f7e949d5dea4/Laboratoire%205/LABO%205_4.png)

Apres cela, nous allons utiliser l'outil "PointCloudCombiner" pour combiner nos 6 nuages de points en un seul.
PS : Conserver les parametres de base puis "Run".

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/530e1e2f70424aaf337350476191f7e949d5dea4/Laboratoire%205/LABO5_5.png)

Désormais, il faut reprojeter la couche combinée en utilisant l'outil "EsriReprojector" qui est plus une variable de l'outil Reprojector, mais spécifiquement utile pour travailler avec les systèmes de coordonnées définis par Esri dont nous allons voir ci-dessous.
Reprojeter du SCR 2950 vers 3857 et on aura ces SCR ci-dessous.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/530e1e2f70424aaf337350476191f7e949d5dea4/Laboratoire%205/LABO5_6.png)

Pour cette premiere étape, on aura donc ce workflow.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/530e1e2f70424aaf337350476191f7e949d5dea4/Laboratoire%205/LABO5_7.png)

## 2- Importation des limites terrestres et découpage du nuage de points
### a- Ajout d'un GEOJson et reprojection
Cette étape consistera a travailler sur une données de type GeoJson (limites terrestres) et a la reprojeter depuis le SCR 4326 vers 3857 comme dans la premiere.
Sources du data : https://data.montreal.ca/dataset/b628f1da-9dc3-4bb1-9875-1470f891afb1/resource/92cb062a-11be-4222-9ea5-867e7e64c5ff/download/limites-terrestres.geojson

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/530e1e2f70424aaf337350476191f7e949d5dea4/Laboratoire%205/LABO5_9.png)

### b- Découpage avec les limites terrestres
L'utilisation d'un outil Clipper nous permettra découper des données spatiales en fonction d’une zone spécifique. Ce qui signifie qu'on va découper les limites terrestres avec les nuages de points pour ainsi avoir la zone que l'on souhaite.
Ensuite, connecter les nuages de points que l'on a eu dans la premiere étape vers la fonction "Candidate" et les limites terrestres GeoJson vers la fonction "Clipper".

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/530e1e2f70424aaf337350476191f7e949d5dea4/Laboratoire%205/LABO5_11.png)

## 3- Simplification du nuage de points
Refaire un point thinner interval de 5 dans les parametres pour encore simplifier le nuage de points, normalement nous devrions effectuer un "PointCloudSimplifier" qui rend le nuage plus léger mais conserve sa forme, néanmoins ce processus est très gourmand en processing power, nous allons donc utiliser un "thinner" pour les biens de l’exercice

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/fd9400de148e05f8604d187458e044f46c1c4a81/Laboratoire%205/Capture%20d%E2%80%99%C3%A9cran%202025-02-17%20095626.png)

## 4- Ajout de rasters géoréférencés
Le but est d'ajouter la couleur du raster a nos nuages de points.
Donc tout d'abord, ajouter les 4 fichiers rasters dans le fichier du laboratoire en faisant un drag and drop.

Apres l'ajout, reprojeter les fichiers rasters de 3857 vers 32188.

Ensuite, ajouter un "RasterMosaicker" qui consistera a assembler des images ou des données raster provenant de différentes sources afin de créer une image unique et homogène.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/8a3282ea8c365a6010c8d3566e4c0f9062ce42e2/Laboratoire%205/LABO5_12.png)

Puis ajouter un "RasterSelector" pour choisir les 3 bandes RGB et supprimer la bande alpha. Cet outil permet gérer efficacement plusieurs rasters en ne conservant que ceux qui répondent à certaines conditions.

Pour connaître sur quelle bande se situe quelle couleur vous pouvez ajouter un "RasterPropertyExtractor" et collez y un "ListExploder" sur la propriété BAND. Le but est d'extraire les propriétés et métadonnées d'un raster.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/8a3282ea8c365a6010c8d3566e4c0f9062ce42e2/Laboratoire%205/LABO5_13.png)

A présent, sélectionner les bandes 0, 1, et 2 dans le "RasterSelector" apres avoir extraite les métadonnées

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/0f554e927455b6f98c1724673098898152d7be6b/Laboratoire%205/LABO5_14.png)

Suite a cela, ajouter un "Esri Reprojector" de 2950 to 3857.
Ajouter un "PointCloudOnRasterComponentSetter" pour enrichir des jeux de données LiDAR ou tout autre nuage de points avec des informations dérivées de rasters, comme l’élévation, l’intensité ou des classifications.
Connecter les résultats de l'étape 3 avec cet outil aussi et garder les parametres par défaut.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/56638ed607eaa2e34f6222849e1121d13894650d/Laboratoire%205/LABO5_16.png)

Ensuite ajouter un "PointCloudCombiner" pour combiner ce dernier résultat en un seul nuage de point.
La prochaine étape sera de filtrer les valeurs du nuage de point avec l'outil "PointCloudFliter".
- On utilisera l'expression @Component(color_red)!=0&&@Component(color_blue)!=0&&@Component(color_green)=0
Ce qui signifie que l'on va juste conserver les valeurs RGB = 0

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/56638ed607eaa2e34f6222849e1121d13894650d/Laboratoire%205/LABO5_17.png)

Et enfin pour cette étape, nous allons transformer le nuage de points en couche de vecteurs ponctuels simple avec un "PointCloudCoercer", en s’assurant de garder les composantes nécessaires pour la suite (Z,rouge, bleu, vert).

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/56638ed607eaa2e34f6222849e1121d13894650d/Laboratoire%205/LABO5_19.png)

## 5- Ajout des emprunts et details de bâtiments
Maintenant que le nuage de point est nettoyé et préparé, nous allons assigner le Z et la couleur aux polygones de bâtiments.

### a- Ajout et reprojection des données des batiments
Tout d'abord ajouter les données des batiments de type "Shapefile" puis les reprojeter de 2950 en 3857 avec l'outil "EsriReprojector"
![Image Alt](https://github.com/Lorry139/geo7630h25/blob/56638ed607eaa2e34f6222849e1121d13894650d/Laboratoire%205/LABO5_21.png)

### b- Calcul de l'entité spatiale
Pour calculer l'entité spatiale, nous allons utiliser un outil appelé "BoundingBoxAccumulator" qui permet de déterminer la boîte englobante d’un groupe d’objets géographiques (points, lignes, polygones ou rasters), ce qui est utile pour analyser ou délimiter une zone d’intérêt.
Connecter les 4 Rasters déja filtré dans l'étape 4 avec l'outil.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/56638ed607eaa2e34f6222849e1121d13894650d/Laboratoire%205/LABO5_22.png)

### c- Découpage et calcul avec BoudingBox
Découper les shapefile pour pouvoir travailler dans une zone désigné est nécessaire dans ce travail. C'est pour cela que nous allons ajouter un clipper pour chaque Shapefile que l'on a uploadé dans ce projet et ensuite, connecter les résultats de calcul de l'outil "BoundingBoxAccumulator" avec chaque clipper.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/56638ed607eaa2e34f6222849e1121d13894650d/Laboratoire%205/LABO5_23.png)

On découpe ensuite nos polygones et lignes via un outil nommé "PolygonCutter" en connectant bien les shapefile concernés.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/56638ed607eaa2e34f6222849e1121d13894650d/Laboratoire%205/LABO5_24.png)

## 6- Jointure des propriétés du nuage de points dans les polygones
Joindre les polygones détaillés avec les points du nuages de points (Étape 4) pour y injecter les valeurs de Z et de couleur du batiments avec un "PointOnAreaOverlayer".
Dans les parametres, on va accumuler les informations de Z et de couleurs pour ensuite calculer les moyennes qui nous permettront d’attribuer à chaque “bâtiments” une hauteur moyenne et une couleur. Donc dans Area List Name, ce sera "z_accumulation".

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/56638ed607eaa2e34f6222849e1121d13894650d/Laboratoire%205/LABO5_25.png)

Apres cela, on va faire la somme des Z grace a l'outil "ListSummer".
Bien choisir l'attribut z_accumulation et nommer l'output en sum.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/56638ed607eaa2e34f6222849e1121d13894650d/Laboratoire%205/LABO5_26.png)

Créer ensuite un attribut désignant la moyenne grace a l'"AttributeCreator" en la nommant z et en utilisant cet expression pour le calcul : @Evaluate(@round(@Value(_sum)/@Value(_overlaps),4))

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/56638ed607eaa2e34f6222849e1121d13894650d/Laboratoire%205/LABO5_27.png)

A la fin, ne garder que les deux proprietés qui nous intéressent, le "z" et "z_accumulation" en utilisant l'outil "AttributeManager".

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/56638ed607eaa2e34f6222849e1121d13894650d/Laboratoire%205/LABO5_28.png)

Utiliser un "ColorConverter"(convertir des couleurs d’un format à un autre) pour transformer le FME color en RGB ou WebRGB. 

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/56638ed607eaa2e34f6222849e1121d13894650d/Laboratoire%205/LABO5_29.png)

Enfin, exporter le résultat final dans un Writer de type GeoJson qu'il faut ensuite ouvrir sur le fichier Maplibre.html pour la visualisation.

![Image Alt]()

![Image Alt]()

![Image Alt]()
