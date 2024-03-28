const farmer = document.querySelector(".farmer") //criando a variavel farmer 
const feno = document.querySelector(".feno") //criando a variavel feno (provavelmente será alterado depois)


const jump = () => {
    farmer.classList.add("pulo")
    setTimeout(()=>{
        farmer.classList.remove("pulo")
    }, 400)
}
const loop = setInterval(() => {
    let fenolado = feno.offsetLeft
    let farmerlado =+ window.getComputedStyle(farmer).buttom.replace("px", "")
    
    
}, 1);

//colocando animação
const anim = () =>{

}

function jogar(){
    window.location.href = "jogo.html"
}

document.addEventListener("keydown", jump)
