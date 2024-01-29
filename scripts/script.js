

function encrypt(){
    let textToEncrypt = document.querySelector('.main-container__input-area__textarea');
    let displayResult = document.querySelector('.main-container__display-area__result');
    displayResult.innerHTML = textToEncrypt.value;
    textToEncrypt.value = '';
}

function decrypt(){

}