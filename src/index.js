import './style/style.css';
import navigation from './navigation';
import homePage from './home';
import recipePage from './recipe';
import contactPage from './contact';

const contentDiv = document.querySelector('#content');
const navs = navigation.querySelectorAll('a');

contentDiv.appendChild(navigation);
contentDiv.appendChild(homePage);

for (const element of navs) {
    element.addEventListener('click',(a) => {
        contentDiv.innerHTML = "";
        contentDiv.appendChild(navigation);
        switch(a.target.id){
            case 'home': contentDiv.appendChild(homePage);
            break;
            case 'recipe': contentDiv.appendChild(recipePage);
            break;
            case 'contact': contentDiv.appendChild(contactPage);
            break;
        }
    });
}