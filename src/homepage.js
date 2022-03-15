//HOME PAGE
const myHomePageModule =(()=>{
    const content = document.querySelector('#content');
    const homePage = document.createElement("div");
    homePage.setAttribute('class', "home-page");
    content.appendChild(homePage);
    homePage.innerHTML = 
    `
    <header class="header-container">  
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
            <p>Eat Healthy and Natural Drinks</p>
            <button class="discover-menu">DISCOVER MENU</button>
        </div>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.drweil.com%2Fwp-content%2Fuploads%2F2016%2F12%2Fdiet-nutrition_nutrition_discover-matcha-tea_2716x1810_000055981922.jpg&f=1&nofb=1">
    </article>
    <footer class="footer-container">
        <p>Website created by <a href="https://github.com/norfkorean">Ji Park</a></p>
    </footer>
    `;

    const discoverMenuButton = document.querySelector('.discover-menu');
    discoverMenuButton.addEventListener('click',()=>{
        console.log('discover menu click');
        homePage.remove();
        myMenuPageModule();
    });
    
    const menuButton = document.querySelector('.menu-page');
    menuButton.addEventListener('click', (e)=>{
        e.stopPropagation;
        console.log('menu click');
        homePage.remove();
        myMenuPageModule();
    });

    const contactButton = document.querySelector('.contact-page');
    contactButton.addEventListener('click',(e)=>{
        e.stopPropagation;
        console.log('contact click');
        homePage.remove();
        myContactPageModule();
    });

return homePage;
});