var markers = [
    {
        "lat": 51.523539,
        "lng": -0.075957,
        "title": "BOXPARK Shoreditch",
        "stars": 2
    },
    {
        "lat": 51.5161957,
        "lng": -0.0809454,
        "title": "Duck and Waffle",
        "stars": 5
    },
    {
        "lat": 51.5124626,
        "lng": -0.1360826,
        "title": "Berwick Market",
        "stars": 3
    },
    {
        "lat": 51.5227523,
        "lng": -0.0843406,
        "title": "Breakfast Club",
        "stars": 3
    },
    {
        "lat": 51.5189231,
        "lng": -0.0859158,
        "title": "Yauatcha",
        "stars": 3
    },
    {
        "lat": 51.5139289,
        "lng": -0.1337045,
        "title": "Chotto Matte",
        "stars": 3
    },
    {
        "lat": 51.5224915,
        "lng": -0.0825905,
        "title": "Quaker Street Cafe",
        "stars": 1
    },
    {
        "lat": 51.5163688,
        "lng": -0.0785026,
        "title": "Petticoat Lane",
        "stars": 2
    },
    {
        "lat": 51.5256852,
        "lng": -0.0826429,
        "title": "Ballie Ballerson",
        "stars": 1
    },
    {
        "lat": 51.5245028,
        "lng": -0.073942,
        "title": "Biegel Bake",
        "stars": 1
    },
    {
        "lat": 51.5208912,
        "lng": -0.0799096,
        "title": "Dennis Server",
        "stars": 1
    },
    {
        "lat": 51.5239206,
        "lng": -0.0738005,
        "title": "Cereal Killer Cafe",
        "stars": 2
    },
    {
        "lat": 51.5124824,
        "lng": -0.1407383,
        "title": "Cahoots",
        "stars": 3
    },
    {
        "lat": 51.5250456,
        "lng": -0.0850524,
        "title": "Nami-Nobu Hotel",
        "stars": 4
    },
    {
        "lat": 51.5265294,
        "lng": -0.0899648,
        "title": "Nightjar",
        "stars": 3
    },
    {
        "lat": 51.5262938,
        "lng": -0.0820903,
        "title": "Callooh Callay",
        "stars": 2
    },
    {
        "lat": 51.5150573,
        "lng": -0.0883021,
        "title": "Demon,Wise & Partner",
        "stars": 3
    },
    {
        "lat": 51.5243756,
        "lng": -0.0745705,
        "title": "The Cocktail Trading Co",
        "stars": 2
    }
]

function createMarkerInfoString(marker_info) {
    num_stars = marker_info['stars'];
    title_of_place = marker_info['title'];
    var info_string = '<h3>' +
        title_of_place +
        '</h3>' + '<span style="font-weight:bold">&#163;</span>'.repeat(num_stars);
    return info_string
}

// Initialize and add the map
function initMap() {
    // The location of shoreditch
    var shoreditch_location = { lat: 51.5244484, lng: -0.0800882 };
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 16, center: shoreditch_location }
    );
    // Add all the markers to the map
    markers.forEach(function (marker_info, index) {
        var marker = new google.maps.Marker({
            position: marker_info,
            map: map,
            animation: google.maps.Animation.DROP,
        });

        var contentString = createMarkerInfoString(marker_info);

        infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        infowindow.open(map, marker);


    });
}