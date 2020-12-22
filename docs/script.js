const btnHappy = document.getElementById("happy")

const btnSad = document.getElementById("sad")


const SAD = document.querySelector(".sad")
const HAPPY = document.querySelector(".happy")



btnHappy.addEventListener('click', () => {
   SAD.src = "happymarguerite.jpg"
})

btnSad.addEventListener('click', () => {
    HAPPY.src = "sadmarguerite.jpg"
})

function bonicaCanço() {
    let cançodenit = document.getElementById("canço")
    cançodenit.src="bonica.mp3"
    cançodenit.play()
}

function tristaCanço(){
    let cançodenit = document.getElementById("canço")
    cançodenit.src="trista.mp3"
    cançodenit.play()
}


ScrollReveal().reveal('.pregunta', {
    delay: 500,
    duration: 1500,
    origin: "top",
    distance: "200px"
})

ScrollReveal().reveal('.btn', {
    delay: 1000,
    duration: 2500,

})

ScrollReveal().reveal('.sad', {
    delay: 2000,
    duration: 2500,

})

