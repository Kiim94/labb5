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

//lägg till "grundmarkör", för start. Kommer finnas hela tiden
L.marker([63.29, 18.71]).addTo(map)

//lägg till geocoder - sökruta, plugin för leaflet
const searchCode = L.Control.geocoder({
    collapsed:true}).addTo(map);

    //.on - samma som addEventListener
    searchCode.on("markgeocode", (event) => {
        //skapa koordinater för sökresultat - latitut och longitud. Flyttar kartan dit. 
        //Zoomar in på 15. Lägger till markör o popup med namn
        //coords fungerar ungefär som JSON, fast array. Hämtar latitud och longitud
        const coords = [event.geocode.center.lat, event.geocode.center.lng];
        map.setView(coords, 15);
        L.marker(coords).addTo(map).bindPopup(event.geocode.name).openPopup();
    })

});