var UTF16codesReference = [
    79, //O
    111,//o
];

function processEncrypt(){
    let textToEncrypt = document.querySelector('.main-container__input-area__textarea');
    let charCodes = getUTF16codesFromString(textToEncrypt.value);
    let encrypted = encrypt(charCodes);

    let displayResult = document.querySelector('.main-container__display-area__result');
    displayResult.innerHTML = getStringFromUTF16code(encrypted);
    textToEncrypt.value = '';

}

function encrypt(charCodes){
    Array.from(UTF16codesReference).forEach(function(code){
        do {
            var indexOf = charCodes.findIndex(function(value){
                return (value == code);
            });
            if (indexOf != -1) charCodes.splice(indexOf, 1, 72);
            
        } while (indexOf != -1);
    });
    return charCodes;
}

function decrypt(){

}

function getUTF16codesFromString(string){
    let charCodes = [];
    Array.from(string).forEach(function(character){
        charCodes.push(character.charCodeAt());
    });
    console.log(`getUTF16codesFromString -  ${charCodes}`);
    return charCodes;
}

function getStringFromUTF16code(charCodes){
    let string = '';
    Array.from(charCodes).forEach(function(code){
        string = string.concat(String.fromCharCode(code));
    });
    return string;
}