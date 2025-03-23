# Laboratoire 6 et 7 : ArcGIS Online, Dashboard et Experience Builder – Intégration de données
## Ce laboratoire sert à maitriser l’intégration de données dans ArcGIS Online (AGOL) et leur exploitation via Dashboard et Experience Builder. Nous allons aussi apprendre à automatiser les mises à jour avec FME.

### Intégration de données dans ArcGIS Online
Pour commencer, nous allons travailler sur FME afin de préparer les données que nous allons utiliser sur ArcGIS Online.
Ouvrir le fichier de type CSV concernant les Bixis de Montréal via un Reader.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/3889ba1f9d06052aff53ebbd1a286ee701cd765f/Laboratoire%206/LABO6_1.png)

Filtrer les données en utilisant "Attribute Filter" afin d'exclure les attributs n'ayant pas de longitude et en ajoutant -1 pour filtrer les mauvaises coordonnées.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/3889ba1f9d06052aff53ebbd1a286ee701cd765f/Laboratoire%206/LABO6_2.png)

Calculer les statistiques des données Bixis pour connaitre le flux d'entrée et de sortie des vélos par stations. Le premier pour les départs.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/3889ba1f9d06052aff53ebbd1a286ee701cd765f/Laboratoire%206/LABO6_3.png)

Grouper les données pour obtenir le total des départs par station.
Répéter l’opération pour les arrivées. (emplacement_pk_end)

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/3889ba1f9d06052aff53ebbd1a286ee701cd765f/Laboratoire%206/LABO6_4.png)

Nettoyage et gestion des attributs (AttributeManager) pour les stations de Bixi
Cela afin de conserver uniquement les attributs nécessaires et garantir la cohérence des noms de champs.

Ajouter un AttributeManager.
Supprimer les attributs inutiles.
Renommer les champs pour faciliter l’intégration dans AGOL.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/3889ba1f9d06052aff53ebbd1a286ee701cd765f/Laboratoire%206/LABO6_5.png)

Sur le port UNFILTERED sortiront les 734 stations (c'est le 2eme csv dans le .zip)

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/3889ba1f9d06052aff53ebbd1a286ee701cd765f/Laboratoire%206/LABO6_7.png)

Jointure des données via FeatureJoiner

Afin d'associer les coordonnées aux stations pour garantir leur localisation correcte.

Ajouter un FeatureJoiner pour relier les stations aux données de départ part stations
Configurer la clé de jointure sur l’identifiant unique des stations (PK pour Primary Key).
Attention de bien utiliser la jointure de type "Full"

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/3889ba1f9d06052aff53ebbd1a286ee701cd765f/Laboratoire%206/LABO6_8.png)

Ensuite, ajouter un autre FeatureJoiner enchaîné sur le port de sortie "Joined" pour joindre les sommes des arrivées par stations.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/3889ba1f9d06052aff53ebbd1a286ee701cd765f/Laboratoire%206/LABO6_9.png)

Enfin, ajouter un Attribute manager pour nettoyer les données et renommer les attributs.
En somme, voici la finalité de traitement des départs et arrivées des stations Bixis.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/3889ba1f9d06052aff53ebbd1a286ee701cd765f/Laboratoire%206/LABO6_11.png)

![Image Alt]()

![Image Alt]()

![Image Alt]()
