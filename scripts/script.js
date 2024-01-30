const encryptReferences = [
    [/a/g, /e/g, /i/g, /o/g, /u/g],
    ['ai', 'enter', 'imes', 'ober', 'ufat']
];

const decryptReferences = [
    [/ufat/g, /ober/g, /imes/g, /enter/g, /ai/g],
    ['u', 'o', 'i', 'e', 'a']
];

function processEncrypt(){
    const textToEncrypt = getTextAreaInput();
    const encrypted = replaceAllExpressions(textToEncrypt.value, encryptReferences);
    outputProcess(encrypted);
}

function processDecrypt() {
    const textToDecrypt = getTextAreaInput();
    const decrypted = replaceAllExpressions(textToDecrypt.value, decryptReferences);
    outputProcess(decrypted);
}

function outputProcess(result) {
    let displayResult = document.querySelector('.main-container__display-area__result');
    displayResult.textContent = result;
    textAreaContent = getTextAreaInput();
    textAreaContent.value = '';
}

function replaceAllExpressions(text, expressionList){
    for (let column=0; column<expressionList[0].length; column++){
        let expression = expressionList[0][column];
        let value = expressionList[1][column];
        text = text.replace(expression, value);
    }
    return text;
}

function getTextAreaInput() {
    return document.querySelector('.main-container__input-area__textarea');
}
