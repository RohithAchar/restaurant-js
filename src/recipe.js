import burgerImg from './assets/burger.jpg';
import wingsImg from './assets/wings.jpg';
import orange_juiceImg from './assets/burger.jpg';

function recipePage(){
    var recipeWrapper = document.createElement('div');
    recipeWrapper.classList.add('wrapper');

    var heading = document.createElement('h2');
    heading.textContent = 'On the menu'
    
    var cardsWrapper = document.createElement('div');
    cardsWrapper.classList.add('cards-wrapper');

    cardsWrapper.appendChild(createCard(
        burgerImg,
        'Gourmet Burgers',
        'Packed with flavour and cooked to perfection.'
        ));
    cardsWrapper.appendChild(createCard(
        wingsImg,
        'Chicken Wings',
        'Paired with dipping sauces that are too good to pass up.'
        ));
    cardsWrapper.appendChild(createCard(
        orange_juiceImg,
        'Thirst Quenchers',
        'Choose from classic blends and unique concoctions.'
        )); 

    recipeWrapper.appendChild(heading);
    recipeWrapper.appendChild(cardsWrapper);
    return recipeWrapper;
}
function createCard(source,name,about){
    var card = document.createElement('div');
    card.classList.add('card');

    var image = document.createElement('img');
    image.src = source;
    var recipeName = document.createElement('h3');
    recipeName.textContent = name;
    var aboutRecipe = document.createElement('p');
    aboutRecipe.textContent = about;

    card.appendChild(image);
    card.appendChild(recipeName);
    card.appendChild(aboutRecipe);

    return card;
}
export default recipePage();