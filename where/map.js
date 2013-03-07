
function init() {
    var myLat = 0;
    var myLong = 0;
    request = new XMLHttpRequest();
    var me = new google.maps.LatLng(myLat, myLong);
    var myOptions = {
zoom: 13, // The larger the zoom number, the bigger the zoom
      center: landmark,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    infowindow = new google.maps.InfoWindow();
    getLocation();
}
function getLocation() {
    if (navigator.geolocation) { 
        navigator.geolocation.getCurrentPosition(function (position) {
                myLat = position.coords.latitude;
                myLng = position.coords.longitude;
                renderMap();
        });
    }
    else {
        alert("Geolocation is not supported by your web browser.");
    }
}

function renderMap()
{
    me = new google.maps.LatLng(myLat, myLng);
    map.panTo(me);

    // Create a marker
    marker = new google.maps.Marker({
        position: me,
        title: "Here I Am!"
    });
    marker.setMap(map);

// Open info window on click of marker
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(marker.title);
        infowindow.open(map, marker);
    });

// Calling Google Places API
    var request = {
    location: me,
          radius: '500',
          types: ['food']
    };
    service = new google.maps.places.PlacesService(map);
    service.search(request, callback);
    }

// Taken from http://code.google.com/apis/maps/documentation/javascript/places.html
function callback(results, status)
{
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        places = results;
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place)
{
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.close();
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}
