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