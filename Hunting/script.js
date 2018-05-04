let huntmap = L.map('huntmap').setView([38, -99], 4);
let mylayer1 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}.png').addTo(huntmap);
let mylayer2 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
let mylayer3 = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png');
let mylayers = {
  'Topo': mylayer1,
  'Featureless': mylayer2,
  'Street Views': mylayer3
}
L.control.layers(mylayers).addTo(huntmap)
var mallardIcon = L.icon({
    iconUrl: 'mallard.png',
    iconSize:     [20, 50],
    iconAnchor:   [10, 30],
    popupAnchor:  [-3, -76]
});
L.marker([34.499, -91.599], {icon: mallardIcon}).addTo(huntmap).bindPopup("Stuttgart Arkansas, the Duck Capital of the World.");
var huntpolyline=[
    [39.722, -80.519],
    [39.722, -75.79],
    [38.463, -75.69]
];
L.polyline(huntpolyline, {weight:7, opacity:1, color:'red'}).addTo(huntmap).bindPopup("The Mason-Dixion Line");
let huntStyle = {
  color: 'Green',
  fillcolor: 'Green',
  weight: 2,
  fillOpacity: 0.2,
  dasharray: 4
}
let huntOptions = {
  style: huntStyle,
  onEachFeature: huntpopup
}
L.geoJSON(geojson, {
    style: function(feature) {
        switch (feature.properties.density) {
            case 'Yes': return {color: "#ff0000"};

        }
    }
}).addTo(huntmap);

L.geoJSON(geojson, huntOptions).addTo(huntmap)
function huntpopup (feature, layer) {
  let density = feature.properties.density
  let name = feature.properties.name
  layer.bindPopup( name + ':<br> ' + density + ', I have hunted in this State!')
}



  
