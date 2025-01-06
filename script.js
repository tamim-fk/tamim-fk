
const toggler = document.querySelector(".btn");
toggler.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});


const textElement = document.getElementById('text');
const texts = [
    "Welcome to.....",
    "Fahim Kabir Tamim's World of Creativity!....",
    "Discover My World, One Design at a Time.....",
    "Your Vision, My Mission.....",
    "Enjoy 😘....."
];
let textIndex = 0; // Index of the current text
let charIndex = 0; // Index of the current character
let isDeleting = false;
let speed = 50; // Speed of typing/deleting
let pauseTime = 1000; // Pause time after completing the text

function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
        // Remove a character
        textElement.textContent = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false; // Start typing the next text
            textIndex = (textIndex + 1) % texts.length; // Move to the next text
            setTimeout(type, pauseTime); // Wait before starting to type again
        } else {
            setTimeout(type, speed);
        }
    } else {
        // Add a character
        textElement.textContent = currentText.substring(0, charIndex++);
        if (charIndex === currentText.length) {
            isDeleting = true; // Start deleting
            setTimeout(type, pauseTime); // Wait before starting to delete
        } else {
            setTimeout(type, speed);
        }
    }
}

// Start the typing effect
type();
textElement.classList.add('blink'); // Add blinking effect to the cursor


