function initialize() {
  $.getJSON(
    'https://githubschool.github.io/open-enrollment-classes-introduction-to-github/createMap.topojson',
    function (data) {
      var mapSize = new google.maps.Size(256, 256), // original size, fallback for space invador images
        scaledSize = new google.maps.Size(20, 20),  // size on map, fallback for space invador images
        anchor = new google.maps.Point(0, 32),      // start point
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          minZoom: 2,
          center: new google.maps.LatLng(10, 15),
          mapTypeId: 'terrain',
          //disableDefaultUI: true,
          mapTypeControl: false,
          panControl: false,
          //scaleControl: false,
          scrollwheel: false,
          streetViewControl: false,
          //zoomControl: false,
          //draggable: false,
          styles: [
            {
              featureType: 'administrative',
              elementType: 'geometry',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'administrative.country',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'water',
              elementType: 'labels',
              stylers: [{visibility: 'off'}]
            },
            {
              featureType: 'administrative',
              elementType: 'labels',
              stylers: [{visibility: 'off'}]
            }
          ]
        }),
        markers = data.features.map(function (coords) {
          var coordinates = coords.geometry.coordinates,
            username = coords.properties.username;

          return new google.maps.Marker({
            position: new google.maps.LatLng(
              coordinates[1],
              coordinates[0]
            ),
            map: map,
            title: username,
            icon: {
              url: 'https://github.com/' + username + '.png?size=20',
              size: mapSize,
              scaledSize: scaledSize,
              anchor: anchor
            }
          });
        });

      new MarkerClusterer(map, markers, {
        imagePath: '../images/cluster/m',
        averageCenter: true,
        minimumClusterSize: 42
      });
    }
  );
}
