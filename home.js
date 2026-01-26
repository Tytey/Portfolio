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
const typeSpeed = 35
const titleText1 = 'print("Hello world")'
const titleText2 = 'print("My name is Leo Tyte")'
const titleText3 = 'print("I am a software developer")'

function typeTitleText() {
    if (l == 0) {
        if (i < titleText1.length) {
            document.getElementById("titleText1").innerHTML += titleText1.charAt(i)
            i++
            setTimeout(typeTitleText, typeSpeed)
        } else {
            i = 0
            l = 1
        }
    }
    if (l == 1) {
        if (i < titleText2.length) {
            document.getElementById("titleText2").innerHTML += titleText2.charAt(i)
            i++
            setTimeout(typeTitleText, typeSpeed)
        } else {
            i = 0
            l = 2
        }
    }
    if (l == 2) {
        if (i < titleText3.length) {
            document.getElementById("titleText3").innerHTML += titleText3.charAt(i)
            i++
            setTimeout(typeTitleText, typeSpeed)
        } else {
            i = 0
            l = 3
        }
    }
}

typeTitleText()
