# Documentation laboratoire n°2

## Objectifs : Apprendre les techniques de Jointures et traitements de données 

1- Ouverture de FME pour le traitement de deux données sources dont : Données ponctuelles (CSV) et Polygones (GeoJSON)

a- Ajout des données des arbres (CSV) via la fenetre Add Reader
![Image Alt](https://github.com/Lorry139/geo7630h25/blob/66b95a084174c154f381d3fdead9c8c31f46a504/Laboratoire%202/Capture%20d%E2%80%99%C3%A9cran%202025-02-02%20133913.png).
- Ensuite, ajout des données de type GEOJSON pour les données des quartiers de Montréal
![Image Alt](https://github.com/Lorry139/geo7630h25/blob/c096432630ea517214f4c755e4109c73c71c4950/Laboratoire%202/Capture%20d%E2%80%99%C3%A9cran%202025-02-02%20134335.png).

Remarques : Toujours vérifier si l'option feature caching est activée pour inspecter les données sur FME avant utilisation.

b- Reprojection des données avec l'outil Reprojector
Reprojeter en **MTM8 (EPSG:32188)** garantit l’alignement des couches SIG, améliore la précision des analyses locales et minimise les distorsions. Ce système est adapté aux régions spécifiques comme le Québec, respectant les standards géospatiaux locaux.
![Image Alt](https://github.com/Lorry139/geo7630h25/blob/b7bdf1b9034dd7c31279852b5bca64fa6a7bd73e/Laboratoire%202/Capture%20d%E2%80%99%C3%A9cran%202025-02-02%20135220.png).