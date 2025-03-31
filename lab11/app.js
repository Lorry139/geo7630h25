map.on('load', function () {
    map.addSource('commerces_source', commercesSource);
    map.addLayer(commercesLayer);
  
    map.addSource('arrondissements_source', arrondissementsSource);
    map.addLayer(arrondissementsLayer);
    map.addLayer(arrondissementsLabels);
  });