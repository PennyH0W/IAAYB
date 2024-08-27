document.addEventListener("DOMContentLoaded", function() {
    const navContainer = document.querySelector('.gallery-nav');
    
    if (navContainer) {
        navContainer.innerHTML = `
            <p class="text-center">
                <a href="featured.html" class="btn-buy-now page-btn">Featured</a>
                <a href="fantasy-fest.html" class="btn-buy-now page-btn">Fantasy Fest</a>
                <a href="performances-pg-1.html" class="btn-buy-now page-btn">Performances Page 1</a>
                <a href="performances-pg-2.html" class="btn-buy-now page-btn">Performances Page 2</a>
                <a href="tv-appearances.html" class="btn-buy-now page-btn">TV Appearances</a>
            </p>
        `;
    }
});
