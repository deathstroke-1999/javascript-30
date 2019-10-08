
function playSound(e) {
    // this.console.log(e.keyCode) to check the 'keyCode'
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    // console.log(audio) we get corresponding audio elements

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    // console.log(key)

    if (!audio) {
        // if we dont have that audio element, then return
        return;
    }
    audio.currentTime = 0; // to rewind to start when already playing   
    audio.play()

    key.classList.add('playing')
    // Now we will add a transition-end effect when the transition is itself stopped
}

window.addEventListener('keydown', playSound)

function removeTransition(e) {
    // console.log(e )
    // Now we get all transitions which have nede like background,bordee ...etc
    if (e.propertyName !== 'transform') {
        return;
        // Skip it if it isn't a transform
    }
    // console.log(this)
    this.classList.remove('playing')
    // console.log(e.propertyName)

}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
