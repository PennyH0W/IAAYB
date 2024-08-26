document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.getElementById('gallery');

    // Array of additional video URLs
    const videos = [
        {
            url: "https://youtu.be/BaNZRI0uQi4",
            thumbnail: "https://img.youtube.com/vi/BaNZRI0uQi4/hqdefault.jpg",
            title: "Video 1 Title"
        },
        {
            url: "https://youtu.be/WrvhcOIYJXU",
            thumbnail: "https://img.youtube.com/vi/WrvhcOIYJXU/hqdefault.jpg",
            title: "Video 2 Title"
        },
        {
            url: "https://youtu.be/yQtd1kDPamE",
            thumbnail: "https://img.youtube.com/vi/yQtd1kDPamE/hqdefault.jpg",
            title: "Video 3 Title"
        },
        {
            url: "https://youtu.be/Hd7f_bf78ZE",
            thumbnail: "https://img.youtube.com/vi/Hd7f_bf78ZE/hqdefault.jpg",
            title: "Video 4 Title"
        },
        {
            url: "https://youtu.be/u1MCNmxrkiw",
            thumbnail: "https://img.youtube.com/vi/u1MCNmxrkiw/hqdefault.jpg",
            title: "Video 5 Title"
        },
        {
            url: "https://youtu.be/W7JkozPkCWQ",
            thumbnail: "https://img.youtube.com/vi/W7JkozPkCWQ/hqdefault.jpg",
            title: "Video 6 Title"
        },
        {
            url: "https://youtu.be/KatF1QD_YkI",
            thumbnail: "https://img.youtube.com/vi/KatF1QD_YkI/hqdefault.jpg",
            title: "Video 7 Title"
        },
        {
            url: "https://youtu.be/FeJRYLvxFpk",
            thumbnail: "https://img.youtube.com/vi/FeJRYLvxFpk/hqdefault.jpg",
            title: "Video 8 Title"
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
