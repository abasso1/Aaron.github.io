let aaronmap2 = L.map('aaronmap2').setView([29.9, -90], 8.5)

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}.png').addTo(aaronmap2);

let aaronStyle2 = {
  color: 'Yellow',
  fillcolor: 'purple',
  weight: 3,
  fillOpacity: 0.5,
  dasharray: 4
}
let aaronOptions2 = {
  style: aaronStyle2,
  onEachFeature: aaronpopup
}

L.geoJSON(geojson, aaronOptions2).addTo(aaronmap2);
function aaronpopup (feature, layer) {
  let agency = feature.properties.AGENCY
  let phone = feature.properties.PHONE
  layer.bindPopup( agency + ' is in charge of all the recycling for the district.<br> Please contact them at ' + phone + ' for any furhter inquiries.')
}
