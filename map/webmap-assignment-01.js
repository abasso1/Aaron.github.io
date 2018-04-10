let aaronmap = L.map('aaronmap').setView([20, -10], 8)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}.png').addTo(aaronmap);
let aaronmarker = L.marker([69, -69]).addTo(aaronmap);
let aaronpolygon = L.polygon([
    [33.0, -94.0],
    [29.6, -93.8],
    [28.8, -89.07],
    [31.0, -89.9],
    [31.0, -91.0],
    [33.0, -90.9]
]).addTo(aaronmap);
aaronpolygon.bindPopup('USA! USA! USA! USA!')
aaronmarker.bindPopup('The dirty white North')
var aaronpolyline=[
    [.2, -220],
    [.2, -57],
    [.2, 79]
];
var aaronpolyline = L.polyline(aaronpolyline, {color: 'orange'}).addTo(aaronmap);
aaronmap.fitBounds(aaronpolyline.getBounds());
aaronmap.on('click', function (event) {
  console.log(' ' + event.latlng)
})
aaronmap.on('click', function(e) {
        var popLocation= e.latlng;
        var popup = L.popup()
        .setLatLng(popLocation)
        .setContent('<p>There is nothing worth seeing here!<br />Try some other region.</p>')
        .openOn(aaronmap);
    });
