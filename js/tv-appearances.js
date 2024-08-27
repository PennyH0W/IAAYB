document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.getElementById('gallery');

    // Array of video URLs for TV appearances
    const videos = [
        {
            url: "https://youtu.be/PeGYF8Bc490?si=8Oe1Y_7pAD3j_eBf",
            thumbnail: "https://img.youtube.com/vi/PeGYF8Bc490/hqdefault.jpg",
            title: "CBS Washington DC WUSA Channel 9<br>Great Day Washington!!"
        },
        {
            url: "https://youtu.be/gex8c_U4Wxg?si=y4rjWGb7-R7bKkSn",
            thumbnail: "https://img.youtube.com/vi/gex8c_U4Wxg/hqdefault.jpg",
            title: "ABC TV 28<br>Tampa, Florida WFTS"
        },
        {
            url: "https://youtu.be/G82bRKp3xT0?si=oPHOo2me7sqpGfPj",
            thumbnail: "https://img.youtube.com/vi/G82bRKp3xT0/hqdefault.jpg",
            title: "ABC TV<br>Tuscon, AZ KGUN"
        },
        {
            url: "https://youtu.be/5uWUEvJ-BrM?si=iCGrgnRekIDqxQqh",
            thumbnail: "https://img.youtube.com/vi/5uWUEvJ-BrM/hqdefault.jpg",
            title: "NBC TV<br>Albuquerque, New Mexico"
        },
        {
            url: "https://youtu.be/aH3VB1cnCNY?si=SJGtrOyv38HoVnmm",
            thumbnail: "https://img.youtube.com/vi/aH3VB1cnCNY/hqdefault.jpg",
            title: "NBC TV<br>Baton Rouge, Louisiana WVLA"
        },
        {
            url: "https://youtu.be/zRT79JnJr5Y?si=MTTyU3cjaaN-YliQ",
            thumbnail: "https://img.youtube.com/vi/zRT79JnJr5Y/hqdefault.jpg",
            title: "Fox 5 TV<br>San Diego, California"
        }
    ];

    videos.forEach(video => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-lg-4 col-md-6 mb-4';  // Adjusted to create 2 rows of 3 videos

        const anchorElement = document.createElement('a');
        anchorElement.href = video.url;
        anchorElement.target = "_blank";

        const imgElement = document.createElement('img');
        imgElement.src = video.thumbnail;
        imgElement.className = 'img-fluid gallery-video';
        imgElement.alt = video.title;

        const titleDiv = document.createElement('div');
        titleDiv.className = 'thumbnail-title';
        titleDiv.innerHTML = video.title;  // Use innerHTML to interpret <br> as a line break

        anchorElement.appendChild(imgElement);
        colDiv.appendChild(anchorElement);
        colDiv.appendChild(titleDiv);
        galleryContainer.appendChild(colDiv);
    });
});
