function getInputFieldById(inputId) {
    const inputField = document.getElementById(inputId)
    const inputFieldString = inputField.value
    const inputFieldValue = parseFloat(inputFieldString)
    inputField.value = '';
    return inputFieldValue;

}

function getTextElementById(elementId) {
    const textElementField = document.getElementById(elementId)
    const textElementString = textElementField.innerText
    const textElementValue = parseFloat(textElementString)
    return textElementValue;
}

function getTotalValue(elementId, newValue) {
    const textElement = document.getElementById(elementId)
    textElement.innerText = newValue;
}