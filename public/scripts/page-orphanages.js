//create map
const map = L.map('mapid').setView([-22.9035,-43.2096], 13);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [30, 40],
    iconAnchor: [29,68],
    popAnchor: [170, 2]
    
})
//desestruturar
function addMarker({id,name,lat,lng}){
    
// create popup overlay
const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`)

//create and add marker
L
.marker([lat,lng], { icon })
.addTo(map)
.bindPopup(popup)
}
const orphanagesSpan =document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(span =>{
const orphanage = {
    id:span.dataset.id,
    name:span.dataset.name,
    lat:span.dataset.lat,
    lng:span.dataset.lng
}
addMarker(orphanage)
})
