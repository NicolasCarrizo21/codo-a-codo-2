function convertir(Cantidad,Categoria,totalADescontar) {
let Estudiante = 80
let Trainee = 50
let Junior = 15
let resultadoConversion = 0
totalADescontar = 0


if(Categoria == "Estudiante"){
    totalADescontar =  (Cantidad * 200 * Estudiante/100) 
    resultadoConversion = Cantidad * 200 - totalADescontar
}
else if(Categoria =="Trainee"){
    totalADescontar = (Cantidad * 200 * Trainee/ 100)
    resultadoConversion= Cantidad * 200 - totalADescontar
}else if(Categoria == "Junior") {
    totalADescontar = (Cantidad * 200 * Junior/ 100) 
    resultadoConversion = Cantidad * 200 - totalADescontar
    
}




return resultadoConversion


}
let formulario = document.getElementById("form_conversor")

let resultado = document.getElementById("resultado")

let Cantidad = document.getElementById("Cantidad")

let Categoria = document.getElementById("Categoria")

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    resultado.textContent = "Total a Pagar:$" + convertir(parseFloat(Cantidad.value), Categoria.value)

})
formulario.addEventListener("reset", ()=>{
    resultado.textContent = "Total a Pagar:$"
})