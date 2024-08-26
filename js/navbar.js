document.getElementById('navbar').innerHTML = `
 <nav class="navbar navbar-expand-md navbar-light bg-white">

    <div class="container">
        <!-- Brand Logo Positioned on the Left -->
        <a class="navbar-brand brand-logo" href="index.html">
            <img src="images/IAAYB-logo-2.png" alt="images/IAAYB-logo-2" width="40" height="40"> It's All About<br>Your Belly
        </a>

        <!-- Navbar Toggler Button for the Hambugrer Icon -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navigation Items Positioned on the Right -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">

                <li class="nav-item">
                <a class="nav-link active" href="index.html">Home</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About
                </a>
                <ul class="dropdown-menu" aria-labelledby="aboutDropdown">
                    <li><a class="dropdown-item" href="overview.html">Overview</a></li>
                    <li><a class="dropdown-item" href="benefits.html">Benefits</a></li>
                    <li><a class="dropdown-item" href="testimonials.html">Testimonials</a></li>
                </ul>
                </li>

            <li class="nav-item">
                <a class="nav-link" href="classes.html">Classes</a>
            </li>

                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="galleryDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Gallery
                </a>
                <ul class="dropdown-menu" aria-labelledby="galleryDropdown">
                <li><a class="dropdown-item" href="featured.html">Featured</a></li>
                <li><a class="dropdown-item" href="fantasy-fest.html">Fanatsy Fest</a></li>
                <li><a class="dropdown-item" href="performances-pg-1.html">Performances</a></li>
                </ul>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="zoom.html">Zoom</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
            </li>
            </ul>
        </div>
    </div>
  </nav>
`;
