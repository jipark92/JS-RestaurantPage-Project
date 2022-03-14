//HOME PAGE
// const myHomePageModule =(()=>{
//     const content = document.querySelector('#content')
//     const homePage = document.createElement("div");
//     homePage.setAttribute('class', "home-page")
//     content.appendChild(homePage)
//     homePage.innerHTML = 
// `<header class="header-container">  
//     <nav class="navbar">
//         <ul class="tabs">
//             <li class="home-page">HOME</li>
//             <li class="menu-page">MENU</li>
//             <li class="contact-page">CONTACT</li>
//         </ul>
//     </nav>
// </header>
// <article class="information-container">
//     <div class="welcome-container">
//         <h1>Welcome to Plants and Teas</h1>
//         <p>Eat Healthy and Natural Food</p>
//         <button>DISCOVER MENU</button>
//     </div>
//     <div class="image-container">
//         <!-- <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thespruceeats.com%2Fthmb%2FPW-viXRoEaJC4tsVLjq45M-GBlw%3D%2F3865x2576%2Ffilters%3Afill(auto%2C1)%2Fstill-life-fresh--organic--healthy-vegetable-harvest-variety-in-wood-crate-742168705-5b117e71a9d4f90038e704b0.jpg&f=1&nofb=1"> -->
//     </div>
// </article>
// <footer class="footer-container">
//     <p>Website created by <a href="https://github.com/norfkorean">Ji Park</a></p>
// </footer>`;
// })();

//MENU PAGE
const myMenuPageModule = (()=>{
    const content = document.querySelector('#content')
    const menuPage = document.createElement("div");
    menuPage.setAttribute('class', "menu-page")
    content.appendChild(menuPage)
    menuPage.innerHTML = 
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
<div class="menu-container">
    <div class="item">
        <div class="background"></div>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ippinka.com%2Fwp-content%2Fuploads%2F2020%2F10%2FOrganic-Uji-Matcha-02.jpg&f=1&nofb=1">
        <br>
        <p>UJI MATCH</p>
        <p>$6.00</p>
        <br>
        <p>HOT / COLD</p>
        <br>
        <p>Traditional Japanese Matcha green tea served as an espresso</p>
    </div>
    <div class="item">
        <div class="background"></div>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nikonekomatcha.com%2Fwp-content%2Fuploads%2F2021%2F07%2FMatcha-cream-cheese-latte-1.jpg&f=1&nofb=1">
        <p>MATCHA CREAM LATTE</p>
        <p>$6.00</p>
        <br>
        <p>HOT / COLD</p>
        <br>
        <p>Matcha latte topped with whipped cream</p>
    </div>
    <div class="item">
        <div class="background"></div>
        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.rubysnextbestthing.com%2Fwp-content%2Fuploads%2F2018%2F06%2FFDDF0E82-4780-4A94-BB6E-318E455268F5.jpeg&f=1&nofb=1">
        <p>MATCHA CHOCOLATE LATTE</p>
        <p>$8.00</p>
        <br>
        <p>HOT / COLD</p>
        <br>
        <p>Matcha latte topped with whipped cream & chocolate sauce</p>
    </div>
    <div class="item">
        <div class="background"></div>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frachaelsgoodeats.com%2Fwp-content%2Fuploads%2F2018%2F01%2FIMG_0079.jpg&f=1&nofb=1">
        <p>MATCHA LATTE</p>
        <p>$8.00</p>
        <br>
        <p>HOT / COLD</p>
        <br>
        <p>Matcha green tea with milk and sugar. Hot one is served without sugar</p>
    </div>
    <div class="item">
        <div class="background"></div>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.staticflickr.com%2F5128%2F5345267587_6c7432cb59_z.jpg&f=1&nofb=1">
        <p>MATCHA KUROMITSU LATTE // $10.00</p>
        <br>
        <p>HOT / COLD</p>
        <br>
        <p>Matcha latte topped with whipped cream & drizzle of caramelled brown sugar syrup</p>
    </div>
    <div class="item">
        <div class="background"></div>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.berkeleyside.org%2Fwp-content%2Fuploads%2F2019%2F06%2FIshita-Shiratama-Matcha-Story.jpg&f=1&nofb=1">
        <p>MATCH AZUKI SHIRATAMA LATTE</p>
        <p>$10.00</p>
        <br>
        <p>HOT / COLD</p>
        <br>
        <p>Matcha latte topped with red bean paste and garnished with Mochi & whipped cream</p>
    </div> 
</div>
</article>
<footer class="footer-container">
<p>Website created by <a href="https://github.com/norfkorean">Ji Park</a></p>
</footer>`;
})();

//CONTACT PAGE
// const myContactPageModule = (()=>{
//     const content = document.querySelector('#content')
//     const contactPage = document.createElement("div");
//     contactPage.setAttribute('class', "contact-page")
//     content.appendChild(contactPage)
//     contactPage.innerHTML = 
// `<header class="header-container">  
//     <nav class="navbar">
//         <ul class="tabs">
//             <li class="home-page">HOME</li>
//             <li class="menu-page">MENU</li>
//             <li class="contact-page">CONTACT</li>
//         </ul>
//     </nav>
// </header>
// <article class="information-container">
//     <form class="form-container" action="#" method="get">
//         <legend>LEAVE US YOUR MESSAGE HERE</legend>
//         <label for="firstname">FIRST NAME:</label>
//             <input type="text" name="firstname" placeholder="first name" required></input>
//         <label for="lastname">LAST NAME:</label>
//             <input type="text" name="lastname" placeholder="last name" required></input>
//         <label for="phonenumber">PHONE NUMBER:</label>
//             <input type="number" name="phonenumber" placeholder="phone number" required></input>
//         <label for="email">PHONE NUMBER:</label>
//             <input type="email" name="email" placeholder="email" required></input>
//         <label for="commentbox">YOUR MESSAGE HERE:</label>
//             <textarea class="comment-box" name="commentbox" placeholder="your message here..." rows="10" cols="50"></textarea>
//     </form>
// </article>
// <footer class="footer-container">
//     <p>Website created by <a href="https://github.com/norfkorean">Ji Park</a></p>
// </footer>`;
// })();

