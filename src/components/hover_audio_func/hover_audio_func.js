export default function hoverAudio(audioPath) {
    const overAudio = new Audio(audioPath ? audioPath : "/sounds/default_nav_hover.mp3");
          overAudio.volume = 0.2;
          overAudio.play();
}