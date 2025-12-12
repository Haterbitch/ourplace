document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       DEL 1: SPIL LOGIK
       Kører KUN på sider, der har en <div id="gameContainer">
       (Altså index.html og games.html, men IKKE barseltilbud.html)
    ========================================== */
    const container = document.getElementById('gameContainer');

    if (container) {
        // Vi finder kun disse elementer, hvis containeren faktisk er der
        const searchInput = document.getElementById('searchBar');
        const filterButtons = document.querySelectorAll('.filter-btn');

        // Tjekker om vi skal vise alle spil fra start (games.html) eller vente på søgning (index.html)
        const showAllByDefault = container.dataset.showAll === "true";
        let currentCategory = 'alle';

        // --- FUNKTION: Tegn spillene på skærmen ---
        function renderGames(list) {
            container.innerHTML = ''; // Tøm listen før vi tegner nyt

            // Hvis listen er tom (ingen resultater)
            if(list.length === 0) {
                // Vis kun fejlbesked hvis brugeren har skrevet noget i søgefeltet
                if (searchInput && searchInput.value !== '') {
                    container.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Ingen spil fundet...</p>';
                }
                return;
            }

            // Gennemgå listen og lav HTML for hvert spil
            list.forEach(game => {
                // Vælg farve baseret på kategori
                let tagColor = '#89d0f0'; // Default blå (Alle)
                if(game.category === 'Hurtigt') tagColor = '#ffd686'; // Gul
                if(game.category === 'Strategi') tagColor = '#ff94c4'; // Lyserød
                if(game.category === 'Klassiker') tagColor = '#79D9C7'; // Turkis (rettet fra Quiz)

                const html = `
                    <div class="game-card h-100">
                        <h3 class="game-title">${game.title}</h3>
                        <div class="game-info mb-2 text-muted">👥 ${game.players} • ⏱ ${game.time}</div>
                        <p class="game-desc">${game.desc}</p>
                        <span class="game-tag" style="background-color: ${tagColor}">${game.category}</span>
                    </div>
                `;
                container.innerHTML += html;
            });
        }

        // --- FUNKTION: Filtrér listen ---
        function filterGames() {
            const searchText = searchInput.value.toLowerCase();

            // Hvis søgefeltet er tomt, kategorien er "alle", og vi er på forsiden -> Vis ingenting
            if (searchText === '' && currentCategory === 'alle' && !showAllByDefault) {
                container.innerHTML = '';
                return;
            }

            // Filtrer gamesData (fra spildata.js)
            const filtered = gamesData.filter(game => {
                // Tjek kategori (hvis 'alle' er valgt, er den altid true)
                const matchCategory = (currentCategory === 'alle') || (game.category === currentCategory);
                // Tjek søgetekst i titel eller beskrivelse
                const matchSearch = game.title.toLowerCase().includes(searchText) ||
                    game.desc.toLowerCase().includes(searchText);

                return matchCategory && matchSearch;
            });

            renderGames(filtered);
        }

        // --- EVENTS: Lyt efter klik og tastatur ---

        // Når man skriver i søgefeltet
        searchInput.addEventListener('keyup', filterGames);

        // Når man trykker på en kategori-knap
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault(); // Forhindrer at siden hopper hvis det er et link

                // Opdater variablen
                currentCategory = btn.dataset.category || 'alle'; // Fallback til 'alle' hvis data mangler

                // Opdater visuel 'active' klasse på knapperne
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                filterGames();
            });
        });

        // --- START: Kør én gang når siden loades ---
        if (showAllByDefault) {
            renderGames(gamesData); // Vis alle på games.html
        } else {
            container.innerHTML = ''; // Vis intet på index.html
        }
    }

    /* ==========================================
       DEL 2: MENU MODAL
       Kører på alle sider, hvor knappen "Se Vores MENU Her" findes
    ========================================== */
    const modal = document.getElementById("menuModal");
    const openBtn = document.getElementById("openMenuBtn");
    const closeBtn = document.querySelector(".close-btn");

    // Vi tjekker om BÅDE modalen og knappen findes før vi gør noget
    if (modal && openBtn) {

        // Åben modal
        openBtn.onclick = function() {
            modal.style.display = "block";
        }

        // Luk på krydset
        if (closeBtn) {
            closeBtn.onclick = function() {
                modal.style.display = "none";
            }
        }

        // Luk hvis man klikker ved siden af billedet (på den mørke baggrund)
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
});