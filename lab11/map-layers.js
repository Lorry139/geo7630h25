map.addSource('commerces_source', {
    type: 'geojson',
    data: 'https://donnees.montreal.ca/dataset/c1d65779-d3cb-44e8-af0a-b9f2c5f7766d/resource/ece728c7-6f2d-4a51-a36d-21cd70e0ddc7/download/businesses.geojson'
  });
  
  map.addLayer({
    id: 'commerces',
    type: 'circle',
    source: 'commerces_source',
    paint: {
      // Rayon variable selon le type
      'circle-radius': [
        'match',
        ['get', 'type'],
        'Épicerie', 5,
        'Pâtisserie/Boulangerie', 7,
        'Distributrice automatique', 4,
        'Pharmacie', 6,
        'Restaurant', 5,
        3
      ],
      // Couleur variable selon le type
      'circle-color': [
        'match',
        ['get', 'type'],
        'Épicerie', 'orange',
        'Pâtisserie/Boulangerie', 'yellow',
        'Distributrice automatique', 'blue',
        'Pharmacie', 'green',
        'Restaurant', 'purple',
        'grey'
      ],
      'circle-stroke-color': '#fff',
      'circle-stroke-width': 1
    },
    
  });

map.addSource('arrondissements_source', {
    type: 'geojson', // Type de source de données
    data: 'https://donnees.montreal.ca/dataset/70f66e93-89b2-442e-83eb-5d82f7b78c38/resource/c0a93a76-1eb8-41bb-83f0-e1705ae0f4e9/download/arrondissements.geojson' // URL pgFeatureServ GeoJSON ! Attention il faut bien inclure la méthode qui fait la requete sans limite d'items de données
});

map.addLayer({
    id: 'arrondissements',
    type: 'fill',
    source: 'arrondissements_source',
    paint: {
      'fill-outline-color': 'black',
      'fill-color': '#cccccc',
      'fill-opacity': 0.3
    }
  });

  map.addLayer({
    id: 'arrondissements-labels',
    type: 'symbol',
    source: 'arrondissements_source',
    layout: {
      'text-field': ['get', 'nom'],
      'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
      'text-size': 14,
      'text-anchor': 'center'
    },
    paint: {
      'text-color': '#111',
      'text-halo-color': '#fff',
      'text-halo-width': 1.5
    }
  });
  