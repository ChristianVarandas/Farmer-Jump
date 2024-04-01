const farmer = document.querySelector(".farmer") //criando a variavel farmer 
const feno = document.querySelector(".feno")//criando a variavel feno (provavelmente será alterado depois)
let animacao = 1
let vidas = 0

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
}, 250  )

//fazendo colisão 
const loop = setInterval(() => {
    let fenolado = feno.offsetLeft//detecta o lado do feno
    let farmerlado = +window.getComputedStyle(farmer).bottom.replace("px", "") // puxa o valor do "farmer" no css
    


    //verifica se os dois itens estão entrando em contato 
    if(fenolado < 50 && fenolado > 0 && farmerlado < 245){  
        vidas ++ 
        if (vidas >= 3){
                document.location.href = "gameover.html"//se eles entrarem em contato pela terceira vez envia para o gameover.html
            }
            else{
                document.getElementById("vida"+ vidas).remove()
            } 
    }   
    console.log(vidas)
}, 130);






document.addEventListener("keydown", jump)
