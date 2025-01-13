import { Howl } from 'howler';

const sound = new Howl({
    src: ["cheer.wav"],
    // html5: true
})

// click to hear people cheer for you
function cheerForMe() {
    unlockHowlerAudioContext();
    sound.play();
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cheer").addEventListener("click", cheerForMe);
})


/**
 * Ensures the Web Audio API is unblocked by playing an empty sound.
 * Apparently this is not functional
 */
function unlockHowlerAudioContext() {
    // Check if the Web Audio context exists and is in a suspended state
    if (Howler.ctx && Howler.ctx.state === 'suspended') {
        // Create a short, silent buffer
        const buffer = Howler.ctx.createBuffer(1, 1, 22050); // Mono, 1 frame, 22050Hz sample rate
        const source = Howler.ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(Howler.ctx.destination);

        // Start playing the silent sound to unlock the context
        source.start(0);

        // Resume the audio context
        Howler.ctx.resume().then(() => {
            console.log('Howler.js AudioContext unlocked');
        }).catch(err => {
            console.error('Failed to unlock Howler.js AudioContext:', err);
        });
    }
}
