const btnEjercicio1 = document.querySelector("#btnEjercicio1")
const main1 = document.querySelector("#main1")
const btnEjercicio2 = document.querySelector("#btnEjercicio2")
const main2 = document.querySelector("#main2")
const btnEjercicio3 = document.querySelector("#btnEjercicio3")
const main3 = document.querySelector("#main3")

main1.style.display = "block"
main2.style.display = "none"
main3.style.display = "none"

btnEjercicio1.addEventListener("click", () => {
    main1.style.display = "block"
    main2.style.display = "none"
    main3.style.display = "none"
})
btnEjercicio2.addEventListener("click", () => {
    main1.style.display = "none"
    main2.style.display = "block"
    main3.style.display = "none"
})
btnEjercicio3.addEventListener("click", () => {
    main1.style.display = "none"
    main2.style.display = "none"
    main3.style.display = "block"
})

///////// Ejercicio 1////////////

const img1 = document.querySelector("#img1")

let clickStatus = true
//////// img1 /////////
img1.src = "assets/img/img-card.jpg"
img1.addEventListener("click", () => {
    if (clickStatus == true) {
        img1.style.border = "none"
        clickStatus = false
    } else {
        img1.style.border = "2px solid red"
        clickStatus = true
    }
})

///////// Ejercicio 2 ////////////

const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const input3 = document.querySelector("#input3")
const btnVerificar = document.querySelector("#btnVerificar")
const check1 = document.querySelector("#check1")
let total

input1.value = 0
input2.value = 0
input3.value = 0

btnVerificar.addEventListener("click", () => {
    input1Value = Number(input1.value)
    input2Value = Number(input2.value)
    input3Value = Number(input3.value)

    total = input1Value + input2Value + input3Value

    if (total <= 10) {
        check1.textContent = `Llevas ${total} stickers`
    }

    if (total > 10) {
        check1.textContent = `Llevas demasiado stickers`
    }
})

///////// Ejercicio 3 //////////////

const text3 = document.querySelector("#txt3")
const bntIngresar = document.querySelector("#btnIngresar")
const select1 = document.querySelector("#select1")
const select2 = document.querySelector("#select2")
const select3 = document.querySelector("#select3")

let option11 = document.querySelector("#option1-1")
let option12 = document.querySelector("#option1-2")
let option13 = document.querySelector("#option1-3")
let option14 = document.querySelector("#option1-4")
let option15 = document.querySelector("#option1-5")
let option16 = document.querySelector("#option1-6")
let option17 = document.querySelector("#option1-7")
let option18 = document.querySelector("#option1-8")
let option19 = document.querySelector("#option1-9")

let option21 = document.querySelector("#option2-1")
let option22 = document.querySelector("#option2-2")
let option23 = document.querySelector("#option2-3")
let option24 = document.querySelector("#option2-4")
let option25 = document.querySelector("#option2-5")
let option26 = document.querySelector("#option2-6")
let option27 = document.querySelector("#option2-7")
let option28 = document.querySelector("#option2-8")
let option29 = document.querySelector("#option2-9")

let option31 = document.querySelector("#option3-1")
let option32 = document.querySelector("#option3-2")
let option33 = document.querySelector("#option3-3")
let option34 = document.querySelector("#option3-4")
let option35 = document.querySelector("#option3-5")
let option36 = document.querySelector("#option3-6")
let option37 = document.querySelector("#option3-7")
let option38 = document.querySelector("#option3-8")
let option39 = document.querySelector("#option3-9")

option11.value = 1
option12.value = 2
option13.value = 3
option14.value = 4
option15.value = 5
option16.value = 6
option17.value = 7
option18.value = 8
option19.value = 9

option21.value = 1
option22.value = 2
option23.value = 3
option24.value = 4
option25.value = 5
option26.value = 6
option27.value = 7
option28.value = 8
option29.value = 9

option31.value = 1
option32.value = 2
option33.value = 3
option34.value = 4
option35.value = 5
option36.value = 6
option37.value = 7
option38.value = 8
option39.value = 9



bntIngresar.addEventListener("click", () => {

    if (select1.selectedIndex === 8 && select2.selectedIndex === 0 && select3.selectedIndex === 0) {
        text3.textContent = "Password 1 correcto"
        return
    }

    if (select1.selectedIndex === 6 && select2.selectedIndex === 0 && select3.selectedIndex === 3) {
        text3.textContent = "Password 2 correcto"
        return
    }

    else (
        text3.textContent = "Password incorrecto"
    )

})