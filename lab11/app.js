// Ajouter sources
  map.addSource('commerces_source', {
    type: 'geojson',
    data: 'https://donnees.montreal.ca/dataset/c1d65779-d3cb-44e8-af0a-b9f2c5f7766d/resource/ece728c7-6f2d-4a51-a36d-21cd70e0ddc7/download/businesses.geojson'
  });
  map.addSource('arrondissements_source', {
    type: 'geojson',
    data: 'https://donnees.montreal.ca/dataset/9797a946-9da8-41ec-8815-f6b276dec7e9/resource/e18bfd07-edc8-4ce8-8a5a-3b617662a794/download/limites-administratives-agglomeration.geojson'
  });

  // Ajouter couches
  map.addLayer({
    id: 'commerces',
    type: 'circle',
    source: 'commerces_source',
    paint: {
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
    filter: ['==', ['get', 'statut'], 'Ouvert']
  });
  map.addLayer(arrondissementsLayer);
  map.addLayer({
    id: 'arrondissements-labels',
    type: 'symbol',
    source: 'arrondissements-source',
    layout: {
      'text-field': ['get', 'NOM'],
      'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
      'text-size': 14,
      'text-anchor': 'center'
    },
    paint: {
      'text-color': '#111',
      'text-halo-color': '#fff',
      'text-halo-width': 1.5
    },
    maxzoom: 13
  });
  
});
