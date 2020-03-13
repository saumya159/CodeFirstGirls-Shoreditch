var markers = [
    {
        "lat": 51.523539,
        "lng": -0.075957,
        "html": "html/box-park.html",
        "title": "BOXPARK Shoreditch"
    },
    {
        "lat": 51.5161957,
        "lng": -0.0809454,
        "html": "html/duck-and-waffle.html",
        "title": "Duck and Waffle"
    }
]

// Initialize and add the map
function initMap() {
    // The location of shoreditch
    var shoreditch_location = { lat: 51.5244122, lng: -0.0838806 };
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 14, center: shoreditch_location });

    // Add all the markers to the map
    markers.forEach(function (marker, index) {
        var marker = new google.maps.Marker({ position: marker, map: map, title:marker['title']});
        if (infowindow) {
            infowindow.close();
        }
        var infowindow = new google.maps.InfoWindow({
            content: marker["title"]
          });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
    });
}