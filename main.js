import { Howl } from 'howler';

const sound = new Howl({
    src: ["cheer.wav"],
    html5: true
})

// click to hear people cheer for you
function cheerForMe() {
    sound.play();
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cheer").addEventListener("click", cheerForMe);
})