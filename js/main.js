function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 48.060838, lng: 31.499560 },
        zoom: 6
    });

    var marker1 = new google.maps.Marker({
        position: { lat: 50.4492763, lng: 30.5143413 },
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        title: 'Beetroot Academy Kyiv',
        icon: 'img/beetroot.png'
    });

    var infowindow1 = new google.maps.InfoWindow({
        content: '<div class=infowin>Beetroot Academy Kyiv</div>'
    });

    marker1.addListener('click', function(e) {
        map.setZoom(6);
        map.setCenter(marker1.getPosition());
        infowindow1.open(map, marker1);
    });

    var marker2 = new google.maps.Marker({
        position: { lat: 49.5925967, lng: 34.5451328 },
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        title: 'Beetroot Academy Poltava',
        icon: 'img/beetroot.png'
    });

    var infowindow2 = new google.maps.InfoWindow({
        content: '<div class=infowin>Beetroot Academy Poltava</div>'
    });

    marker2.addListener('click', function(e) {
        map.setZoom(6);
        map.setCenter(marker2.getPosition());
        infowindow2.open(map, marker2);
    });

    var marker3 = new google.maps.Marker({
        position: { lat: 46.4868464, lng: 30.7303388 },
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        title: 'Beetroot Academy Odesa',
        icon: 'img/beetroot.png'
    });

    var infowindow3 = new google.maps.InfoWindow({
        content: '<div class=infowin>Beetroot Academy Odesa</div>'
    });

    marker3.addListener('click', function(e) {
        map.setZoom(6);
        map.setCenter(marker3.getPosition());
        infowindow3.open(map, marker3);
    });

    var marker4 = new google.maps.Marker({
        position: { lat: 48.7294323, lng: 37.4844014 },
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        title: 'Beetroot Academy Kramatorsk',
        icon: 'img/beetroot.png'
    });

    var infowindow4 = new google.maps.InfoWindow({
        content: '<div class=infowin>Beetroot Academy Kramatorsk</div>',
    });

    marker4.addListener('click', function(e) {
        map.setZoom(6);
        map.setCenter(marker4.getPosition());
        infowindow4.open(map, marker4);
    });

    var marker5 = new google.maps.Marker({
        position: { lat: 51.4956523, lng: 31.2596374 },
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        title: 'Beetroot Academy Chernigiv',
        icon: 'img/beetroot.png'
    });
    var infowindow5 = new google.maps.InfoWindow({
        content: '<div class=infowin>Beetroot Academy Chernigiv</div>',
    });

    marker5.addListener('click', function(e) {
        map.setZoom(6);
        map.setCenter(marker5.getPosition());
        infowindow5.open(map, marker5);
    });

};
