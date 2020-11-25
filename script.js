const form = document.getElementById('form');
const password1El = document.getElementById('password');
const password2El = document.getElementById('confirm-password');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isvalid = false;
let passwordMatch = false;

function storeFormData(){
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    // do something with user data
    console.log(user);
}

function validateForm(){
    // using contraint api
    isvalid = form.checkValidity();
    // style main message for error
    if (!isvalid){
        message.textContent = 'Please fill out all fields';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return; 
    }
    // check to see if password match
    if (password1El.value === password2El.value){
        passwordMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordMatch = false;
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        message.textContent = 'Make sure passwords match';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    if (isvalid && passwordMatch){
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function processFormDate(e){
    e.preventDefault();
    // validate form
    validateForm();
    // submit data if valid
    if (isvalid && passwordMatch){
        storeFormData();
    }
}

//  Event listener
form.addEventListener('submit', processFormDate);