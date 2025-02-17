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

![Image Alt]()

![Image Alt]()

![Image Alt]()

![Image Alt]()
