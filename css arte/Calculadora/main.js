const pantalla = document.querySelector(".pantallaUno")
const pantallaDos = document.querySelector(".pantallaDos")
const botones = document.querySelectorAll(".btn")

    //Escucha los click del texto del teclado   
    botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent

        //Reset
        if (boton.id === "c") {
            pantalla.textContent = "<"
            pantallaDos.textContent = ""
            document.getElementById("uno") 
            uno.style.fontSize = "30px"

            return
        }

        //Borrar 1 
        if (boton.id === "borrar") {
            if (pantallaDos.textContent.length === 1 || pantalla.textContent === "error!") {
                pantallaDos.textContent = ""
                pantalla.textContent = "<"
                

            }
            else {
                pantallaDos.textContent = pantallaDos.textContent.slice("<", "-1")
            }
            return;
        }
        //Igual
        if (boton.id === "igual") {
            pantallaDos.textContent = pantalla.textContent 
            document.getElementById("uno") 
            uno.style.fontSize = "40px"
            return
        }
        else if(boton.id !== "igual"){
            document.getElementById("uno") 
            uno.style.fontSize = "30px"
        }

        else{
            try {
                pantalla.textContent = eval(pantallaDos.textContent)
            } catch {
                pantalla.textContent = "error"
            }
        }
        //Coma bug
        if(boton.id === "coma"){
            pantallaDos.textContent += "."
            return
        }
        if(boton.id === "info"){
            return
        }

        //Texto en pantalla
        if (pantallaDos.textContent === "" || pantalla.textContent === "error!")
            pantallaDos.textContent = botonApretado

        else {
            pantallaDos.textContent += botonApretado
        }
        
        //Resultado automatico
        if(InputEvent){
            try {
                pantalla.textContent = eval(pantallaDos.textContent)
            } catch {
/*                 pantalla.textContent = "error"
 */            }
        }

        setTimeout( () => {
            if(pantalla.textContent === "error"){
                pantalla.textContent = "<"
                pantallaDos.textContent = ""
            }
        },15000)
    })
}) 
