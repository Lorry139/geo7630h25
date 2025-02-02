# Documentation pour le laboratoire 1
## GEO7630h25

### Création d'un compte GitHub
### Création d'un repository (hébergement de donnnées, documents, etc...)
### Ouverture d'un codespace pour configurer et documenter la premiere partie (création d'un dossier pour le Labo1, création d'un Readme pour la rédaction)

- Interface Github avec codespace configuré avec le nom d'utilisateur et le courriel étudiant

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/e10a74d052c8fa8df2320f0700c831df99692642/Laboratoire%201/Capture%20d%E2%80%99%C3%A9cran%202025-02-01%20123131.png)

- Étape de traitement de données sur FME (ETL)
Ouverture des données ouvertes Montreal de type csv a partir de la fenetre add reader
![Image Alt](https://github.com/Lorry139/geo7630h25/blob/85130a233eaa11bc9cc654cb7f6331133d8e94cd/Laboratoire%201/Capture%20d%E2%80%99%C3%A9cran%202025-02-01%20124238.png)

- Établir la connection avec la base de données PostGIS dans Add Writer
![Image Alt](https://github.com/Lorry139/geo7630h25/blob/74536bb5034dc21871ef818178c2d3253078be3c/Laboratoire%201/Capture%20d%E2%80%99%C3%A9cran%202025-02-01%20132447.png).

- Ajout d'un outil de transformation (Transformer), Vertexcreator afin de modifier les colonnes LatLong dans les données CSV.
Afin de continuer la procédure de transformation sans interruption, ajout d'unoutil logger permettant de filtrer les données comportant les erreur.
Apres cela, connecter les données a extraire (CSV), les transformeurs ( VertexCreator, Logger), et la base de données pour Load le tout (Writer)
![Image Alt](https://github.com/Lorry139/geo7630h25/blob/ad0c11df6aa884603336e7012fa505e4381a83a5/Laboratoire%201/Capture%20d%E2%80%99%C3%A9cran%202025-02-01%20171444.png).

- Chargement des données sur QGIS et visualisation
Tout d'abord, commencer par ouvrir QGIS, ensuite ouvrir la fenetre de connection PostGreSQL, nouvelle connexion et rentrer les informations de la base de données Writer sur FME.
![Image Alt](image_url).


git config --global user.name "Lorry139"
git config --global user.email "randrianirina.lorry_mael@courrier.uqam.ca"
