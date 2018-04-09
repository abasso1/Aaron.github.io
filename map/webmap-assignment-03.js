let aaronmap = L.map('aaronmap').setView([20, -10], 1.4)

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}.png').addTo(aaronmap);

let aaronIcon = L.icon({
  iconUrl: 'penguin.png',
  iconSize: [38, 50], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})
let islandCoords = [69, -69]
let islandOptions = {icon: aaronIcon}
let island = L.marker(islandCoords, islandOptions).addTo(aaronmap);

let usaCoords= [
  [48, -127],
  [48, -67],
  [25, -79],
  [31,-123]
]
let usaStyle = {
  color: 'blue',
  fillColor: '#ff0000',
  weight: 4

}
let usa = L.polygon(usaCoords,usaStyle).addTo(aaronmap);

usa.bindPopup('USA! USA! USA! USA!')
island.bindPopup('Baffin Island')

aaronmap.on('click', function(e) {
        var popLocation= e.latlng;
        var popup = L.popup()
        .setLatLng(popLocation)
        .setContent('<p>There is nothing worth seeing here!<br />Try some other region.</p>')
        .openOn(aaronmap);
    });
