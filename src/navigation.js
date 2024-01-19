function navigationBar(){
    var nav = document.createElement('nav');
    nav.id = "navbar";

    var homeBtn = document.createElement('a');
    homeBtn.textContent = "Home";
    homeBtn.href = "home";
    homeBtn.classList.add('nav-btn');
    nav.appendChild(homeBtn);

    var recipeBtn = document.createElement('a');
    recipeBtn.textContent = "Recipe";
    recipeBtn.href = "recipe";
    recipeBtn.classList.add('recipe-btn');
    nav.appendChild(recipeBtn);

    var contactBtn = document.createElement('a');
    contactBtn.textContent = "Contact";
    contactBtn.href = "contact";
    contactBtn.classList.add('contact-btn');
    nav.appendChild(contactBtn);

    return nav;
}
export default navigationBar();