document.addEventListener('DOMContentLoaded', () => {
    const mainImg = document.getElementById('main-img');
    const mainTitle = document.getElementById('main-title');
    const mainDesc = document.getElementById('main-desc');
    const thumbnails = document.querySelectorAll('.thumb');

    // Sikkerhedscheck
    if (!mainImg) return;

    // Funktion til at opdatere billedet
    function updateMainImage(thumb) {
        // 1. Visuel opdatering af thumbnails
        thumbnails.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');

        // 2. Skift indhold med animation
        mainImg.style.opacity = 0;

        setTimeout(() => {
            mainImg.src = thumb.src;
            if(mainTitle) mainTitle.innerText = thumb.dataset.title;
            if(mainDesc) mainDesc.innerText = thumb.dataset.description;
            mainImg.style.opacity = 1;
        }, 200);
    }

    // Event listeners på klik
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            updateMainImage(this);
        });
    });

    // START FIX: Find den thumbnail der har 'active' class fra start, eller tag den første
    const startThumb = document.querySelector('.thumb.active') || thumbnails[0];
    if (startThumb) {
        // Sæt startbilledet uden animation første gang
        mainImg.src = startThumb.src;
        if(mainTitle) mainTitle.innerText = startThumb.dataset.title;
        if(mainDesc) mainDesc.innerText = startThumb.dataset.description;
    }
});