





/*adding the cool text typing effect*/
/**
 * varibles and stuff
 * i is the character
 * l is the line
 * typeSpeed is how fast the text appears - smaller = quicker typing
 * and then the rest are the texts in each bit
 */
let i = 0
let l = 0
let typing = true
const typeSpeed = 25
const titleText1 = 'print("Hello World")'
const titleText2 = 'print("My name is Leo Tyte")'
const titleText3 = 'print("I am a software developer")'

/*wait function*/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function cursorAnimation() {
    while (typing) {
        document.getElementById("titleCodeText3").innerHTML = 'print("I am a software developer")'
        await sleep(500)
        if (typing) {
            document.getElementById("titleCodeText3").innerHTML = 'print("I am a software developer")|'
            await sleep(500)
        }
        
    }
}

async function initiateTitle(){
    await sleep(1000)
    document.getElementById("titleText1").innerHTML = "Hello world"
    await sleep(1000)
    document.getElementById("titleText2").innerHTML = "My name is Leo Tyte"
    await sleep(1000)
    document.getElementById("titleText3").innerHTML = "I am a software developer"
}

/*this makes the text come in*/
function typeTitleText() {
    if (l == 0 && typing) {
        if (i < titleText1.length) {
            document.getElementById("titleCodeText1").innerHTML += titleText1.charAt(i)
            i++
            setTimeout(typeTitleText, typeSpeed)
        } else {
            i = 0
            l = 1
        }
    }
    if (l == 1 && typing) {
        if (i < titleText2.length) {
            document.getElementById("titleCodeText2").innerHTML += titleText2.charAt(i)
            i++
            setTimeout(typeTitleText, typeSpeed)
        } else {
            i = 0
            l = 2
        }
    }
    if (l == 2 && typing) {
        if (i < titleText3.length) {
            document.getElementById("titleCodeText3").innerHTML += titleText3.charAt(i)
            i++
            setTimeout(typeTitleText, typeSpeed)
        } else {
            i = 0
            l = 3
            cursorAnimation()
        }
    }
}

/*this makes the text come out*/
function eraseTitleText() {
    typing = false
    // LINE 3
    if (l === 3) {
        l = 2
    }
    if (l === 2) {
        const el = document.getElementById("titleCodeText3")
        if (el.innerHTML.length > 0) {
            el.innerHTML = el.innerHTML.slice(0, -1)
            setTimeout(eraseTitleText, typeSpeed)
        } else {
            l = 1
        }
    }

    // LINE 2
    if (l === 1) {
        const el = document.getElementById("titleCodeText2")
        if (el.innerHTML.length > 0) {
            el.innerHTML = el.innerHTML.slice(0, -1)
            setTimeout(eraseTitleText, typeSpeed)
        } else {
            l = 0
        }
    }

    // LINE 1
    if (l === 0) {
        const el = document.getElementById("titleCodeText1")
        if (el.innerHTML.length > 0) {
            el.innerHTML = el.innerHTML.slice(0, -1)
            setTimeout(eraseTitleText, typeSpeed)
        } else {
            eraseLine = -1 // finished
            initiateTitle()
        }
    }
}

typeTitleText()

function downArrowPressed() {
    eraseTitleText()
}