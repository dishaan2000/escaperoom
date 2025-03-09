const correctText = "jessie er helten";
const successGifUrl = "Tillykke.png";
const failureGifUrl = "wopwop.png";

function checkText() {
    const input = document.getElementById('secretInput').value.toLowerCase();
    const gifContainer = document.getElementById('gif-container');
    const resultGif = document.getElementById('resultGif');
    const inputSection = document.getElementById('input-section');
    const successSection = document.getElementById('success-section');

    // Remove any existing animation classes
    gifContainer.classList.remove('slide-in');
    gifContainer.classList.remove('hidden');

    // Force reflow
    void gifContainer.offsetWidth;

    if (input === correctText) {
        resultGif.src = successGifUrl;
        gifContainer.classList.add('slide-in');
        
        // Show success section after animation
        setTimeout(() => {
            inputSection.classList.add('hidden');
            successSection.classList.remove('hidden');
            successSection.classList.add('slide-in');
        }, 2000);
    } else {
        resultGif.src = failureGifUrl;
        gifContainer.classList.add('slide-in');
        
        // Reset after animation
        setTimeout(() => {
            gifContainer.classList.add('hidden');
            document.getElementById('secretInput').value = '';
        }, 2000);
    }
} 