export default function clickAudio(audioPath) {
    new Audio(audioPath ? audioPath : "/sounds/default_nav_click.mp3").play();
}