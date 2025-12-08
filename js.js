document.addEventListener('DOMContentLoaded', () => {

    let currentCategory = 'alle';
    const container = document.getElementById('gameContainer');
    const searchInput = document.getElementById('searchBar');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // NYT: Vi tjekker, om HTML-containeren har "data-show-all" sat til true
    // (Det skal den have på undersiden "Vores Spil", men IKKE på forsiden)
    const showAllByDefault = container && container.dataset.showAll === "true";

    // --- 2. FUNKTION: Tegn spillene ---
    function renderGames(list) {
        container.innerHTML = ''; // Ryd først

        if(list.length === 0) {
            // Vis kun fejlbesked, hvis brugeren faktisk har søgt (for at undgå den vises ved start på forsiden)
            if (searchInput.value !== '') {
                container.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Ingen spil fundet...</p>';
            }
            return;
        }

        list.forEach(game => {
            // DINE FARVER
            let tagColor = '#89d0f0'; // Default blå
            if(game.category === 'Hurtigt') tagColor = '#ffd686'; // Gul
            if(game.category === 'Strategi') tagColor = '#ff94c4'; // Lyserød
            if(game.category === 'Quiz') tagColor = '#79D9C7';    // Turkis

            const html = `
                <div class="game-card">
                    <h3 class="game-title">${game.title}</h3>
                    <div class="game-info">👥 ${game.players} • ⏱ ${game.time}</div>
                    <p class="game-desc">${game.desc}</p>
                    <span class="game-tag" style="background-color: ${tagColor}">${game.category}</span>
                </div>
            `;
            container.innerHTML += html;
        });
    }

    // --- 3. FUNKTION: Filtrerings-logik ---
    function filterGames() {
        const searchText = searchInput.value.toLowerCase();

        // NYT: Hvis søgefeltet er tomt, ingen kategori er valgt,
        // OG vi er på forsiden (!showAllByDefault) -> Skjul alt
        if (searchText === '' && currentCategory === 'alle' && !showAllByDefault) {
            container.innerHTML = ''; // Tømmer listen
            return;
        }

        const filtered = gamesData.filter(game => {
            const matchCategory = (currentCategory === 'alle') || (game.category === currentCategory);
            const matchSearch = game.title.toLowerCase().includes(searchText) ||
                game.desc.toLowerCase().includes(searchText);
            return matchCategory && matchSearch;
        });

        renderGames(filtered);
    }

    // --- 4. EVENTS: Her "lytter" vi efter input ---

    if (searchInput) {
        searchInput.addEventListener('keyup', filterGames);
    }

    if (filterButtons) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                currentCategory = btn.dataset.category;

                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                filterGames();
            });
        });
    }

    // --- 5. START LOGIK ---
    // Hvis vi er på "Vores Spil" siden (data-show-all="true") -> Vis alt
    // Hvis vi er på Forsiden -> Gør ingenting (tom liste)
    if (showAllByDefault) {
        renderGames(gamesData);
    } else {
        container.innerHTML = '';
    }

});
// --- 6. MENU MODAL LOGIK ---

// Hent elementerne
const modal = document.getElementById("menuModal");
const btn = document.getElementById("openMenuBtn");
const span = document.getElementsByClassName("close-btn")[0];

// Når man klikker på MENU knappen, åben modalen
if (btn) {
    btn.onclick = function() {
        modal.style.display = "block";
    }
}

// Når man klikker på X (span), luk modalen
if (span) {
    span.onclick = function() {
        modal.style.display = "none";
    }
}

// Når man klikker udenfor billedet (på den mørke baggrund), luk modalen
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}