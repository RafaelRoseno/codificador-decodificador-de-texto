const NO_CONTENT_MESSAGE_SELECTOR = '.main-container__display-area__no-content';
const DISPLAY_AREA_SELECTOR = '.main-container__display-area__result';
const TEXTAREA_SELECTOR = '.main-container__input-area__textarea';

const ENCRYPTION_REFERENCES = [
    [/a/g, /e/g, /i/g, /o/g, /u/g],
    ['ai', 'enter', 'imes', 'ober', 'ufat']
];

const DECRYPTION_REFERENCES = [
    [/ufat/g, /ober/g, /imes/g, /enter/g, /ai/g],
    ['u', 'o', 'i', 'e', 'a']
];

// Processa a criptografia do texto inserido pelo usuario
function processEncrypt(){
    const textToEncrypt = getTextAreaContent();
    if (!textToEncrypt) return;
    const encrypted = replaceAllExpressions(textToEncrypt.value, ENCRYPTION_REFERENCES);
    outputProcess(encrypted, textToEncrypt);
}

// Processa a descriptografia do texto inserido pelo usuario
function processDecrypt() {
    const textToDecrypt = getTextAreaContent();
    if (!textToDecrypt) return;
    const decrypted = replaceAllExpressions(textToDecrypt.value, DECRYPTION_REFERENCES);
    outputProcess(decrypted, textToDecrypt);
}

// Apresenta o resultado da criptografia/descriptografia na tela com certa alteracao de estilo na exibicao
function outputProcess(result, textAreaContent) {
    showResult(result);
    textAreaContent.value = '';
    hideNoContentMessage();
}

// Itera uma lista de expressoes regulares e substitui seu valor em uma string
function replaceAllExpressions(text, expressionList){
    for (let column=0; column<expressionList[0].length; column++){
        let expression = expressionList[0][column];
        let value = expressionList[1][column];
        text = text.replace(expression, value);
    }
    return text;
}

function getTextAreaContent() {
    const inputText = document.querySelector(TEXTAREA_SELECTOR);
    if (inputText.value.length == 0){
        showResult('');
        showNoContentMessage();
        return null;
    } 
    return inputText;
}

function showResult(result) {
    let displayResult = document.querySelector(DISPLAY_AREA_SELECTOR);
    displayResult.textContent = result;
}

function hideNoContentMessage(){
    let noContentDiv = document.querySelector(NO_CONTENT_MESSAGE_SELECTOR);
    noContentDiv.style.visibility = 'hidden';
}

function showNoContentMessage(){
    let noContentDiv = document.querySelector(NO_CONTENT_MESSAGE_SELECTOR);
    noContentDiv.style.visibility = 'visible';
}
