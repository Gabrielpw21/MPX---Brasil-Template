function inicializar() {
  var coordenadas = {lat: -11.873, lng: -55.4982};

  var mapa = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 13,
    center: coordenadas 
  });

  var marker = new google.maps.Marker({
    position: coordenadas,
    map: mapa,
    title: 'Meu marcador'
  });
}