// 1. Find elementerne
const mainImg = document.getElementById('main-img');
const mainTitle = document.getElementById('main-title');
const mainDesc = document.getElementById('main-desc');
const thumbnails = document.querySelectorAll('.thumb');

// 2. Sæt "lytte-bøffer" på alle billederne
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {

        // Opdater billede og tekst
        mainImg.src = this.src;
        mainImg.alt = this.alt;
        mainTitle.textContent = this.getAttribute('data-title');
        mainDesc.textContent = this.getAttribute('data-description');

        // Flyt den aktive ramme
        thumbnails.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

    });
});

// NY LINJE HERUNDER:
// Vi "klikker" automatisk på det første billede (indeks 0), når siden starter
thumbnails[0].click();