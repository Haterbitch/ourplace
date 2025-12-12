document.addEventListener('DOMContentLoaded', () => {
    // 1. Find elementerne i HTML'en
    const mainImg = document.getElementById('main-img');
    const mainTitle = document.getElementById('main-title');
    const mainDesc = document.getElementById('main-desc');
    const thumbnails = document.querySelectorAll('.thumb');

    // SIKKERHEDSTJEK: Hvis vi ikke er på galleri-siden (hvor mainImg findes), så stop koden her.
    // Dette forhindrer fejl i konsollen på de andre sider.
    if (!mainImg) return;

    // --- FUNKTION: Skift billede og tekst ---
    function updateMainImage(thumb) {
        // Fjern 'active' (lyserød kant) fra alle små billeder
        thumbnails.forEach(t => t.classList.remove('active'));

        // Sæt 'active' på det billede, vi lige har klikket på
        thumb.classList.add('active');

        // Lav en lille "fade ud" effekt (opacity 0)
        mainImg.style.opacity = 0;

        // Vent 200 millisekunder mens den er usynlig, og skift så indholdet
        setTimeout(() => {
            mainImg.src = thumb.src; // Skift det store billede

            // Hvis titel og beskrivelse findes, så opdater dem med data fra det lille billede
            if(mainTitle) mainTitle.innerText = thumb.dataset.title;
            if(mainDesc) mainDesc.innerText = thumb.dataset.description;

            // Fade ind igen (opacity 1)
            mainImg.style.opacity = 1;
        }, 200);
    }

    // --- EVENTS: Gør de små billeder klikbare ---
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            updateMainImage(this); // 'this' er det billede, der blev klikket på
        });
    });

    // --- START FIX: Sørg for at siden ikke starter tom ---
    // Vi leder efter det billede der har class="active" i HTML'en, eller tager det første
    const startThumb = document.querySelector('.thumb.active') || thumbnails[0];

    if (startThumb) {
        // Sæt startbilledet med det samme (uden animation)
        mainImg.src = startThumb.src;
        if(mainTitle) mainTitle.innerText = startThumb.dataset.title;
        if(mainDesc) mainDesc.innerText = startThumb.dataset.description;
    }
});