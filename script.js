/*
Abaixo de 17 = Muito abaixo do peso
Entre 17 e 18,49 = Abaixo do peso
Entre 18,5 e 24,99 = Peso Normal
Entre 25 e 29,99 = Acima do peso
*/ 

// peso / altura**2;

var peso;
var altura;
var imc;
var resultado;

document.querySelectorAll('#peso, #altura').forEach(campo => {
    campo.addEventListener('input', function() {
        this.value = this.value.replace(',', '.');
    });
});


function calcular(event){
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    console.log(peso);
    console.log(altura);

    resultado = document.getElementById('resultado');

    if(peso ==='' || altura===''){
        resultado.innerHTML = 'Por favor, preencha os campos antes de calcular.';
        return;
    }

    if(isNaN(peso) || isNaN(altura)){
        resultado.innerHTML = 'Por favor, digite apenas números.';
        return;
    }

    imc = peso / (altura *altura);
    
    if(imc < 17){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está muito abaixo do peso! ⚠️';
    }else if(imc >= 17 && imc <= 18.49){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está abaixo do peso!';
    }else if(imc >= 18.5 && imc < 24.99){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Parabéns! Você está no peso ideal! ✅';
    }else if(imc >= 25 && imc <= 29.99){;
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está acima do peso!';
    }else if(imc >=30){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Obesidade! ⚠️';
    }
        
}

function limpar(){
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    resultado.innerHTML = '';
}