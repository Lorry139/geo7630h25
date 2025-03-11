# Intégration et traitement des données pour l'accessibilité des aires de stationnement pendant les périodes de déneigement de la ville de Montréal pour la saison 2024-2025.
Notre problématique s'étant accentué sur les stationnements accessible durant les périodes de déneigements, nous avons prévu de réaliser des analyses spatiaux ayant pour but de répondre à cela.

## Les analyses spatiaux principaux :
- La cartographie des zones de stationnements dans la ville de Montréal.
- L'identification du nombre de stationnement gratuits et payants disponibles dans cette zone.
- Intégration des signalisations de restrictions de stationnements pendant le déneigement.

Durant la réalisation du projet, d'autres idées ont emergés car plusieurs autres problématiques ont été soulevées au fur et à mesure que l'on a avancé.
## Les analyses spatiaux rajoutés :

- Identification de la densité des aires de stationnements par arrondissement pour répondre à de futures besoins de ces stationnements.
- Analyse de la proximité des stationnements en périodes de déneigements avec des réseaux de transports en communs.

### Lien vers les données en entrée pour ces analyses :
- https://donnees.montreal.ca/fr/dataset/stationnements-deneigement (données des stationnements durant les périodes de déneigements)
- https://donnees.montreal.ca/dataset/9797a946-9da8-41ec-8815-f6b276dec7e9/resource/6b313375-d9bc-4dc3-af8e-ceae3762ae6e/download/limites-administratives-agglomeration-nad83.geojson (données sur les limites administratives de Montréal)
- https://donnees.montreal.ca/fr/dataset/stm-traces-des-lignes-de-bus-et-de-metro (données regroupant les arrets de bus et de métro de Montréal)

#### 1- Intégration des données d'entrées pour les analyses spatiaux de bases (Stationnements et limites administratives)
##### a- Ajout du CSV et du GEOJSON (Reader)
Spécifiquement pour le CSV stationnements, nous avons ajouté un vertexCreator pour transformer les coordonnées X,Y en points afin de faciliter le traitement.

![Texte alternatif](https://github.com/Lorry139/geo7630h25/blob/81d98c944c9df48119620640a487f4c59a3f1c83/TP2/Images/Capture%20d%E2%80%99%C3%A9cran%202025-03-10%20131338.png)

Pour les limites administratives :

![Texte alternatif](https://github.com/Lorry139/geo7630h25/blob/81d98c944c9df48119620640a487f4c59a3f1c83/TP2/Images/Capture%20d%E2%80%99%C3%A9cran%202025-03-10%20131434.png)

##### b- Reprojection
Ajout de l'outil ESRI Reprojector pour les deux afin de les reprojeter depuis l'EPSG 2950 vers l'EPSG 3857 conformément aux consignes du TP.
Les deux sont parametrés de la meme facon.

![Texte alternatif](https://github.com/Lorry139/geo7630h25/blob/81d98c944c9df48119620640a487f4c59a3f1c83/TP2/Images/Capture%20d%E2%80%99%C3%A9cran%202025-03-10%20131733.png)

##### c- Jointure spatiale
Joindre les deux données via PointOnAreaOverlay pour avoir un apercu d'ensemble relatant stationnements et arrondissements de la ville de Montréal.

![Texte alternatif](https://github.com/Lorry139/geo7630h25/blob/6e79d48fa5078755251b08d0bae89dd4f4a81b01/TP2/Images/Capture%20d%E2%80%99%C3%A9cran%202025-03-10%20230022.png)

##### d- Nettoyage des données pour ressortir les stationnements gratuits, le nombre de places, et les retstrictions horaires
Attribute Manager puis supprimer les attributs comme X, Y, doublons en Eng, Arrondissement, et meme le type de stationnement si c'est gratuit ou pas car ce sont tous des stationnements gratuits.

![Texte alternatif](https://github.com/Lorry139/geo7630h25/blob/6e79d48fa5078755251b08d0bae89dd4f4a81b01/TP2/Images/Capture%20d%E2%80%99%C3%A9cran%202025-03-10%20132919.png)

##### e- Exportation vers PostGIS Writer
Ayant obtenus les premiers données de sorties, nous allons l'exporter vers un serveur PostGIS permettant de visualiser sur QGIS et de modifier la symbologie.
Sur QGIS, la symbologie consistait à montrer les points de stationnements gratuits en périodes de déneigements dont la taille du symbole variera en fonction du nombre de places disponibles. Un répartition entre les sites ayant 0-300 places de stationnements, puis de 300-600 places, et enfin 600 places de stationnements et plus avec une graduation légère des couleurs avec le grossissement de la taille des symboles en meme temps.

![Texte alternatif](https://github.com/Lorry139/geo7630h25/blob/872d7dd561fb271e0838cb19e950fd5a70efc66d/TP2/Images/Capture%20d%E2%80%99%C3%A9cran%202025-03-11%20003446.png)

Ensuite une visualisation sur fond de carte.

![Texte alternatif](https://github.com/Lorry139/geo7630h25/blob/872d7dd561fb271e0838cb19e950fd5a70efc66d/TP2/Images/Capture%20d%E2%80%99%C3%A9cran%202025-03-11%20000356.png)

##### f- Nettoyage des données pour ressortir le nombre de sites de stationnements avec la densité dans les arrondissements de Montréal
Attribute Manager puis supprimer les attributs pour ne garder que les Arrondissements (Nom) ainsi que le nombre de site de stationnement dans ces arrondissements en créant un attribut lié à la densité.

![Texte alternatif](https://github.com/Lorry139/geo7630h25/blob/0241dd7cc9e3aa6a1aa37174b502e549f919063a/TP2/Images/Capture%20d%E2%80%99%C3%A9cran%202025-03-11%20121404.png)

##### g- Exportation des données du nombre de sites et de densité vers un writer postGIS
Pour finaliser cette première partie, nous allons exporter vers un serveur PostGIS afin d'attribuer une symbologie montrant la densité des stationnements à travers les arrondissements de Montréal qui sont marquées par une graduation de couleur allant des moins denses aux plus denses selon la clarté.

![Texte alternatif](https://github.com/Lorry139/geo7630h25/blob/0241dd7cc9e3aa6a1aa37174b502e549f919063a/TP2/Images/Capture%20d%E2%80%99%C3%A9cran%202025-03-11%20121326.png)

#### 2- Intégration d'un Reader Shapefile pour l'ajout des analyses spatiaux secondaires
Dans l'analyse spatiale secondaire, notre but sera de déterminer la présence et la proximité des stations de métro et d'arrets bus dans un rayon de 500m entourant les sites de stationnements.

##### a- Ajout d'un Reader de type Shapefile et Reprojection
Ajouter les fichiers d'entrée de type shapefile en tant que Reader, puis à reprojeter en en EPSG : 3857 via ESRI Reprojector.

![Texte alternatif](https://github.com/Lorry139/geo7630h25/blob/bb7b1182e37ccb3b798ad518546f47582208a8e3/TP2/Images/Capture%20d%E2%80%99%C3%A9cran%202025-03-10%20222710.png)

##### b- Nettoyage des données des arrets bus et métro
Supprimer les attributs non nécessaires ( Code d'arret, id de route, shelter, etc ...) via Attribute manager.

![Texte alternatif](https://github.com/Lorry139/geo7630h25/blob/bb7b1182e37ccb3b798ad518546f47582208a8e3/TP2/Images/Capture%20d%E2%80%99%C3%A9cran%202025-03-10%20223218.png)

##### c- Calcul de distance entre les arrets des transports en communs et les sites de stationnements via NeighBorFinder
Tout d'abord, nous allons travailler sur le fichier CSV des stationnements, en nettoyant les données déja reprojeté pour supprimer les heures, le type de stationnement, le nombre de places, etc ... en réutilisant un Attribute Manager.

Une fois cela fait, ajouter un transformer nommé "NeighBorFinder" afin  de calculer la distance entre les points de stationnements et les points d'arrets.

Nous allons mettre les arrets en tant que couche de base et les stationnements en tant que candidat.
Ensuite, dans les paramètres, changer le mode de transformation en "candidate first", Le nombre de voisin sera de 1, la distance maximum de recherche à 500m, et changer les paramètres d'attributs en "Merge candidate", puis de meme pour la résolution de conflit.

Grace à ces paramètres, nous pouvons avoir des données regroupant tous les arrets de trouvant à 500m autour des sites de stationnements durant les périodes de déneigements.

![Texte alternatif](https://github.com/Lorry139/geo7630h25/blob/bb7b1182e37ccb3b798ad518546f47582208a8e3/TP2/Images/Capture%20d%E2%80%99%C3%A9cran%202025-03-10%20224519.png)

##### d- Exportation vers un Writer de type PostGIS pour la visualisation sur QGIS
Pour la visualisation sur QGIS, nous nous sommes basés sur une répartition visuelles des stationnements se trouvant à proximité de nos sites de stationnements, dont la couleur verte de 0-100m de distance, la couleur beige de 100-300m et enfin la couleur pour les arrets se trouvant entre 300-500m de distance.

![Texte alternatif](https://github.com/Lorry139/geo7630h25/blob/60c96a53d670479021b088b634fa2845081a45d9/TP2/Images/Capture%20d%E2%80%99%C3%A9cran%202025-03-10%20233722.png)

Et pour la visualisation sur fond de carte.

![Texte alternatif](https://github.com/Lorry139/geo7630h25/blob/60c96a53d670479021b088b634fa2845081a45d9/TP2/Images/Capture%20d%E2%80%99%C3%A9cran%202025-03-10%20233946.png)

Voici le processus en somme pour cet analyse de proximité

![Texte alternatif](https://github.com/Lorry139/geo7630h25/blob/356cc0ebef78ec2f9d8ca686a6f9b8970591550f/TP2/Images/Capture%20d%E2%80%99%C3%A9cran%202025-03-11%20002850.png)

Et en finalité, le Workbench final durant le traitement des données pour ce projet, bien évidemment, nous essayerons d'ajouter d'autres analyses spatiaux au fur et à mesure de l'avancement des travaux.

![Texte alternatif]()