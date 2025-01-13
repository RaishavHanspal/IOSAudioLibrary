import { Howl } from 'howler';

const sound = new Howl({
    src: ["cheer.wav"]
})

// click to hear people cheer for you
function cheerForMe() {
    sound.play();
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cheer").addEventListener("click", cheerForMe);
})