const NO_CONTENT_MESSAGE_SELECTOR = '.main-container__display-area__no-content';
const COPY_BUTTON_SELECTOR = '.main-container__display-area__no-content__copy-button';
const DISPLAY_RESULT_SELECTOR = '.main-container__display-area__result';
const TEXTAREA_SELECTOR = '.main-container__input-area__textarea';

const ENCRYPTION_REFERENCES = [
    [/a/g, /e/g, /i/g, /o/g, /u/g],
    ['ai', 'enter', 'imes', 'ober', 'ufat']
];

const DECRYPTION_REFERENCES = [
    [/ufat/g, /ober/g, /imes/g, /enter/g, /ai/g],
    ['u', 'o', 'i', 'e', 'a']
];

// Processa a criptografia/descriptografia do texto inserido pelo usuario
// encryption = true -> criptografa
// encryption = false -> descriptografa
function encryptOrDecrypt(encryption){
    const textArea = getTextArea();
    if (!textArea) return;
    const selector = encryption ? ENCRYPTION_REFERENCES : DECRYPTION_REFERENCES;
    const processedResult = replaceAllExpressions(textArea.value, selector);
    outputProcess(processedResult, textArea);
}

// Processa as etapas exibicao do texto na tela
function outputProcess(result, textAreaContent) {
    showResult(result);
    textAreaContent.value = '';
    setupForMessageDisplay();
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

// Copia o texto da area de exibicao para a area de transferencia
function copy() {
    let textForCopy = document.querySelector(DISPLAY_RESULT_SELECTOR);
    navigator.clipboard.writeText(textForCopy.textContent);
}

function getTextArea() {
    const inputText = document.querySelector(TEXTAREA_SELECTOR);
    if (inputText.value.length == 0){
        showResult('');
        setupForNoContentMessage();
        return null;
    } 
    return inputText;
}

function showResult(result) {
    let displayResult = document.querySelector(DISPLAY_RESULT_SELECTOR);
    displayResult.textContent = result;
}

function setupForMessageDisplay(){
    let noContentDiv = document.querySelector(NO_CONTENT_MESSAGE_SELECTOR);
    noContentDiv.style.display = 'none';
    let resultText = document.querySelector(DISPLAY_RESULT_SELECTOR);
    resultText.style.display = 'initial';
    let copyButton = document.querySelector(COPY_BUTTON_SELECTOR);
    copyButton.style.display = 'initial';
}

function setupForNoContentMessage(){
    let noContentDiv = document.querySelector(NO_CONTENT_MESSAGE_SELECTOR);
    noContentDiv.style.display = 'flex';
    let resultText = document.querySelector(DISPLAY_RESULT_SELECTOR);
    resultText.style.display = 'none';
    let copyButton = document.querySelector(COPY_BUTTON_SELECTOR);
    copyButton.style.display = 'none';
}
