import { Howl } from 'howler';

const sound = new Howl({
    src: ["cheer.wav"],
    // html5: true
})

// click to hear people cheer for you
function cheerForMe() {
    playEmptySound();
    sound.play();
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cheer").addEventListener("click", cheerForMe);
})


/**
 * Ensures the Web Audio API is unblocked by playing an empty sound.
 */
function playEmptySound() {
    // Create an audio context to check if it's already unlocked
    const audioContext = Howler.ctx || new (window.AudioContext || window.webkitAudioContext)();

    if (audioContext.state === "suspended") {
        const audio = new Audio(); 
        audio.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAIlYAAESsAAACABAAZGF0YQAAAAA="; // Empty WAV file
        audio.play().catch(() => {
            console.error("Failed to play empty sound. User interaction is required.");
        });
    } else {
        console.log("Audio context is already unlocked.");
    }
}
