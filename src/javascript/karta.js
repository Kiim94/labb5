/**
 * Karta.js
 * Skapar karta mha Leaflet och OpenStreetMap.
 * Plus sökruta med Geocoder plugin.
 * Samtidigt öva på JSDoc skrivande.
 * 
 * Följde tutorial från Leaflet:
 * https://leafletjs.com/examples/quick-start/
 * 
 */
window.addEventListener("load", () => {
    //hämta var kartan ska ligga/laddas in och sätt startvy. Nedan är norrmesunda
    let map = L.map("map").setView([63.29, 18.71], 15);

    //lägg till kartlager
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
});