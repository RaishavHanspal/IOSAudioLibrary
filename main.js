import { Howl } from 'howler';

const sound = new Howl({
    src: ["cheer.wav"],
    // html5: true
})

// click to hear people cheer for you
function cheerForMe() {
    unlockHowlerAudio();
    sound.play();
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cheer").addEventListener("click", cheerForMe);
})


/**
 * Ensures the Web Audio API is unblocked by playing an empty sound.
 */
function unlockHowlerAudio() {
    const audioContext = Howler.ctx;

    if (audioContext && audioContext.state === "suspended") {
        audioContext.resume().then(() => {
            console.log("Howler audio context unlocked!");
        }).catch(() => {
            console.error("Failed to unlock Howler audio context. User interaction required.");
        });
    } else {
        console.log("Howler audio context is already unlocked or not available.");
    }
}