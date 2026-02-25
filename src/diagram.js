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
        createCircle(data);
        console.log(data); // Visa datan i konsolen
    } catch (error) {
        console.error('Fel:', error);
    }
}
//sökande + namn på KURSER
function createBar(data){
    const courses = data.filter(c => c.type === "Kurs");

    //sortera programmen med parseInt (den hämtar och visar första siffran, t.ex. 200 applicantsTotal).
    //Slice för att hämta 6 värden
    const top6 = courses.sort((a,b) => parseInt(b.applicantsTotal) - parseInt(a.applicantsTotal)).slice(0,6);
    //console.log(top6);
    //hämta namn och värden. Map gör nya arrayer med map - en innehåller namn på kurserna, den andra med antal sökande
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
            layout:{
                padding:{
                    left:110,
                    right:0
                }
            },
            plugins:{
                legend:{
                    position:"top",
                    align:"center",
                    display:true,
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
                    },
                    x:{
                        font:{
                            size:10
                        },
                        ticks:{
                            maxRotation:45,
                            minRotation:45
                        }
                    }
                }
            }
        }});
    }

//cirkel. Ska visa statistik över de 5 mest sökta PROGRAMMEN. Namn + totalt antal sökande
function createCircle(data){
    const programs = data.filter(p => p.type === "Program");

    const top5 = programs.sort((a,b) => parseInt(b.applicantsTotal) - parseInt(a.applicantsTotal)).slice(0,5);
    
    const labels = top5.map(c => c.name);
    const values = top5.map(c => c.applicantsTotal);
    
    console.log(top5);
    const canvasCircle = document.getElementById("circle");

    const circleColors = ["red", "blue", "green", "orange", "purple"];
    const newCanvasBar = new Chart(canvasCircle, {
        type: "pie",
        data:{
            labels: labels,
            datasets:[{
                label: "Topp 5 program 2025",
                data: values,
                backgroundColor: circleColors
            }] 
        },
        options:{
            responsive:true,
            maintainAspectRatio:false,
            plugins:{
                legend:{
                    position:"top",
                    align:"center",
                    display:true,
                    labels:{
                        boxWidth: 60,
                        boxHeight: 20,
                        font: {
                            size:14
                        },
                    }
                }
            }
        }});
    }