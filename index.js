function load() {
const app = document.getElementById('app');
const greetings = document.getElementById('greetings');
const hrs = document.getElementById('hrs');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const img = document.getElementById('image');

setInterval(() => {
    const data = new Date();
    const hour = data.getHours();
    const minutes = data.getMinutes();
    const seconds = data.getSeconds();

    hrs.innerText = (hour < 10 ? "0":"") + hour;
    min.innerText = (minutes < 10 ? "0":"") + minutes;
    sec.innerText= (seconds < 10 ? "0":"") + seconds;

    if( hour > 0 && hour < 12) {
        greetings.innerHTML = "Bom Dia!";
        img.src = "./assets/lifeisgood.jpg"; 
        app.style.background = "#69ADE0";
    } else if( hour > 12 && hour < 18) {
        greetings.innerHTML = "Boa Tarde!";
        img.src = "./assets/aurora-fox-HupOZi-fKnY-unsplash.jpg";
        app.style.background = "#BF64ED";
    } else {
        greetings.innerHTML = "Boa Noite!";
        img.src = "./assets/biel-morro-J_F_003jcEQ-unsplash.jpg";
        app.style.background = "#FA1EBD";
    }
}, 1000);
}

