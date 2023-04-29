const fortuneCookie = document.getElementById('fortune-cookie');
const fortuneMessage = document.getElementById('fortune-message');
let messages = [];

// Load messages from the text file using fetch API
fetch('messages.txt')
    .then((response) => response.text())
    .then((data) => {
        messages = data.split('\n').filter((msg) => msg.trim() !== '');
    });

const clickSound = new Audio('click-sound.mp3'); // Load the audio file

let fortuneDisplayed = false;

fortuneCookie.addEventListener('click', () => {
    if (fortuneDisplayed) {
        return; // Do nothing if the fortune text has already been displayed
    }

    clickSound.play(); // Play the click sound

    fortuneDisplayed = true; // Set the flag to true once the fortune text is displayed

    fortuneCookie.classList.add('wiggle');
    setTimeout(() => {
        fortuneCookie.style.opacity = '0';
        setTimeout(() => {
            if (messages.length > 0) {
                const randomIndex = Math.floor(Math.random() * messages.length);
                fortuneMessage.textContent = messages[randomIndex];
                fortuneMessage.style.opacity = '1';
            } else {
                console.error('No messages available');
            }
        }, 1000);
    }, 500);
});
