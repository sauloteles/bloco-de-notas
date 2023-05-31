let blocoNotas = document.getElementById("main__bloco-notas");
let btnAdd = document.getElementsByClassName("main__btn")[0];
let fade = document.getElementsByClassName("fade")[0];
let modal = document.getElementsByClassName("nota-complete")[0];
let tituloNota = document.getElementById("input-title");
let textoNota =  document.getElementById("input-text");
let indice1 = 0;

let ultimoId;
let bol = true;
let bol2 = false;
let notasConteudo=  new Array();

if(localStorage.hasOwnProperty('notasConteudo')){
    notasConteudo = JSON.parse(localStorage.getItem('notasConteudo'));
    // notasConteudo=  new Array(notasConteudo );

    for(let i = 0; i < notasConteudo.length;++i){
        let nota = document.createElement('div');
        nota.classList.add('nota')
        nota.innerHTML = `<div class="nota-titulo">
                                <p id = ${notasConteudo[i].indice}>${notasConteudo[i].tituloNota}<p>
                            </div>`
        blocoNotas.appendChild(nota)
    };
    indice1 = (notasConteudo[notasConteudo.length-1].indice)+1
    bol = false
}


function createNote(){
    tituloNota.value = '';
    textoNota.value ='';
    let nota = document.createElement('div');
    nota.classList.add('nota')
    nota.innerHTML = `<div class="nota-titulo">
                            <p id = ${indice1}><p>
                        </div>`
    blocoNotas.appendChild(nota)
    bol = true;
    toggleModal()
    
    
}

function toggleModal(){
    fade.classList.toggle("hide");
    modal.classList.toggle("hide");
    
}

btnAdd.addEventListener('click',createNote);
fade.addEventListener('click',()=>{
    toggleModal()
    if(tituloNota.value == '' && textoNota.value == ''){
        blocoNotas.removeChild(nota);
        bol = false
    }
    
    if(bol == true){
        let notaTitulo = document.getElementById(indice1);
        notasConteudo.push({'indice':`${indice1}`,'tituloNota':`${tituloNota.value}`,'textoNota':`${textoNota.value}`})
        
        notaTitulo.textContent = tituloNota.value
        indice1 +=1; 
      
        bol = false;
        
    }
    storage()
    bol2 = false;


   

});

blocoNotas.addEventListener('click', function(e) {
    if(e.target.id == "input-text" || e.target.id  =="input-title")
        return; 
    

    console.log(notasConteudo)
    fade.classList.toggle("hide");
    modal.classList.toggle("hide");


    for(let i = 0; i < notasConteudo.length; ++i){
        if(e.target.id == notasConteudo[i].indice){
            tituloNota.value = notasConteudo[i].tituloNota;
            textoNota.value = notasConteudo[i].textoNota;
        }
    }
    ultimoId = e.target.id ;
    
    bol2 = true;

})

modal.addEventListener('input', function(e){
    if(bol2){ 
        if(e.target.id == "input-title"){
            notasConteudo[ultimoId].tituloNota = e.target.value;
            let notaTitulo = document.getElementById(ultimoId);
            notaTitulo.textContent =  e.target.value;
        }
        if(e.target.id == "input-text"){
            notasConteudo[ultimoId].textoNota = e.target.value;

        }
    }

})
function storage(){
    console.log(localStorage);
    localStorage.setItem('notasConteudo',JSON.stringify(notasConteudo))
}