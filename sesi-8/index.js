let passwordLength = document.getElementById('passwordLength');
let password = document.getElementById('password');
let saveButton = document.getElementById('saveButton');

function generatePassword(len) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlpabhet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "0123456789";
    const symbol = "~`!@#$%^&*()_+=-|[]{}';:?></.,"

    const data = lowerAlphabet + upperAlpabhet + numeric + symbol;
    let generator = '';
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)]; 
    }
    return generator;
}

function getPassword() {
    const newPassword = generatePassword(passwordLength.value);
    password.value = newPassword;
    setTimeout(() => {
        alert('password has been generate!');       
    }, 250);
}

function savePassword() {
    document.title = password.value;
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${document.title}`))
    saveButton.setAttribute('download', 'MyPassword.txt');
    setTimeout(() => {
        alert('saved succes!')
    }, 250);
}