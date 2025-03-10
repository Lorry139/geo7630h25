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
Spécifiquement pour le CSV stationnements, nous avons ajouté un vertexCreator pour trnasformer les coordonnées X,Y en points afin de faciliter le traitement.

##### b- Reprojection
Ajout de l'outil ESRI Reprojector pour les deux afin de les reprojeter depuis l'EPSG 2950 vers l'EPSG 3857 conformément aux consignes du TP.
Les deux sont parametrés de la meme facon.

##### c- Jointure spatiale
Joindre les deux données via PointOnAreaOverlay pour avoir un apercu d'ensemble relatant stationnements et arrondissements de la ville de Montréal.

##### d- Nettoyage des données pour ressortir les stationnements gratuits, le nombre de places, et les retstrictions horaires
Attribute Manager puis supprimer les attributs comme X, Y, doublons en Eng, Arrondissement, et meme le type de stationnement si c'est gratuit ou pas car ce sont tous des stationnements gratuits.

##### e- Exportation vers PostGIS Writer
Ayant obtenus les premiers données de sorties, nous allons l'exporter vers un serveur PostGIS permettant de visualiser sur QGIS et de modifier la symbologie.
Sur QGIS, la symbologie consistait à montrer les points de stationnements gratuits en périodes de déneigements dont la taille du symbole variera en fonction du nombre de places disponibles comme suit.

##### f- Nettoyage des données pour ressortir le nombre de sites de stationnements dans les arrondissements de Montréal
Attribute Manager puis supprimer les attributs pour ne garder que les Arrondissements (Nom) ainsi que le nombre de site de stationnement dans ces arrondissements.