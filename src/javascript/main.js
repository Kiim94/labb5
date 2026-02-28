import '../scss-filer/style.scss'

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("nav ul.menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

//skadad smiley vid tryck
const smiley = document.querySelector("#smiley");
const ouch = document.querySelector("#ouch");
const originalColor = ouch.style.color;


smiley.addEventListener("click", function() {
    smiley.classList.remove("wobble");
    if (smiley.innerHTML === "😊"){
        smiley.classList.add("shake");
        smiley.innerHTML = "🤕";
        ouch.innerHTML = "Ow! Hur kunde du?!";
        ouch.style.color="red";
    } else if(smiley.innerHTML === "🤕"){
        smiley.classList.add("wobble");
        smiley.innerHTML = "💀";
        ouch.innerHTML = ". . .";
    } else {
        smiley.innerHTML = "😊";
        ouch.innerHTML = "Klicka på smileyn";
        smiley.classList.remove("shake");
        ouch.style.color=originalColor;
    }
});

