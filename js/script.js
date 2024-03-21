const blocoNotas = document.getElementById("main__bloco-notas");
const btnAdd = document.getElementsByClassName("main__btn")[0];
const fade = document.getElementsByClassName("fade")[0];
const modal = document.getElementsByClassName("nota-complete")[0];
const tituloModal = document.getElementById("input-title");
const textoModal =  document.getElementById("input-text");
const btnDelete = document.getElementsByClassName('btn-delete')[0];

let indice = 0;
let listaNotas=  [];
let atualNota = 0;
let modalOn = false;

class Notas{
    constructor(titulo,texto,id){
        this.titulo = titulo;
        this.texto = texto;
        this.id = id;
    }
    criarNota(){
        limparInputs()
        // this.id = indice;
        let divTitulo = document.createElement('div');
        divTitulo.classList.add('box-titulo')

        divTitulo.innerHTML = `<p class = 'texto-titulo' id=${this.id}><p>`
        blocoNotas.appendChild(divTitulo)
    }
    mostrarConteudo(){
        tituloModal.textContent = this.titulo
        textoModal.textContent = this.texto        
    }
}

if(localStorage.hasOwnProperty('listaNotas')){
    listaNotas = JSON.parse(localStorage.getItem('listaNotas'));

    for(let i = 0; i < listaNotas.length;++i){
        let nota = new Notas(listaNotas[i].titulo,listaNotas[i].texto,listaNotas[i].id);
        nota.criarNota()
        console.log( listaNotas[i].id)
        let div = document.getElementById(listaNotas[i].id)
        div.innerText =  listaNotas[i].titulo   

    };
    indice = parseInt(listaNotas[listaNotas.length-1].id)+1
    console.log(indice)
}

addEventListener('click',(e)=>{
    if(!modalOn){
        let titulosTag = document.getElementsByClassName('texto-titulo') 
        console.log(listaNotas) 
        console.log(modalOn ) 

        for(let i = 0; i< titulosTag.length;++i){
            if(titulosTag[i].id == e.target.id){
                for(let k = 0; k< listaNotas.length;++k){
                    if(listaNotas[k].id == titulosTag[i].id){
                        console.log(e.target.id,titulosTag[i].id)
                        console.log('k'+k)  
                        limparInputs()
                        tituloModal.value = listaNotas[k].titulo
                        textoModal.value = listaNotas[k].texto
                        atualNota = k;
                        toggleModal()
                        
                    }
                }
            }
        }   
    }

});

function limparInputs(){
    tituloModal.value = '';
    textoModal.value =''; 
}

function toggleModal(){
    fade.classList.toggle("hide");
    modal.classList.toggle("hide");
    console.log('modal')   
}

btnAdd.addEventListener('click',()=>{
    console.log('btn add')
    let nota = new Notas();
    nota.id = indice
    nota.criarNota() 
    toggleModal()
    atualNota = indice;
    ++indice;
    listaNotas.push(nota);
    modalOn = true
});

fade.addEventListener('click',()=>{

    console.log(textoModal.textContent)
    if(listaNotas[atualNota].titulo == '' || listaNotas[atualNota].titulo == undefined){
        listaNotas[atualNota].titulo = 'sem titulo'
    }
    if(listaNotas[atualNota].texto == undefined){
        listaNotas[atualNota].texto = ''
    } 
    console.log(atualNota)
    let div = document.getElementById(listaNotas[atualNota].id)
    div.innerText =  listaNotas[atualNota].titulo
    toggleModal()
    storage()
    modalOn = false
})
modal.addEventListener('input',(e)=>{
    if(e.target.id == 'input-title'){
        listaNotas[atualNota].titulo = e.target.value;
    }else if(e.target.id == 'input-text'){
        listaNotas[atualNota].texto = e.target.value;
    }
    modalOn = true

})

function storage(){
    localStorage.setItem('listaNotas',JSON.stringify(listaNotas))
}

