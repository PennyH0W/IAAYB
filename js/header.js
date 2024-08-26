document.getElementById('header').innerHTML = `
    <div class="header-container">
        <div class="brand-logo">
            <img src="../images/IAAYB-logo-2.png" alt="It's All About<br>Your Belly Logo">
            <span>It's All About Your Belly</span>
        </div>
        <button class="navbar-toggler" type="button" id="navbar-toggler">
            &#9776; <!-- This is the hamburger icon -->
        </button>
        <ul class="nav-list" id="nav-list">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="classes.html">Classes</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </div>
`;

document.getElementById('navbar-toggler').addEventListener('click', function() {
    var navList = document.getElementById('nav-list');
    navList.classList.toggle('show');
});
