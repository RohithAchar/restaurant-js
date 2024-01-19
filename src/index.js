import './style/style.css';
import navigation from './navigation';
import home from './home';
import recipes from './recipe';
import contact from './contact';

const contentDiv = document.querySelector('#content');
contentDiv.appendChild(navigation);
contentDiv.appendChild(contact);