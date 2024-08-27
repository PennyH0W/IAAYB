document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.getElementById('gallery');

    // Array of video URLs
    const videos = [
        {
            url: "https://youtu.be/NoeuI8PJ-Nc",
            thumbnail: "https://img.youtube.com/vi/NoeuI8PJ-Nc/hqdefault.jpg",
            title: "Iko Iko<br>Under the Sea Hafla"
        },
        {
            url: "https://youtu.be/7oCSdcDf3mo",
            thumbnail: "https://img.youtube.com/vi/7oCSdcDf3mo/hqdefault.jpg",
            title: "Viking<br>Sping Hafla"
        },
        {
            url: "https://youtu.be/5HLnoWRLMMg",
            thumbnail: "https://img.youtube.com/vi/5HLnoWRLMMg/hqdefault.jpg",
            title: "I'm on Fire!!<br>Spring Hafla"
        },
        {
            url: "https://youtu.be/4b8osGhImyo",
            thumbnail: "https://img.youtube.com/vi/4b8osGhImyo/hqdefault.jpg",
            title: "Drums<br>Ren Faire"
        },
        {
            url: "https://youtu.be/-tEwNn0-pwA",
            thumbnail: "https://img.youtube.com/vi/-tEwNn0-pwA/hqdefault.jpg",
            title: "Country Fusion<br>Greek Hafla"
        },
        {
            url: "https://youtu.be/XktITc3CMVk",
            thumbnail: "https://img.youtube.com/vi/XktITc3CMVk/hqdefault.jpg",
            title: "Thriller<br>Oldsmar Talent Show"
        },
        {
            url: "https://youtu.be/j3kOrEKzwrA",
            thumbnail: "https://img.youtube.com/vi/j3kOrEKzwrA/hqdefault.jpg",
            title: "Folkloric<br>Ren Faire"
        },
        {
            url: "https://youtu.be/AQTzPlDu3Uk",
            thumbnail: "https://img.youtube.com/vi/AQTzPlDu3Uk/hqdefault.jpg",
            title: "Samba<br>Ren Faire"
        },
        {
            url: "https://youtu.be/yO64U0d2fVI",
            thumbnail: "https://img.youtube.com/vi/yO64U0d2fVI/hqdefault.jpg",
            title: "The Rock<br>Greek Hafla"
        },
        {
            url: "https://youtu.be/96lU0ZwfhA0",
            thumbnail: "https://img.youtube.com/vi/96lU0ZwfhA0/hqdefault.jpg",
            title: "Rabiosa<br>Jasmine Moon Hafla"
        },
        {
            url: "https://youtu.be/q1WaC6g0smo",
            thumbnail: "https://img.youtube.com/vi/q1WaC6g0smo/hqdefault.jpg",
            title: "Tres Mundos<br>Greek Hafla"
        },
        {
            url: "https://youtu.be/asuKQrBxEyQ",
            thumbnail: "https://img.youtube.com/vi/asuKQrBxEyQ/hqdefault.jpg",
            title: "Leonard's Ladies<br>Oldsmar Park"
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
        titleDiv.innerHTML = video.title;

        anchorElement.appendChild(imgElement);
        colDiv.appendChild(anchorElement);
        colDiv.appendChild(titleDiv);
        galleryContainer.appendChild(colDiv);
    });
});
