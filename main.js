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
// const myMenuPageModule = (()=>{
//     const content = document.querySelector('#content')
//     const menuPage = document.createElement("div");
//     menuPage.setAttribute('class', "menu-page")
//     content.appendChild(menuPage)
//     menuPage.innerHTML = 
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
//         gagaga
//     </div>
//     <div class="image-container">
//         <!-- <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thespruceeats.com%2Fthmb%2FPW-viXRoEaJC4tsVLjq45M-GBlw%3D%2F3865x2576%2Ffilters%3Afill(auto%2C1)%2Fstill-life-fresh--organic--healthy-vegetable-harvest-variety-in-wood-crate-742168705-5b117e71a9d4f90038e704b0.jpg&f=1&nofb=1"> -->
//     </div>
// </article>
// <footer class="footer-container">
//     <p>Website created by <a href="https://github.com/norfkorean">Ji Park</a></p>
// </footer>`;
// })();

//CONTACT PAGE
const myContactPageModule = (()=>{
    const content = document.querySelector('#content')
    const contactPage = document.createElement("div");
    contactPage.setAttribute('class', "contact-page")
    content.appendChild(contactPage)
    contactPage.innerHTML = 
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
    <form class="form-container" action="#" method="get">
        <legend>LEAVE US YOUR MESSAGE HERE</legend>
        <label for="firstname">FIRST NAME:</label>
            <input type="text" name="firstname" placeholder="first name" required></input>
        <label for="lastname">LAST NAME:</label>
            <input type="text" name="lastname" placeholder="last name" required></input>
        <label for="phonenumber">PHONE NUMBER:</label>
            <input type="number" name="phonenumber" placeholder="phone number" required></input>
        <label for="email">PHONE NUMBER:</label>
            <input type="email" name="email" placeholder="email" required></input>
        <label for="commentbox">YOUR MESSAGE HERE:</label>
            <textarea class="comment-box" name="commentbox" placeholder="your message here..." rows="10" cols="50"></textarea>
    </form>
</article>
<footer class="footer-container">
    <p>Website created by <a href="https://github.com/norfkorean">Ji Park</a></p>
</footer>`;
})();

