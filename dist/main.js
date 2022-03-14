const myHomePageModule =(()=>{

    const content = document.querySelector('#content')
    const homePage = document.createElement("div");
    
    homePage.setAttribute('class', "home-page")
    content.appendChild(homePage)
    
    homePage.innerHTML = 
    `<header class="header-container">  
    <nav class="navbar">
        <ul class="tabs">
            <li class="home-page">HOME</li>
            <li class="menu-page">MENU</li>
            <li class="contact-page">CONTACT</li>
        </ul>
    </nav>
</header>

<article class="information-container">
    <div class="welcome-container">
        <h1>Welcome to Plants and Teas</h1>
        <p>Eat Healthy and Natural Food</p>
        <button>DISCOVER MENU</button>
    </div>

    <div class="image-container">
        <!-- <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thespruceeats.com%2Fthmb%2FPW-viXRoEaJC4tsVLjq45M-GBlw%3D%2F3865x2576%2Ffilters%3Afill(auto%2C1)%2Fstill-life-fresh--organic--healthy-vegetable-harvest-variety-in-wood-crate-742168705-5b117e71a9d4f90038e704b0.jpg&f=1&nofb=1"> -->
    </div>
</article>

<footer class="footer-container">
    <p>Website created by <a href="https://github.com/norfkorean">Ji Park</a></p>
</footer>`
    ;
    
})();
