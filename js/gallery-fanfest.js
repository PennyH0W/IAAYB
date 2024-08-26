document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.getElementById('gallery');

    // Array of image paths
    const images = [
        "images/fan-fest-1.png",
        "images/fan-fest-2.png",
        "images/fan-fest-3.png",
        "images/fan-fest-4.png",
        "images/fan-fest-5.png",
        "images/fan-fest-6.png",
        "images/fan-fest-7.png",
        "images/fan-fest-8.png",
        "images/fan-fest-9.png",
        "images/fan-fest-10.png",
        "images/fan-fest-11.webp",
        "images/fan-fest-12.webp",
        "images/fan-fest-13.webp",
        "images/fan-fest-14.webp"
    ];

    images.forEach(image => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-lg-3 col-md-4 col-sm-6 mb-4';

        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.className = 'img-fluid gallery-img'; // Add the gallery-img class here
        imgElement.alt = 'Gallery image';

        // Add click event to open the image in a popup
        imgElement.addEventListener('click', function() {
            openPopup(image);
        });

        colDiv.appendChild(imgElement);
        galleryContainer.appendChild(colDiv);
    });

    // Create the popup overlay
    const popupOverlay = document.createElement('div');
    popupOverlay.className = 'popup-overlay';
    document.body.appendChild(popupOverlay);

    // Create the popup content container
    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';
    popupOverlay.appendChild(popupContent);

    // Function to open the popup
    function openPopup(imageSrc) {
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imgElement.alt = 'Full-size image';
        imgElement.className = 'enlarged';

        imgElement.addEventListener('click', function() {
            // Toggle enlargement
            if (imgElement.classList.contains('enlarged')) {
                imgElement.classList.remove('enlarged');
            } else {
                imgElement.classList.add('enlarged');
            }
        });

        popupContent.innerHTML = ''; // Clear previous content
        popupContent.appendChild(imgElement);
        popupOverlay.classList.add('active');
    }

    // Close the popup when the overlay is clicked
    popupOverlay.addEventListener('click', function() {
        popupOverlay.classList.remove('active');
    });
});
