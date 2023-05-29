let blocoNotas = document.getElementsByClassName("main__bloco-notas")[0];
let btnAdd = document.getElementsByClassName("main__btn")[0];

let fade = document.getElementsByClassName("fade")[0];
let modal = document.getElementsByClassName("nota-complete");
let posicao = 0;


function createNote(){
    nota = document.createElement('div');
    nota.classList.add('nota')
    nota.innerHTML = `<div class="nota-titulo"  onclick="toggleModal2(${posicao})">
                            <p>Titulo<p>
                        </div>
                        <div class="nota-complete ">
                            <div>
                                <input class="input-title input " type="text">
                            </div>
                            <div>
                                <textarea class="input-text input" name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>`
    
    blocoNotas.appendChild(nota)
    fade.classList.toggle("hide");
    posicao +=1;
   
}

function toggleModal(){
    fade.classList.toggle("hide");
    modal[modal.length-1].classList.toggle("hide");

}
function toggleModal2(posicao){
    fade.classList.toggle("hide");
    modal[posicao].classList.toggle("hide");


}

btnAdd.addEventListener('click',createNote);
fade.addEventListener('click',toggleModal);
// let notaTitulo = document.getElementsByClassName("nota-titulo")[0];
// notaTitulo.addEventListener('click',toggleModal);

   