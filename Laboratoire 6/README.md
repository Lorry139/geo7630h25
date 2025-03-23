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

Exportation des données vers ArcGIS Online

Le but sera de pouvoir publier les données sur AGOL afin de les exploiter dans un tableau de bord interactif.

https://uqam.maps.arcgis.com/home/index.html, le lien qui sera utilisé pour accéder à AGOL

Accéder à ArcGIS Online et créer un dossier GEO7630.
Aller dans Contenu , puis Mes contenus et sur la gauche créer un Dossier

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/51d8739825dcba50a8b66ec800d7da3a3aa40310/Laboratoire%206/LABO6_12.png)

Connecter FME à AGOL Writer.
Créer un nouveau Feature Service dans le dossier "Geo7630h25" précédemment crée.
Activer CREATE IF NEEDED pour la mise à jour automatique.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/51d8739825dcba50a8b66ec800d7da3a3aa40310/Laboratoire%206/LABO6_13.png)

Une fois connecté sur ArcGIS Online, il faut ouvrir le MapViewer afin de visualiser le contenu traité sur FME.
Le MapViewer permet de visualiser dynamiquement les données et d’appliquer des styles cartographiques.
Allez à la page Contenu
Maintenant cliquez sur votre Nouveau FeatureLayer
Et cliquez sur Ouvrir dans MapViewer

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/8c1eeb139535eb1d391ee8493c7a056dc5e387fd/Laboratoire%206/LABO6_14.png)

Ouvrir le Feature Layer dans MapViewer.
Appliquer un style d’agrégation pour représenter les départs et arrivées.
Configurer les étiquettes pour afficher les totaux par station.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/7dc2b509c35e8d5e7ca694a0f6a7e9c340716772/Laboratoire%206/LABO6_15.png)

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/cec076fc611d5a6168cbb31be419868ecdd5c4fb/Laboratoire%206/LABO6_16.png)

Maintenant cliquez sur Styles
Cliquez sur “+ Champ” afin d’ajouter “start_total_count” et “end_total_count”
Choisissez Comparer A à B

Cliquez sur “Options de style”
Choisissez dans l’onglet “Étiquettes” “Afficher A comme pourcentage de A et B”

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/cec076fc611d5a6168cbb31be419868ecdd5c4fb/Laboratoire%206/LABO6_17.png)

Ensuite enregistrer en tant que “CARTE”

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/cec076fc611d5a6168cbb31be419868ecdd5c4fb/Laboratoire%206/LABO6_18.png)

Maintenant, ouvrir le Dashboard sur la fenetre de choix des applications ArcGIS Online.
Créer un nouveau tableau de bord et choisissez le bon dossier.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/cec076fc611d5a6168cbb31be419868ecdd5c4fb/Laboratoire%206/LABO6_20.png)

Ajoutez un élément CARTE.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/cec076fc611d5a6168cbb31be419868ecdd5c4fb/Laboratoire%206/LABO6_21.png)

Et choisir la carte précédemment créee avec les clusters.
Dans réglages, choisirles options désiré.
Puis cliquer sur terminé.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/cec076fc611d5a6168cbb31be419868ecdd5c4fb/Laboratoire%206/LABO6_19.png)

Maintenant dans Mise en page (Version).
Ajouter un En-tete.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/cec076fc611d5a6168cbb31be419868ecdd5c4fb/Laboratoire%206/LABO6_23.png)

Dans CORPS 
Ajouter un élément en de type JAUGE

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/cec076fc611d5a6168cbb31be419868ecdd5c4fb/Laboratoire%206/LABO6_24.png)

Avec la somme statistique des départs comme choix.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/cec076fc611d5a6168cbb31be419868ecdd5c4fb/Laboratoire%206/LABO6_25.png)

Dans généralité changez le Titre (Total des départs) et enregistrer
Maintenant faites glisser la jauge en bas de la carte.

Refaire la meme pour la somme statistique des arrivées.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/cec076fc611d5a6168cbb31be419868ecdd5c4fb/Laboratoire%206/LABO6_26.png)

Ajouter maintenant un indicateur.
Dans INDICATEUR cliquez sur ACTIVER (mise en forme avancée).
Ajouter TOPTEXT : 

      topText: 'Ratio départ / arrivée',

    et

      topTextMaxSize: 'medium',

    et 

      middleText: Round($datapoint.sum_start_total_count/$reference.sum_end_total_count,3),


![Image Alt](https://github.com/Lorry139/geo7630h25/blob/cec076fc611d5a6168cbb31be419868ecdd5c4fb/Laboratoire%206/LABO6_27.png)

Maintenant, dans données, activer Référence.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/cec076fc611d5a6168cbb31be419868ecdd5c4fb/Laboratoire%206/LABO6_28.png)

Puis, ajouter un nouvel indicateur sur le total de station à l’écran.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/cec076fc611d5a6168cbb31be419868ecdd5c4fb/Laboratoire%206/LABO6_29.png)

Et une légende.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/cec076fc611d5a6168cbb31be419868ecdd5c4fb/Laboratoire%206/LABO6_30.png)

![Image Alt]()