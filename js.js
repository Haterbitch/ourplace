document.addEventListener('DOMContentLoaded', () => {

    // --- DEL 1: SPIL LOGIK (Kører kun hvis der er en container) ---
    const container = document.getElementById('gameContainer');
    const searchInput = document.getElementById('searchBar');
    const filterButtons = document.querySelectorAll('.filter-btn');
    let currentCategory = 'alle';

    // Tjek om vi er på en side med spil-containeren
    if (container) {

        // Skal vi vise alle spil med det samme? (Tjekker data-show-all attributten i HTML)
        const showAllByDefault = container.dataset.showAll === "true";

        // Funktion til at tegne spillene
        function renderGames(list) {
            container.innerHTML = ''; // Ryd først

            if(list.length === 0) {
                if (searchInput.value !== '') {
                    container.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Ingen spil fundet...</p>';
                }
                return;
            }

            list.forEach(game => {
                let tagColor = '#89d0f0'; // Default blå
                if(game.category === 'Hurtigt') tagColor = '#ffd686';
                if(game.category === 'Strategi') tagColor = '#ff94c4';
                if(game.category === 'Quiz') tagColor = '#79D9C7';

                const html = `
                    <div class="game-card h-100">
                        <h3 class="game-title">${game.title}</h3>
                        <div class="game-info mb-2 text-muted ">👥 ${game.players} • ⏱ ${game.time}</div>
                        <p class="game-desc">${game.desc}</p>
                        <span class="game-tag" style="background-color: ${tagColor}">${game.category}</span>
                    </div>
                `;
                container.innerHTML += html;
            });
        }

        // Funktion til filtrering
        function filterGames() {
            const searchText = searchInput ? searchInput.value.toLowerCase() : '';

            // Hvis søgefeltet er tomt, ingen kategori valgt, OG vi er på forside -> Skjul
            if (searchText === '' && currentCategory === 'alle' && !showAllByDefault) {
                container.innerHTML = '';
                return;
            }

            // Filtrer listen (gamesData skal komme fra spildata.js)
            const filtered = gamesData.filter(game => {
                const matchCategory = (currentCategory === 'alle') || (game.category === currentCategory);
                const matchSearch = game.title.toLowerCase().includes(searchText) ||
                    game.desc.toLowerCase().includes(searchText);
                return matchCategory && matchSearch;
            });

            renderGames(filtered);
        }

        // Event Listeners
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

        // Initiering ved start
        if (showAllByDefault) {
            renderGames(gamesData);
        } else {
            container.innerHTML = ''; // Start tom på forsiden
        }
    }

    // --- DEL 2: MENU MODAL (Kører kun hvis elementerne findes) ---
    const modal = document.getElementById("menuModal");
    const openBtn = document.getElementById("openMenuBtn");
    const closeBtn = document.querySelector(".close-btn");

    if (modal && openBtn) {
        openBtn.onclick = function() {
            modal.style.display = "block";
        }

        if (closeBtn) {
            closeBtn.onclick = function() {
                modal.style.display = "none";
            }
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
});