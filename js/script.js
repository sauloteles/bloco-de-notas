let blocoNotas = document.getElementById("main__bloco-notas");
let btnAdd = document.getElementsByClassName("main__btn")[0];

let fade = document.getElementsByClassName("fade")[0];
let modal = document.getElementsByClassName("nota-complete")[0];
let posicao = 0;


function createNote(){
    nota = document.createElement('div');
    nota.classList.add('nota')
    nota.innerHTML = `<div class="nota-titulo">
                            <p id = ${posicao}>Titulo<p>
                        </div>`
    blocoNotas.appendChild(nota)
    toggleModal()
    posicao +=1;
}

function toggleModal(){
    fade.classList.toggle("hide");
    modal.classList.toggle("hide");

}

btnAdd.addEventListener('click',createNote);
fade.addEventListener('click',toggleModal);

blocoNotas.addEventListener('click', function(e) {
    fade.classList.toggle("hide");
    modal.classList.toggle("hide");
    
    console.log(e.target.id)

})
   