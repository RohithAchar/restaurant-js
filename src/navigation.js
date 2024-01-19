function navigationBar(){
    var nav = document.createElement('nav');
    nav.id = "navbar";

    var homeBtn = document.createElement('a');
    homeBtn.textContent = "Home";
    homeBtn.id = 'home';
    homeBtn.href = "#";
    homeBtn.classList.add('nav-btn');
    homeBtn.classList.add('active');
    nav.appendChild(homeBtn);

    var recipeBtn = document.createElement('a');
    recipeBtn.textContent = "Recipe";
    recipeBtn.id = 'recipe';
    recipeBtn.href = "#";
    recipeBtn.classList.add('nav-btn');
    nav.appendChild(recipeBtn);

    var contactBtn = document.createElement('a');
    contactBtn.textContent = "Contact";
    contactBtn.id = 'contact';
    contactBtn.href = "#";
    contactBtn.classList.add('nav-btn');
    nav.appendChild(contactBtn);

    return nav;
}
export default navigationBar();