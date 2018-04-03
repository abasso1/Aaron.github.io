let aaronmap = L.map('aaronmap').setView([20, -10], 8)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}.png').addTo(aaronmap);
let aaronmarker = L.marker([69, -69]).addTo(aaronmap);
let aaronpolygon = L.polygon([
  [12, 22],
  [37, 45],
  [40, 70]
]).addTo(aaronmap);
aaronpolygon.bindPopup('NOT Disney World')
aaronmarker.bindPopup('The dirty white North')
function logRide (event) {
  console.log('Best Ride in park' + event.latlng)
};
aaronmap.on('CLICK.', logRide);
var basePolyline = [
    [20, -14],
    [80, 10],
    [0, 1]
];
var aaronpolyline = L.polyline(basePolyline, {color: 'orange'}).addTo(aaronmap);
aaronmap.fitBounds(aaronpolyline.getBounds());
