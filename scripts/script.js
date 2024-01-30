var encryptReferences = [
    [/a/g, /e/g, /i/g, /o/g, /u/g],
    ['ai', 'enter', 'imes', 'ober', 'ufat']
];

function processEncrypt(){
    let textToEncrypt = document.querySelector('.main-container__input-area__textarea');
    let displayResult = document.querySelector('.main-container__display-area__result');
    displayResult.innerHTML = encrypt(textToEncrypt.value);
    textToEncrypt.value = '';
}

function encrypt(textToEncrypt){
    for (let column=0; column<encryptReferences[0].length; column++){
        let expression = encryptReferences[0][column];
        let value = encryptReferences[1][column];
        textToEncrypt = textToEncrypt.replace(expression, value);
    }
    return textToEncrypt;
}

function decrypt(){

}
