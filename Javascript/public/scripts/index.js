// Mock movies data
const movies = [
    {
        id: 1,
        title: "Catanic",
        description: "Catanic - Some quick example text to build on the card title and make up the bulk of the card's content.",
        imageUrl: "https://i.pinimg.com/564x/f9/03/31/f9033151848fd1b72b874eaea9a07c26.jpg"
    },
    {
        id: 2,
        title: "The Lord of the Strings",
        description: "The Lord of the Strings - Some quick example text to build on the card title and make up the bulk of the card's content.",
        imageUrl: "https://i.pinimg.com/564x/b4/21/8a/b4218a7f5e5a9f1fe1eed3ae6352ffb4.jpg"
    },
    {
        id: 3,
        title: "Paws",
        description: "Paws - Some quick example text to build on the card title and make up the bulk of the card's content.",
        imageUrl: "https://i.pinimg.com/564x/97/65/78/97657896420dc685f717e897e1a399df.jpg"
    },
    {
        id: 4,
        title: "The Karate Cat",
        description: "The Karate Cat - Some quick example text to build on the card title and make up the bulk of the card's content.",
        imageUrl: "https://i.pinimg.com/564x/70/8a/18/708a18656d9cabd53d020f82fd9f8689.jpg"
    },
    {
        id: 5,
        title: "Good Felines",
        description: "Good Felines - Some quick example text to build on the card title and make up the bulk of the card's content.",
        imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/web05/2012/1/23/18/enhanced-buzz-31124-1327361863-173.jpg?downsize=600:*&output-format=auto&output-quality=auto"
    },
    {
        id: 6,
        title: "Reservoir Cats",
        description: "Reservoir Cats - Some quick example text to build on the card title and make up the bulk of the card's content.",
        imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/web05/2012/1/23/18/enhanced-buzz-13975-1327361902-253.jpg?downsize=600:*&output-format=auto&output-quality=auto"
    },
    {
        id: 7,
        title: "The Pawfessional",
        description: "The Pawfessional - Some quick example text to build on the card title and make up the bulk of the card's content.",
        imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/terminal05/2012/1/23/18/enhanced-buzz-27931-1327361850-80.jpg?downsize=600:*&output-format=auto&output-quality=auto"
    },
    {
        id: 8,
        title: "Black Cat",
        description: "Black Cat - Some quick example text to build on the card title and make up the bulk of the card's content.",
        imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/terminal05/2012/1/23/18/enhanced-buzz-23164-1327361770-212.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto"
    }
];

// A function that displays current date in the Footer
function displayDate() {
    const today = new Date();
    const appFooter = document.getElementById("appFooter");

    if (today.getHours() >= 18) {
        appFooter.classList.add("text-light", "bg-dark");
        appFooter.classList.remove("bg-light");
    }

    document.getElementById("footerText").innerText = `© ${today.getFullYear()} Copyright: Sanina Herak `;
};

// A function that displays a featured movie. This is arrow function syntax
const displayFeaturedMovie = (movieId = null) => {
    let featuredMovie = movies[0];
    if(movieId) {
        featuredMovie = movies.find(x => x.id === movieId)
    }

    // Get the featured movie HTML element and set the background image
    const featuredMovieDiv = document.getElementById("featuredMovie");  
    featuredMovieDiv.style.backgroundImage = `url(${featuredMovie.imageUrl})`;
    featuredMovieDiv.style.backgroundRepeat = "no-repeat";
    featuredMovieDiv.style.backgroundSize = "cover";
    featuredMovieDiv.style.backgroundPosition = "center";

    // Get the featured movie title HTML element and set the title
    const featuredMovieTitle = document.getElementById("featuredMovieTitle");
    featuredMovieTitle.innerText = featuredMovie.title;
  
    // Get the featured movie description HTML element and set the description
    const featuredMovieDesc = document.getElementById("featuredMovieDesc");
    featuredMovieDesc.textContent = featuredMovie.description;
};

const renderMovies = (searchTerm) => {
    let filteredMovies = movies; 
    
    if(searchTerm) {
        filteredMovies = movies.filter(x => x.title.toLowerCase().includes(searchTerm.toLowerCase()) || x.description.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()   ));
    }

    // Get the movies list container HTML element and clear its content
    const moviesList = document.getElementById("moviesContainer");
    moviesList.innerHTML = null;

    // Loop trought movies and create a bootstrap card for each movie
    filteredMovies.forEach( movie => {

        // Create HTML div element and add a bootstrap classes for column
        const columnDiv = document.createElement("div");
        columnDiv.className = "col-12 col-md-6 col-lg-3 mb-3 d-flex justify-content-center";
        /*
            The output of these two lines is the following:
            <div class="col-12 col-md-6 col-lg-3 mb-3 d-flex justify-content-center"> </div>
        */

        columnDiv.addEventListener('click', function(){
            displayFeaturedMovie(movie.id);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, false);

        // Create HTML div element and add bootstrap classes for card
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";
        /*
            The output of these two lines is the following:
            <div class="card"> </div>
        */

        cardDiv.addEventListener('mouseover', function() {
            cardDiv.classList.add('shadow')
        })

        cardDiv.addEventListener('mouseleave', function() {
            cardDiv.classList.remove('shadow')
        })

        // Create HTML img element and add the srouce and bootstrap classes
        const image = document.createElement("img");
        image.className = "card-img-top";
        image.src = movie.imageUrl;
        /*
            The output of these three lines is the following:
            <img src="actualUrlOfTheImage" class="card-img-top"/>
        */

        // Create HTML div element and add bootstrap classes for card body
        const cardBodyDiv = document.createElement("div");
        cardBodyDiv.className = "card-body";
        /*
            The output of these two lines is the following:
            <div class="card-body"> </div>
        */

        // Create HTML h5 element and add bootstrap classes for card title
        const cardTitleDiv = document.createElement("h5");
        cardTitleDiv.className = "card-title";
        cardTitleDiv.innerText = movie.title;
        /*
            The output of these three lines is the following:
            <h5 class="card-title"> </h5>
        */

        // Create HTML p element and add bootstrap classes for card text
        const cardDescDiv = document.createElement("p");
        cardDescDiv.className = "card-text";
        cardDescDiv.innerText = movie.description;
        /*
            The output of these three lines is the following:
            <p class="card-text"> </p>
        */

        // Append elements to achieve the bootstrap structure
        cardBodyDiv.appendChild(cardTitleDiv);
        /*
            Result:
            <div class="card-body">
                <h5 class="card-title"> </h5>
            </div>
        */

        cardBodyDiv.appendChild(cardDescDiv);
        /*
            Result:
            <div class="card-body">
                <h5 class="card-title"> </h5>
                <p class="card-text"> </p>
            </div>
        */

        cardDiv.appendChild(image);
        /*
            Result:
            <div class="card">
                <img src="actualUrlOfTheImage" class="card-img-top"/>
            </div>
        */

        cardDiv.appendChild(cardBodyDiv);
        /*
            Result:
            <div class="card">
                <img src="actualUrlOfTheImage" class="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title"> </h5>
                    <p class="card-text"> </p>
                </div>
            </div>
        */

        columnDiv.appendChild(cardDiv);
        /*
            Result:
            <div class="col-12 col-md-6 col-lg-3 mb-3 d-flex justify-content-center">
                <div class="card">
                    <img src="actualUrlOfTheImage" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title"> </h5>
                        <p class="card-text"> </p>
                    </div>
                </div>
            </div>
        */

        // Use the movies container HTML element and append column to it
        moviesList.appendChild(columnDiv);
        /*
            Result:
            <div id="moviesContainer" class="row py-5">
                <div class="col-12 col-md-6 col-lg-3 mb-3 d-flex justify-content-center">
                    <div class="card">
                        <img src="actualUrlOfTheImage" class="card-img-top"/>
                        <div class="card-body">
                            <h5 class="card-title"> </h5>
                            <p class="card-text"> </p>
                        </div>
                    </div>
                </div>
            </div>
        */
    })
}

const searchMovies = () => {
    const searchBoxText = document.getElementById('searchMoviesInput').value;
    renderMovies(searchBoxText);
}

// Function calls
displayDate();
displayFeaturedMovie();
renderMovies();

