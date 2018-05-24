var markers = [];

function initMap() {
        
        var styles = [
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#DADADA"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#1900ff"
            },
            {
                "color": "#FFFFFF"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 700
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#A7CAD9"
            }
        ]
    }
]

        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 39.038976861, lng: -99.196363400},
          zoom: 4,
          styles: styles
        });
        var locations = [
          {title: 'ICU Jackson', location: {lat: 31.509052, lng: -87.894443}},
          {title: 'ICU Montgomery', location: {lat: 32.366805, lng: -86.299969}},
          {title: 'ICU Bakersfield', location: {lat: 35.373292, lng: -119.018712}},
          {title: 'ICU Riverside County', location: {lat: 33.953349, lng: -117.396156}},
          {title: 'ICU Vista', location: {lat: 33.200037, lng: -117.242536}},
          {title: 'ICU Longmont', location: {lat: 40.167207, lng: -105.101927}},
          {title: 'ICU Eustis', location: {lat: 28.852767, lng: -81.685353}},
          {title: 'ICU Milton', location: {lat: 30.632415, lng: -87.039688}},
          {title: 'ICU St. Augustine', location: {lat: 29.901244, lng: -81.312434}},
          {title: 'ICU Brunswick', location: {lat: 31.149953, lng: -81.491489}},
          {title: 'ICU Columbus', location: {lat: 32.460976, lng: -84.987709}},
          {title: 'ICU Woodstock', location: {lat: 34.101487, lng: -84.519375}},
          {title: 'ICU Elgin', location: {lat: 42.035408, lng: -88.282567}},
          {title: 'ICU Elkhart', location: {lat: 41.681993, lng: -85.976667}},
          {title: 'ICU Fort Wayne', location: {lat: 41.079273, lng: -85.139351}},
          {title: 'ICU Warsaw', location: {lat: 41.238100, lng: -85.853047}},
          {title: 'ICU Hutchinson', location: {lat: 38.060845, lng: -97.929774}},
          {title: 'ICU Salina', location: {lat: 38.840280, lng: -97.611424}},
          {title: 'ICU Hopkinsville', location: {lat: 36.865601, lng: -87.488619}},
          {title: 'ICU Boston', location: {lat: 42.360082, lng: -71.058880}},
          {title: 'ICU Detroit', location: {lat: 42.331427, lng: -83.045754}},
          {title: 'ICU Twin Cities South', location: {lat: 44.953703, lng: -93.089958}},
          {title: 'ICU Springfield', location: {lat: 39.781721, lng: -89.650148}},
          {title: 'ICU Havre', location: {lat: 48.549999, lng: -109.684089}},
          {title: 'ICU Salem', location: {lat: 39.571780, lng: -75.467142}},
          {title: 'ICU Turnersville', location: {lat: 39.772885, lng: -75.051858}},
          {title: 'ICU Wilmington', location: {lat: 34.225726, lng: -77.944710}},
          {title: 'ICU Akron', location: {lat: 41.081445, lng: -81.519005}},
          {title: 'ICU Cuyahoga County', location: {lat: 41.499320, lng: -81.694361}},
          {title: 'ICU Youngstown', location: {lat: 41.099780, lng: -80.649519}},
          {title: 'ICU Albany', location: {lat: 44.636511, lng: -123.105928}},
          {title: 'ICU Pittsburgh', location: {lat: 40.440625, lng: -79.995886}},
          {title: 'ICU Rapid City', location: {lat: 44.080543, lng: -103.231015}},
          {title: 'ICU Sioux Falls', location: {lat: 43.544596, lng: -96.731103}},
          {title: 'ICU Clarksville', location: {lat: 36.529771, lng: -87.359453}},
          {title: 'ICU Cookeville', location: {lat: 36.162839, lng: -85.501642}},
          {title: 'ICU Memphis', location: {lat: 35.149534, lng: -90.048980}},
          {title: 'ICU Murfreesboro', location: {lat: 35.845621, lng: -86.390270}},
          {title: 'ICU Corpus Christi', location: {lat: 27.800583, lng: -97.396381}},
          {title: 'ICU El Paso', location: {lat: 31.761878, lng: -106.485022}},
          {title: 'ICU Euless', location: {lat: 32.837073, lng: -97.081954}},
          {title: 'ICU Fort Worth', location: {lat: 32.755488, lng: -86.299969}},
          {title: 'ICU Kleberg County', location: {lat: 35.373292, lng: -97.330766}},
          {title: 'ICU Round Rock', location: {lat: 33.953349, lng: -97.678896}},
          {title: 'ICU Sherman', location: {lat: 33.635662, lng: -96.608880}},
          {title: 'ICU Kennewick', location: {lat: 46.211246, lng: -119.137234}},
          {title: 'ICU Wausau', location: {lat: 44.959135, lng: -89.630122}},
          ];

        var largeInfowindow = new google.maps.InfoWindow();
        
        for (var i = 0; i < locations.length; i++) {
          var position = locations[i].location;
          var title = locations[i].title;

         var marker = new google.maps.Marker ({
            map: map,
            position: position,
            icon: 'img/map-icon.png',
            title: title,
            animation: google.maps.Animation.DROP,
            id: i
          });
          markers.push(marker);
          marker.addListener('click', function () {
            populateInfoWindow(this, largeInfowindow);
          });
        }  

var contentString = '<table>' + '<tr>' + '<td><img style="max-width:300px; border-radius:10px; border: solid 5px #18385f; margin-right:10px" src="img/bev.jpg"></td>' +
    '<td><h2>ICU Detroit</h2><p>Bacon ipsum dolor amet sirloin cow short ribs landjaeger alcatra biltong short loin. Short loin sirloin bacon cow pork loin. Sirloin swine brisket landjaeger, pork chop pork loin cupim corned beef fatback bresaola t-bone short loin boudin bacon. Salami drumstick leberkas, filet mignon ground round prosciutto tongue turkey picanha ball tip capicola meatball. Picanha jerky tail bresaola leberkas pork loin venison, hamburger chuck. Beef jowl ball tip tail.' + 'Drumstick chicken tongue boudin cupim tri-tip, sausage fatback porchetta ribeye strip steak pork bacon burgdoggen. Pork chop filet mignon pork belly beef boudin turkey andouille brisket meatball. Bacon chuck sirloin tri-tip cupim turducken, capicola ham hock ham brisket swine boudin.</a></td>' +'</td></table>'

function populateInfoWindow(marker,infowindow) {
  if (infowindow.marker != marker) {
    infowindow.marker = marker;
    infowindow.setContent(contentString);
    infowindow.open(map, marker);
    infowindow.addListener('closeclick', function () {
      infowindow.setMarker(null);
      });
    }
  }
}
