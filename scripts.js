const fortuneCookie = document.getElementById('fortune-cookie');
const fortuneMessage = document.getElementById('fortune-message');
const messages = [
    "You will find happiness in unexpected places.",
    "Good fortune awaits you.",
    "Your hard work will soon pay off.",
    "Trust your intuition.",
    "A new opportunity is just around the corner.",
    // Add more messages or load them from a text file using fetch API
];

fortuneCookie.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    fortuneMessage.textContent = messages[randomIndex];
    fortuneMessage.classList.remove('hidden');
    fortuneCookie.classList.add('hidden');
});
