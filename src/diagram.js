document.addEventListener("DOMContentLoaded", async () => {
    fetchData();
})
async function fetchData() {
    const url = 'https://mallarmiun.github.io/Frontend-baserad-webbutveckling/Moment%205%20-%20Dynamiska%20webbplatser/statistik_sokande_ht25.json'
    try {
        const response = await fetch(url);
        const data = await response.json();

        //function call
        createBar(data);
        createCirlcle(data);
        console.log(data); // Visa datan i konsolen
    } catch (error) {
        console.error('Fel:', error);
    }
}
function createBar(data){
    const programs = data.filter(c => c.type === "Program");

    const top6 = programs.sort((a,b) => parseInt(b.applicantsTotal) - parseInt(a.applicantsTotal)).slice(0,6);
    //console.log(top6);
    //hämta namn och värden
    const labels = top6.map(c => c.name);
    const values = top6.map(c => c.applicantsTotal);
    
    //skapa stapeln! variabel ifall man vill göra ngt mer med den
    const canvasBar = document.getElementById("bar");

    //färger på staplarna
    const colors = ["crimson", "cornflowerblue", "lightseagreen", "chocolate", "indigo", "goldenrod"];
    const newCanvasBar = new Chart(canvasBar, {
        type: "bar",
        data:{
            labels: labels,
            datasets:[{
                label: "Topp 6 kurser 2025",
                data: values,
                backgroundColor: colors
            }] 
        },
        options:{
            responsive:true,
            maintainAspectRatio:false,
            plugins:{
                legend:{
                    position:"top",
                    align:"center",
                    labels:{
                        boxWidth: 60,
                        boxHeight: 20,
                        font: {
                            size:14
                        },
                    }
                },
                scales:{
                    y:{
                        beginAtZero: true,
                    }
                }
            }
        }});
    }