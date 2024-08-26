document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.getElementById('gallery');

    // Array of video URLs
    const videos = [
        {
            url: "https://youtu.be/NoeuI8PJ-Nc",
            thumbnail: "https://img.youtube.com/vi/NoeuI8PJ-Nc/hqdefault.jpg",
            title: "Iko Iko"
        },
        {
            url: "https://youtu.be/7oCSdcDf3mo",
            thumbnail: "https://img.youtube.com/vi/7oCSdcDf3mo/hqdefault.jpg",
            title: "Viking - Bifrost"
        },
        {
            url: "https://youtu.be/5HLnoWRLMMg",
            thumbnail: "https://img.youtube.com/vi/5HLnoWRLMMg/hqdefault.jpg",
            title: "Tsuki Umi"
        },
        {
            url: "https://youtu.be/y7FA4TNMOGM",
            thumbnail: "https://img.youtube.com/vi/y7FA4TNMOGM/hqdefault.jpg",
            title: "Nostalgia"
        },
        {
            url: "https://youtu.be/-tEwNn0-pwA",
            thumbnail: "https://img.youtube.com/vi/-tEwNn0-pwA/hqdefault.jpg",
            title: "Gallimaufry"
        },
        {
            url: "https://youtu.be/XktITc3CMVk",
            thumbnail: "https://img.youtube.com/vi/XktITc3CMVk/hqdefault.jpg",
            title: "Makaseko - Mizore"
        },
        {
            url: "https://youtu.be/j3kOrEKzwrA",
            thumbnail: "https://img.youtube.com/vi/j3kOrEKzwrA/hqdefault.jpg",
            title: "Thalassa"
        },
        {
            url: "https://youtu.be/AQTzPlDu3Uk",
            thumbnail: "https://img.youtube.com/vi/AQTzPlDu3Uk/hqdefault.jpg",
            title: "Fireball - Pitbull"
        }
    ];

    videos.forEach(video => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-lg-3 col-md-4 col-sm-6 mb-4';

        const anchorElement = document.createElement('a');
        anchorElement.href = video.url;
        anchorElement.target = "_blank";

        const imgElement = document.createElement('img');
        imgElement.src = video.thumbnail;
        imgElement.className = 'img-fluid gallery-video';
        imgElement.alt = video.title;

        const titleDiv = document.createElement('div');
        titleDiv.className = 'thumbnail-title';
        titleDiv.textContent = video.title;

        anchorElement.appendChild(imgElement);
        colDiv.appendChild(anchorElement);
        colDiv.appendChild(titleDiv);
        galleryContainer.appendChild(colDiv);
    });
});
