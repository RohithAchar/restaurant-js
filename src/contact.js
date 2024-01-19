function contactPage(){
    var contactWrapper = document.createElement('div');
    contactWrapper.classList.add('wrapper');

    var heading = document.createElement('h1');
    heading.textContent = 'Swing by soon !';
    var name = document.createElement('h3');
    name.textContent = 'The Sunday Bite';
    var address = document.createElement('p');
    address.textContent = '123 Anywhere St., Any City, State, Country 12345';
    var email = document.createElement('h3');
    email.textContent = 'Email Address';
    var mail = document.createElement('p');
    mail.textContent = 'hello@reallygreatsite.com';
    var phone = document.createElement('h3');
    phone.textContent = 'Phone Number';
    var number = document.createElement('p');
    number.textContent = '(123) 456 7890';

    contactWrapper.appendChild(heading);
    contactWrapper.appendChild(name);
    contactWrapper.appendChild(address);
    contactWrapper.appendChild(email);
    contactWrapper.appendChild(mail);
    contactWrapper.appendChild(phone);
    contactWrapper.appendChild(number);

    return contactWrapper;
}
export default contactPage();