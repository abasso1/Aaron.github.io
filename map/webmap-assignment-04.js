let aaronmap2 = L.map('aaronmap2').setView([20, -10], 1.4)

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}.png').addTo(aaronmap2);

let aaronIcon2 = L.icon({
  iconUrl: 'penguin.png',
  iconSize: [38, 50], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})
let islandCoords2 = [69, -69]
let islandOptions2 = {icon: aaronIcon}
let island2 = L.marker(islandCoords2, islandOptions2).addTo(aaronmap2);

let usaCoords2= [
  [48, -127],
  [48, -67],
  [25, -79],
  [31,-123]
]
let usaStyle2 = {
  color: 'blue',
  fillColor: '#ff0000',
  weight: 4,
  fillOpacity: 0.01

}
let usa2 = L.polygon(usaCoords2,usaStyle2).addTo(aaronmap2);

usa2.bindPopup('USA! USA! USA! USA!')
island2.bindPopup('Baffin Island')

aaronmap2.on('click', function(e) {
        var popLocation= e.latlng;
        var popup = L.popup()
        .setLatLng(popLocation)
        .setContent('<p>There is nothing worth seeing here!<br />Try some other region.</p>')
        .openOn(aaronmap2);
 });
L.geoJSON(geojson).addTo(aaronmap2)

L.geoJSON(geojson, { style: { color: 'purple' }}).addTo(aaronmap2)
let aaronStyle2 = { color: 'purple' }
let aaronOptions2 = { style: aaronStyle2 }
L.geoJSON(geojson, aaronOptions2).addTo(aaronmap2)
