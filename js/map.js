var markers = [
    {
        "lat": 51.523539,
        "lng": -0.075957,
        "html": "box-park.html",
        "title": "BOXPARK Shoreditch",
        "stars": 4
    },
    {
        "lat": 51.5161957,
        "lng": -0.0809454,
        "html": "duck-and-waffle.html",
        "title": "Duck and Waffle",
        "stars": 5
    }
]

function createMarkerInfoString(marker_info) {
    num_stars = marker_info['stars'];
    title_of_place = marker_info['title'];
    var info_string = '<h3>'  +
        title_of_place +
        '</h3>' + '<span style="font-weight:bold">&#163;</span>'.repeat(num_stars);
    return info_string
}

// Initialize and add the map
function initMap() {
    // The location of shoreditch
    var shoreditch_location = { lat: 51.5244122, lng: -0.0838806 };
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 14, center: shoreditch_location}
          );
    var infowindow;
    // Add all the markers to the map
    markers.forEach(function (marker_info, index) {
        var marker = new google.maps.Marker({
            position: marker_info,
            map: map,
            animation: google.maps.Animation.DROP,
        });

        var contentString = createMarkerInfoString(marker_info);


        marker.addListener('click', function () {
            if (infowindow) {
                infowindow.close();
            }
            infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            infowindow.open(map, marker);
        });
    });
}