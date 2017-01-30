function initialize() {
  $.getJSON(
    'https://githubschool.github.io/open-enrollment-classes-introduction-to-github/createMap.topojson',
    function(data) {
      var map = new google.maps.Map(document.getElementById('map'), {
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
            stylers: [ { visibility: 'off' } ]
          },
          {
            featureType: 'administrative.country',
            stylers: [ { visibility: 'off' } ]
          },
          {
            featureType: 'water',
            elementType: 'labels',
            stylers: [ { visibility: 'off' } ]
          },
          {
            featureType: 'administrative',
            elementType: 'labels',
            stylers: [ { visibility: 'off' } ]
          }
        ]
      });

      var markers = data.features.map(function(coords, i) {
        var latLng = new google.maps.LatLng(
          coords.geometry.coordinates[1],
          coords.geometry.coordinates[0]
        );

        return new google.maps.Marker({
          position: latLng,
          map: map,
          title: coords.properties.username,
          icon: {
            url: 'https://github.com/' +
              coords.properties.username +
              '.png?size=20',
            size: new google.maps.Size(256, 256),
            // original size, fallback for space invador images
            scaledSize: new google.maps.Size(20, 20),
            // size on map, fallback for space invador images
            // start point
            anchor: new google.maps.Point(0, 32)
          }
        });
      });

      var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
        averageCenter: true,
        minimumClusterSize: 42
      });
    }
  );
}
