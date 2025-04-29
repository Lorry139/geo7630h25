# Laboratoire 12 : Webmapping avancé avec analyse spatiale

## - 1 Création du fichier rendercluster.js dans la racine lab11
On travaille directement dans la racine lab11 se trouvant dans Atlas/app/modules/lab11.
Créer un fichier appelé rendercluster.js pour utiliser la fonction cluster.

Utiliser la fonction render Cluster ainsi que RemoveAllLayersSources pour supprimer toutes les sources à l'interface de la carte qui étaient déja présentes.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/622272b9b41bf0aeba4442d255ea5339e618b3b5/Laboratoire%2012/Images/Capture%20d%E2%80%99%C3%A9cran%202025-04-28%20221900.png)

Ensuite, ajouter dans le code de la fonction Generate clusters une source : randomPoints pour générer des clusters aléatoirement sur la proprietés data de la couche cluster.

Une fois terminé, ajoutez l’écouteur d'événement pour exécuter cette fonction lors du clic sur le bouton comme vu en classe

    document

      .getElementById('generateClusters') // id unique du bouton

      .addEventListener('click', generateClusters); // ajoute un event de type click qui lance la fonction generateClusters()

Le <button> id du bouton se nomme : `'generateClusters'` dans le HTML
N’oubliez pas d’ajouter la source du module javascript dans le fichier html index.html, et placer le module sur : ./modules/lab11/renderClusters.js dans le script HTML


![Image Alt](https://github.com/Lorry139/geo7630h25/blob/2dab712681fafa1beac8b1bda6d39eb61262d601/Laboratoire%2012/Images/Capture%20d%E2%80%99%C3%A9cran%202025-04-28%20224409.png)

Voici le rendu des clusters générés aléatoirement.

## 2- Création de la fonction Heatmap
Pour générer une carte de chaleur, nous allons créer un fichier JS adapté pour, que l'on va nommer renderHeatmap.js.
Cette fonction nous permettra de générer une carte de chaleur à travers des points spécifiques, soit des points aléatoires.

La fonction MapLibre que l'on va prendre comme exemple sera rempli comme le premier cluster.

data : randomPoints
type : heatmap

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/e286797234dbbd8144bf9ced15b8921b4aa8d7bc/Laboratoire%2012/Images/Capture%20d%E2%80%99%C3%A9cran%202025-04-28%20230023.png)

Ensuite, configurer le click event pour la souris : 
document
  .getElementById('generateHeatmap') // id unique du bouton
  .addEventListener('click', generateHeatmap); // ajoute un event de type click qui lance la fonction generateHeatmap()

Et nous aurons notre carte de chaleur sur la carte avec des points aléatoires.
PS : Ne jamais oublier d’ajouter la source du module dans le index.html

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/e286797234dbbd8144bf9ced15b8921b4aa8d7bc/Laboratoire%2012/Images/Capture%20d%E2%80%99%C3%A9cran%202025-04-28%20230007.png)

## 3- Création de la fonction render3D
Pour visualiser des données en 3D, nous allons utiliser la fonction generate3d.
Tout d'abord, créer un fichier JS nommé render3D.

Ensuite, utiliser le code à remplir par les données exactes.
mporter la Création de Grille :

    Utiliser la fonction makeGrid() du fichier createGrid.js pour générer une grille hexagonale.

Ajouter les Données à la Carte :

    Intégrez la grille comme source de données GeoJSON sur la carte (Grid).

Visualisation 3D :

    Créer un effet 3D avec des propriétés dynamiques :

    La hauteur et la couleur des formes dépendent d'une valeur aléatoire (randomValue) incluse dans les données.

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/cdf04c24876e29cda39aefb73511bb679544f355/Laboratoire%2012/Images/Capture%20d%E2%80%99%C3%A9cran%202025-04-28%20231211.png)

Voici le résultat final de la fonction génération de couche en 3D

![Image Alt](https://github.com/Lorry139/geo7630h25/blob/cdf04c24876e29cda39aefb73511bb679544f355/Laboratoire%2012/Images/Capture%20d%E2%80%99%C3%A9cran%202025-04-28%20231525.png)

Fin du laboratoire 12

