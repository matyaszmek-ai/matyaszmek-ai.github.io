// 1. Vybereme prvky z HTML
const tlacitko = document.getElementById('tlacitko');
const textBarvy = document.getElementById('text-barvy');

// 2. Funkce pro vygenerování náhodné barvy (stačí jen jedna)
function generujNahodnouBarvu() {
    const barvy = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A8', '#9B59B6'];
    const index = Math.floor(Math.random() * barvy.length);
    return barvy[index];
}

// 3. Akce po kliknutí na tlačítko
tlacitko.addEventListener('click', () => {
    const canvas = document.getElementById("mojePlatno");
    if (!canvas) return; // Malá pojistka, kdyby canvas v HTML chyběl

    const ctx = canvas.getContext("2d"); // "ctx" je standardní název pro kreslící kontext

    // Vygenerujeme dvě různé barvy
    const barva1 = generujNahodnouBarvu();
    const barva2 = generujNahodnouBarvu();
    
    // NAKRESLÍME PRVNÍ ČTVEREC
    ctx.fillStyle = barva1; // Namočíme štětec do první barvy
    ctx.fillRect(50, 50, 100, 100);

    // NAKRESLÍME DRUHÝ ČTVEREC (přes ten první)
    ctx.fillStyle = barva2; // Přemáčíme štětec na druhou barvu
    ctx.fillRect(80, 80, 100, 100);

    // Aktualizace textu pod plátnem
    textBarvy.innerText = "Barvy čtverců: " + barva1 + " a " + barva2;
});