    // Sélectionne le bouton "Ses matchs"
const toggleButton = document.querySelector("#toggle-matches");

    // Sélectionne toutes les cartes et leur tableaux associés
const cards = document.querySelectorAll(".card");
const tables = document.querySelectorAll(".match-table");

    // Fonction pour afficher uniquement les cartes
function showCardsOnly() {
    cards.forEach(card => card.style.display = "block"); // Affiche les cartes
    tables.forEach(table => table.style.display = "none"); // Masque tous les tableaux
}

    // Clic sur le bouton "Tous voir"
toggleButton.addEventListener("click", () => {
    const allHidden = Array.from(cards).every(card => card.style.display === "none") &&
                      Array.from(tables).every(table => table.style.display === "none");

if (allHidden) {
    // Si tout est caché (cartes et tableaux), affiche uniquement les cartes
    showCardsOnly();
} else {
    // Si les cartes sont affichées, cache tout (cartes et tableaux)
    cards.forEach(card => card.style.display = "none");
    tables.forEach(table => table.style.display = "none");
}
});

    // Clic sur une carte : affiche/masque son tableau associé
cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        const table = tables[index]; // Tableau correspondant
        if (table) {
            table.style.display = table.style.display === "none" ? "table" : "none"; // Alterne l'affichage du tableau
        }
    });
});

    // Au démarrage, tout est caché (cartes et tableaux)
window.addEventListener("DOMContentLoaded", () => {
    cards.forEach(card => card.style.display = "none"); // Assure que les cartes sont cachées
    tables.forEach(table => table.style.display = "none"); // Et les tableaux aussi
});
