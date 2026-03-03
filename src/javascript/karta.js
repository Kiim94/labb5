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

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

window.addEventListener("load", () => {
    //hämta var kartan ska ligga/laddas in och sätt startvy. Nedan är norrmesunda
    let map = L.map("map").setView([63.29, 18.71], 15);

    //lägg till kartlager
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    //knapp sök
    const btnSearch = document.getElementById("btnSearch");
    btnSearch.addEventListener("click", () => {
        //innehåll från input
        const search = document.getElementById("search").value;
        searchFunction(search);
    })

    /**
     * Söker plats med nominatim API.
     * Placerar marköt på kartan
     * @async
     * @param {string} search - Användare skriver text för att söka efter adress/stad/plats
     * @returns {Promise<void>} - Inget. Uppdaterar karta med markör
     * 
     * @example searchFunction("Örnsköldsvik");
     * //Användaren söker "Örnsköldsvik" i sökrutan
     * //Karta flyttas till den platsen med markör
     */
    //hämta api med async
    async function searchFunction(search){
        try{
            const response = await fetch("https://nominatim.openstreetmap.org/search?format=json&q=" + encodeURIComponent(search)
        );

        const data = await response.json();

        if(data.length > 0){
            const lat = data[0].lat;
            const lon = data[0].lon;   

            //skapa markör
            let icon = L.divIcon({
                className: 'icon',
                html: '▼',
                iconSize: [20, 20],
                iconAnchor:[10,10]
            });
            
            map.setView([lat,lon], 15);
            L.marker([lat,lon], {icon: icon}).addTo(map).bindPopup(data[0].display_name).openPopup();

            
        }
        }catch(err){
            console.error("Något gick fel: ", err);
        }
    }
});