window.onload = function () {
    init(); 
};

var form = document.querySelector('form');
var btnSubmissao = document.querySelector('#btnform');

form.addEventListener('submit', function (event) {
    event.preventDefault();
});


btnSubmissao.addEventListener('click', validaFormulario);


function validaFormulario(){
    if (form.checkValidity()){
        //Especificar as validações aqui
        
        if(!validaNome(nomecomp)){
            nomecomp.setCustomValidity('Nome inválido! Especifique o nome!');
            return;
        }
        
        if(!validaTel(tel)){
            tel.setCustomValidity('Telefone inválido! Especifique um número com 8 ou 9 dígitos!');
            return;
        }
    
        if( areatexto.value.length <30){
            areatexto.setCustomValidity('Pf deixe a sua sugestão mais detalhada!');
            return;
        }
         //Submeter aqui
        document.getElementById("sugestao").submit();
    }
    else{
       form.querySelectorAll(':invalid')[0].focus(); 
    }  

}

//Padrao validar
function validaNome(fld) {
    var letters = /^[A-zÀ-ú\s]+$/; //o comeco da string é uma letra e no fim um dolar e \s significa que aceita espaços tambem
    if (fld.value.trim().match(letters)) 
		return true;
    return false;
}

function validaTel(fld){
    var numbers=/^[0-9]+$/;
    if (fld.value.trim().match(numbers) && (fld.value.length ==8 || fld.value.length ==9))
        return true;
    return false;
}

function init() {
     resetPainel();
}

function resetPainel(){
    
nomecomp.setCustomValidity('');
email.setCustomValidity('');
tel.setCustomValidity('');
areatexto.setCustomValidity('');
    
}

nomecomp.oninput=resetPainel;
email.oninput=resetPainel;
tel.oninput=resetPainel;
areatexto.oninput=resetPainel;


