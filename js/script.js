const farmer = document.querySelector(".farmer") //criando a variavel farmer 
const feno = document.querySelector(".feno") //criando a variavel feno (provavelmente será alterado depois)


const jump = () => {
    farmer.classList.add("pulo")
    setTimeout(()=>{
        farmer.classList.remove("pulo")
    }, 500)
}


//colocando animação
const anim = () =>{

}


document.addEventListener("keydown", jump)
