let justPlayed = null;

function playAudio (n) {
    const audio = document.querySelector(`audio[data-key="${n.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${n.keyCode}"]`)

    if (n.keyCode === justPlayed) return;

    if (!audio) return;
    audio.currentTime=0;
    audio.play();
    key.classList.add('playing');
    justPlayed = n.keyCode;
}

function removeTransition(n) {
      if(n.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener ('transitionend', removeTransition));

window.addEventListener('keydown', playAudio);
window.addEventListener('keyup', () => justPlayed = null);



