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
    const encrypted = replaceAllExpressions(textToEncrypt.value, ENCRYPTION_REFERENCES);
    outputProcess(encrypted);
}

// Processa a descriptografia do texto inserido pelo usuario
function processDecrypt() {
    const textToDecrypt = getTextAreaContent();
    const decrypted = replaceAllExpressions(textToDecrypt.value, DECRYPTION_REFERENCES);
    outputProcess(decrypted);
}

// Apresenta o resultado da criptografia/descriptografia na tela e aplica estilo na exibicao
function outputProcess(result) {
    let displayResult = document.querySelector(DISPLAY_AREA_SELECTOR);
    displayResult.textContent = result;
    let textAreaContent = getTextAreaContent();
    textAreaContent.value = '';
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
    return document.querySelector(TEXTAREA_SELECTOR);
}
