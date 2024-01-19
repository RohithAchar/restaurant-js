import heroImage from './assets/hero.jpg';
function homePage(){
    var homeWrapper = document.createElement('div');
    homeWrapper.classList.add('wrapper');
    homeWrapper.classList.add('home-wrapper');

    var heading = document.createElement('h1');
    heading.textContent = "The Sunday Bite";
    var subHeading = document.createElement('p');
    subHeading.textContent = 'Delicious food for every mood';
    var image = document.createElement('img');
    image.src = heroImage;
    
    homeWrapper.appendChild(heading);
    homeWrapper.appendChild(subHeading);
    homeWrapper.appendChild(image);
    return homeWrapper;
}
export default homePage();