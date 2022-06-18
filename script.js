const criandoTorres = document.getElementById("criandoTorres")

//criar as torres com o dom 
const torreUm = document.createElement("div");
torreUm.classList.add("torre1")
torreUm.id = "primeiraTorre"
criandoTorres.appendChild(torreUm);

const torreDois = document.createElement("div");
torreDois.classList.add("torre2")
torreDois.id = "segundaTorre"
criandoTorres.appendChild(torreDois)

const torreTres = document.createElement("div");
torreTres.classList.add("torre3")
torreTres.id = "terceiraTorre"
criandoTorres.appendChild(torreTres)

const blocoDois = document.createElement("div");
blocoDois.classList.add("bloco2")
torreUm.appendChild(blocoDois)

const blocoTres = document.createElement("div");
blocoTres.classList.add("bloco3")
torreUm.appendChild(blocoTres)

const blocoQuatro = document.createElement("div");
blocoQuatro.classList.add("bloco4")
torreUm.appendChild(blocoQuatro)

const blocoCinco = document.createElement("div");
blocoCinco.classList.add("bloco5")
torreUm.appendChild(blocoCinco)


let posicao = [];
let jogada = true;
criandoTorres.childNodes.forEach(function(torre){torre.addEventListener("click", pegarClick)})
function pegarClick(e) {

    if (posicao.length < 2) {
        if (e.currentTarget.classList.contains("torre1")) {
            posicao.push(e.currentTarget)
        }
        if (e.currentTarget.classList.contains("torre2")) {
            posicao.push(e.currentTarget)
        }
        if (e.currentTarget.classList.contains("torre3")) {
            posicao.push(e.currentTarget)
        }
    }
    if (posicao.length == 2) {
        jogada = false;
        moverDisco(posicao)
    }
}

let counter = 0;
const contador = document.getElementById("contador")

function moverDisco(arrPosicao) {
    let primeiraTorre = arrPosicao[0]
    let segundaTorre = arrPosicao[1]
    let discoUm = primeiraTorre.lastElementChild
    let discoDois = segundaTorre.lastElementChild

    posicao = [];
        if (segundaTorre.childElementCount < 1 && jogada === false) {
            counter++
            segundaTorre.appendChild(discoUm)
            contador.innerText = counter
            posicao = [];
            jogada = true;
        }else if(discoDois.clientWidth !== null && discoUm.clientWidth !== null){
            if (discoDois.clientWidth > discoUm.clientWidth ) {
                counter++
                segundaTorre.appendChild(discoUm)
                contador.innerText = counter
                posicao = [];
                jogada = true;
            }
        }
        
        if (segundaTorre.childElementCount == 4) {
            contador.innerText = counter
            notificacaoVenceu(segundaTorre, "Parabéns, você completou o objetivo do jogo!!")
        }
        posicao = [];
}

function notificacaoVenceu(segundaTorre, mensagem){
    const vitoria = document.querySelector("span")
    const textVitoria = document.querySelector(".vitoria span")
    if (segundaTorre.childElementCount == 4) {
        vitoria.classList.add("vitoriaOk")
        textVitoria.innerText = mensagem
    }
}

// function reset(){
//     let resetarPosicao = document.querySelectorAll("posicao");
//     let resetarMovimentos = document.querySelectorAll("counter");

//     resetarPosicao.forEach(function(a,b){
//         a.innerHTML = "";
//     })

//     resetarMovimentos.forEach(function(a,b){
//         a.innerHTML = "";
//     })
// }

const resetar = document.getElementById("resetar");
resetar.addEventListener("click", () => {
    let resetarPosicao = document.getElementById("primeiraTorre");
    let resetaPosicao = document.getElementById("segundaTorre");
    let resetPosicao = document.getElementById("terceiraTorre");
    let contador = document.getElementById("contador");

    resetarPosicao.innerHTML = torreUm.appendChild(blocoDois), torreUm.appendChild(blocoTres), torreUm.appendChild(blocoQuatro), torreUm.appendChild(blocoCinco);
    resetaPosicao.innerHTML = "";
    resetPosicao.innerHTML = "";
    contador.innerText = 0;

});
