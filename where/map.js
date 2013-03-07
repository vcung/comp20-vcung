
function init() {
    var myLat = 0;
    var myLong = 0;
    request = new XMLHttpRequest();
    var me = new google.maps.LatLng(myLat, myLong);
    var myOptions = {
      zoom: 13,
      center: me,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    infowindow = new google.maps.InfoWindow();
    getLocation();
    findWaldoCarmen();
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
        title: "You are here!",
        icon: "http://google-maps-icons.googlecode.com/files/vegetarian.png"
    });
    marker.setMap(map);

// Open info window on click of marker
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(marker.title);
        infowindow.open(map, marker);
    });

    }
function findStops() {
   request.open("GET", "http://mbtamap-cedar.herokuapp.com/mapper/redline.json",
           true);
   request.send();
   request.onreadystatechange = callback;
}
// Taken from http://code.google.com/apis/maps/documentation/javascript/places.html
function callback(results, status)
{
    if(request.readyState == 4) {
        var str = request.responseText;
        parseRedlineInfo(str);
    }
}
function parseRedlineInfo(str) {
    try {parsed = JSON.parse(str);}
    catch(err) {
        alert("parsing error");
    }
    finally {
        createRedlineMarkers();
    }
}
function createRedlineMarkers() {
    route = [];
    places = results;
    stop = new Array(parsed.length);
    for (i in parsed) {
        stop[i] = new Object;
        stop[i].platform = parsed[i].platformkey;
        stop[i].infoType = parsed[i].informationType;
        stop[i].time = parsed[i].time;
        stop[i].timeRem = parsed[i].timeRemaining;
        stop[i].route = parsed[i].route;
        getHardCodedInfo(stop[i]);
        createMarker(stop[i]);
    }
     drawRoute();
}

function createMarker(place)
{   
    stopLoc = new google.maps.LatLng(place.lat, place.lng);
    route.push(stopLoc);
    var marker = new google.maps.Marker({
        title: "The closest station is " + place.name,
        map: map,
        icon: "http://google-maps-icons.googlecode.com/files/spa.png",
        position: stopLoc
    });
    marker.infoContent = "Arrival Schedule: " + place.time;

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.close();
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}

function drawRoute(){
    var RedlineRoute = new google.maps.Polyline({
     clickable: false,
     map: map,
     path: route,
     strokeColor: "#FF0000"
     });
}

function findWaldoCarmen() {
  try {req = new XMLHttpRequest();}
  catch (err) {
      alert("Carmen and Waldo's nowhere to be found!");
      req = null;
  }
  finally {
      if (req == null) {
          alert("Error requesting");
      } else {
          req.open("GET", "http://messagehub.herokuapp.com/a3.json", true);
          req.send();
          req.onreadystatechange = showCarmenWaldo;
      }
  }
}
function showCarmenWaldo() {
   if(req.readyState == 4) {
      var str = req.responseText;
      var where = JSON.parse(str);
      for (i in where) {
           pplLoc = new google.maps.LatLng(where[i].loc.latitude,
           where[i].loc.longitude);
           var marker = new google.maps.Marker({
              title: where[i].name + " is here!",
              map: map,
              icon: "http://google-maps-icons.googlecode.com/files/vegetarian.png",
              position: pplLoc
           });
           google.maps.event.addListener(marker, 'click', function() {
            marker.infoContent = "Note: " + where[i].note;

           infowindow.close();
           infowindow.setContent(where[i].name);
           infowindow.open(map, this);
           });
      }
   }
}
