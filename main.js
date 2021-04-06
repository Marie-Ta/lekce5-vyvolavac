let jmena = [
    "Markéta",
    "Kateřina",
    "Júlia",
    "Lucie",
    "Aneta",
    "Veronika",
    "Petra",
    "Olga",
    "Naďa",
    "Nikola",
    "Eva",
    "Anísa",
    "Terezia",
    "Diana",
    "Anna",
    "Iva",
    "Denisa",
    "Zuzana",
    "Jana",
    "Martina",
    "Lenka",
    "Iveta",
    "Pavla",
    "Lucie",
    "Kamila",
    "Soňa"
];

let tazenaJmena = [];

function tahnoutJmeno() {
    if (jmena.length === 0) {
        return;
    } //pokud je délka pole 0, tak se vrať; return znamená, že funkce končí a něco vrací, v tomto případě nic nevrací, jen funkce končí

    // Generujeme náhodný index
    let vyherniIndex = Math.floor(Math.random() * jmena.length); 
    
    // Získáme výherní jméno na patřičném indexu
    let vyherniJmeno = jmena[vyherniIndex];
    
    // Vyřadíme vylosované jméno z osudí
    jmena.splice(vyherniIndex, 1);
    console.log(jmena.length);

    // Výherní jméno si uložíme do pole k ostatním výherním
    

    let vyherce = document.querySelector('#vyherka');
    vyherce.innerHTML = vyherniJmeno;
}