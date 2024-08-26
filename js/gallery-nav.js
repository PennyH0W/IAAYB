document.addEventListener("DOMContentLoaded", function() {
    const navContainer = document.createElement('p');
    navContainer.className = 'text-center';

    const pages = [
        { url: "featured.html", label: "Featured" },
        { url: "fantasy-fest.html", label: "Fantasy Fest" },
        { url: "performances-pg-1.html", label: "Performances 1" },
        { url: "performances-pg-2.html", label: "Perfomances 2" },
        { url: "tv-appearances.html", label: "TV Appearances" }
    ];

    pages.forEach(page => {
        const link = document.createElement('a');
        link.href = page.url;
        link.className = 'btn-buy-now page-btn';
        link.textContent = page.label;

        navContainer.appendChild(link);
    });

    const targetElement = document.querySelector('.gallery-nav'); // Add this class to your target element in HTML
    if (targetElement) {
        targetElement.appendChild(navContainer);
    }
});
