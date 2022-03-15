//CONTACT PAGE
const myContactPageModule = (()=>{
    const content = document.querySelector('#content');
    const contactPage = document.createElement("div");
    contactPage.setAttribute('class', "contact-page");
    content.appendChild(contactPage);
    contactPage.innerHTML = 
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
        <form class="form-container" action="" method="get">
            <legend>LEAVE US YOUR MESSAGE HERE</legend>
            <label for="firstname">FIRST NAME:</label>
                <input type="text" name="firstname" placeholder="first name" required></input>
            <label for="lastname">LAST NAME:</label>
                <input type="text" name="lastname" placeholder="last name" required></input>
            <label for="phonenumber">PHONE NUMBER:</label>
                <input type="number" name="phonenumber" placeholder="phone number" required></input>
            <label for="email">EMAIL:</label>
                <input type="email" name="email" placeholder="email" required></input>
            <label for="commentbox">YOUR MESSAGE HERE:</label>
                <textarea class="comment-box" name="commentbox" placeholder="your message here..." rows="10" cols="50"></textarea>
            <button type="submit">Submit</button>

        </form>
    </article>
    <footer class="footer-container">
        <p>Website created by <a href="https://github.com/norfkorean">Ji Park</a></p>
    </footer>
    `;

    const homeButton = document.querySelector('.home-page');
    homeButton.addEventListener('click',(e)=>{
        e.stopPropagation;
        console.log('home click');
        contactPage.remove();
        myHomePageModule();
    });

    const menuButton = document.querySelector('.menu-page');
    menuButton.addEventListener('click', (e)=>{
        e.stopPropagation;
        console.log('menu click');
        contactPage.remove();
        myMenuPageModule();
    });

return contactPage;
});