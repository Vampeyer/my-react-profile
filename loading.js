document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingSpinner = document.getElementById('loading-spinner');
    const loadingText = document.getElementById('loading-text');
    const content = document.getElementById('content');
loadingText.style.color = "black"
    // Simulate loading process (replace with your actual loading logic)
    setTimeout(() => {
        // Change the text to "Loaded"
        loadingText.textContent = 'Loaded';

        // Optionally, you can hide the spinner as well
        // loadingSpinner.style.display = 'none';

        // After a short delay, hide the loading screen and show the content
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            content.style.display = 'block';
                     loadingScreen.style.color = "black"
        },500 ); // Adjust the delay before showing content if needed

    }, 750); // Simulate 2 seconds of loading
});