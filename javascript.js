// script.js

// 1. Vybereme prvky, se kterými budeme pracovat
const tlacitko = document.getElementById('tlacitko');
const textBarvy = document.getElementById('text-barvy');
const teloStranky = document.body;

// 2. Funkce pro vygenerování náhodné barvy
function generujNahodnouBarvu() {
    const barvy = ['#FF5733', '#33FF57', '#3357FF'];
    const index = Math.floor(Math.random() * barvy.length);
    return barvy[index];
}

// 3. Akce po kliknutí
tlacitko.addEventListener('click', () => {
    const novaBarva = generujNahodnouBarvu();
    
    teloStranky.style.backgroundColor = novaBarva;
    textBarvy.innerText = "Aktuální barva: " + novaBarva;
});