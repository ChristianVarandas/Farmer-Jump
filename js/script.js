const farmer = document.querySelector(".farmer") //criando a variavel farmer 
const feno = document.querySelector(".feno")//criando a variavel feno (provavelmente será alterado depois)
let animacao = 1

const jump = () => {
    farmer.classList.add("pulo")
    setTimeout(()=>{
        farmer.classList.remove("pulo")
    }, 400)
}
//colocando animação
const anim = setInterval(() =>{
        if (animacao < 2){
        animacao++
        farmer.src = `img/farmer_run${animacao}.png`
        }
        else{
            animacao = 1
            farmer.src = `img/farmer_run${animacao}.png` 
        }
        console.log(animacao)
}, 250  )

const loop = setInterval(() => {
    let fenolado = feno.offsetLeft
 //   let farmerlado =+ window.getComputedStyle(farmer).buttom.replace("px", "")
    
}, 1);




function jogar(){
    window.location.href = "jogo.html"
}

document.addEventListener("keydown", jump)
