let map = L.map("map",{
    zoomControl: true,
}).setView([57.7089, 11.9746], 13);


L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom:19,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"})
    .addTo(map);

window.addEventListener("load", function() {
    map.invalidateSize();
});