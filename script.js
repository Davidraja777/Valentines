const topText = 'Will You Be';
const bottomText = 'My Valentine?';
const yesText = 'Yes';
const noText = 'No';

const topTextElement = document.getElementById('top-text');
const bottomTextElement = document.getElementById('bottom-text');
const yesButtonElement = document.getElementById('yes');
const noButtonElement = document.getElementById('no');

let indexTop = 0;
let indexBottom = 0;
let indexYes = 0;
let indexNo = 0;

function typeTop() {
    if (indexTop < topText.length) {
        topTextElement.innerHTML += topText.charAt(indexTop);
        indexTop++;
        setTimeout(typeTop, 100); // Sets the speed of typing
    } else {
        // Once the top line is finished, start typing the bottom line
        setTimeout(typeBottom, 500); // Wait a bit before starting the bottom line
    }
}

function typeBottom() {
    if (indexBottom < bottomText.length) {
        bottomTextElement.innerHTML += bottomText.charAt(indexBottom);
        indexBottom++;
        setTimeout(typeBottom, 100); // Sets the speed of typing for the bottom line
    } else {
        // Once the bottom line is finished, start typing "Yes" and "No"
        setTimeout(typeYes, 500); // Wait a bit before starting "Yes" and "No"
    }
}

function typeYes() {
    if (indexYes < yesText.length) {
        yesButtonElement.innerHTML += yesText.charAt(indexYes);
        indexYes++;
        setTimeout(typeYes, 100); // Sets the speed of typing for "Yes"
    } else {
        // Once "Yes" is typed out, start typing "No"
        setTimeout(typeNo, 500); // Wait a bit before starting "No"
    }
}

function typeNo() {
    if (indexNo < noText.length) {
        noButtonElement.innerHTML += noText.charAt(indexNo);
        indexNo++;
        setTimeout(typeNo, 100); // Sets the speed of typing for "No"
    }
}

// Start the typing effect for the top line
typeTop();

// Get the "Yes" button element
const yesButton = document.getElementById('yes');

// Function to open index2.html when "Yes" is clicked
function openIndex2() {
    // Specify the path to index2.html
    const index2URL = 'index2.html';

    // Open index2.html in the same window
    window.location.href = index2URL;
}

// Add a click event listener to the "Yes" button to trigger opening index2.html
yesButton.addEventListener('click', openIndex2);

// Get the "No" button element
const noButton = document.getElementById('no');

// Function to open index2.html when "no" is clicked
function openIndex3() {
    // Specify the path to index3.html
    const index3URL = 'index3.html';

    // Open index3.html in the same window
    window.location.href = index3URL;
}

// Add a click event listener to the "no" button to trigger opening index3.html
noButton.addEventListener('click', openIndex3);

