const nameInput = document.querySelector('#input-name');
const numberInput = document.querySelector('#input-number');
const cancelButton = document.querySelector('#btn-clear');
const addButton = document.querySelector('#btn-add');
const totalButton = document.querySelector('#btn-total');
const contactList = document.querySelector('#contact-list');
const totalContactOutput = document.querySelector('#total-contact');
const alertInputControl = document.querySelector('ion-alert-controller');

let myTotalContacts = 0;

const clear =() => {
    nameInput.value = '';
    numberInput.value = '';
};

cancelButton.addEventListener('click', clear);

addButton.addEventListener('click', () => {
    console.log("Contact added!");
    const nameEntered = nameInput.value;
    const numberEntered = numberInput.value;
    
    if (nameEntered.trim().length <= 0 || numberEntered <= 0 ||
        numberEntered.trim().length <= 0){
            alert("Please input Contact name and Contact number!")
           
            return;
        }    
        const newContact = document.createElement('ion-item');
        newContact.textContent = nameEntered + ': ' + numberEntered;
        contactList.appendChild(newContact);

        myTotalContacts ++;
        console.log(nameEntered, numberEntered);
        totalContactOutput.textContent = myTotalContacts;
        clear();
});
