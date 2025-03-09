const correctText = "jessie er helten";
const successGifUrl = "Tillykke.png";
const failureGifUrl = "wopwop.png";

function checkText() {
    const input = document.getElementById('secretInput').value.toLowerCase();
    const gifContainer = document.getElementById('gif-container');
    const successGif = document.getElementById('successGif');
    const failureGif = document.getElementById('failureGif');
    const inputSection = document.getElementById('input-section');
    const successSection = document.getElementById('success-section');

    // Remove any existing animation classes and show container
    gifContainer.classList.remove('slide-in');
    gifContainer.classList.remove('hidden');

    // Hide both gifs initially
    successGif.classList.add('hidden');
    failureGif.classList.add('hidden');

    // Force reflow
    void gifContainer.offsetWidth;

    if (input === correctText) {
        successGif.classList.remove('hidden');
        gifContainer.classList.add('slide-in');
        
        // Show success section after animation
        setTimeout(() => {
            inputSection.classList.add('hidden');
            successSection.classList.remove('hidden');
            successSection.classList.add('slide-in');
        }, 2000);
    } else {
        failureGif.classList.remove('hidden');
        gifContainer.classList.add('slide-in');
        
        // Reset after animation
        setTimeout(() => {
            gifContainer.classList.add('hidden');
            document.getElementById('secretInput').value = '';
        }, 2000);
    }
} 