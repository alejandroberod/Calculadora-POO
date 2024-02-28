//Variables
const btns = document.querySelectorAll('.btn');
const numero2 = document.querySelector('.calc__resultado .numero2');
const numero1 = document.querySelector('.calc__resultado .numero1');
const operador = document.querySelectorAll('.signos');

//Eventos
btns.forEach(btn => {
    btn.addEventListener('click', leerNum);
})
operador.forEach(operador => {
    operador.addEventListener('click', leerOperador);
})

class operacion {
    sumar(num1, num2) {
        return num1 + num2;
    }
    restar(num1, num2) {
        return num1 - num2;
    }
    multiplicar(num1, num2) {
        return num1 * num2;
    }
    dividir(num1, num2) {
        return num1 / num2;
    }

}
const str = '123++';

const numero = str.replace(/\D/g, "");

let oper;

// class UI {
//     constructor (numero2) {
//         this.numero2 = numero2;
//         this.operacion = new operacion();
//         this.operacion = '';
//         this.resultado = '';
//         this.operator = {
//             sumar: '+',
//             restar: '-',
//             multiplicar: 'x',
//             dividir: '÷'
//         }
//     }

//     calcular(operador) {
//         this.operacion !== 'igual' && this.operar();
//         this.operacion = operador;

//         if(this.operacion == 'igual') {
            
//         }
//     }

//     mostrarNumero(num) {
//         this.resultado += num;
//         this.numero2.textContent = `${this.resultado} ${this.operator[this.operacion] || ''}`; 
//     }

//     operar() {
//         this.operacion = operador;
//     }
// }

// const ui = new UI(numero2);

function leerNumero(e) {
    // ui.mostrarNumero(e.target.textContent);
}
function leerOperador(e) {
    // ui.calcular(e.target.value);
}


function leerNum(e) {
    const numero = e.target.textContent;
    if(!e.target.value) {
        numero2.textContent += numero;
    }
    if(e.target.value && e.target.value !== 'igual') {
        operar(+numero2.textContent, e.target.textContent);
        numero2.innerHTML = '';
    } 
    if(e.target.value == 'igual') {
        const num1 = +numero1.textContent.replace(/\D/g, "");
        const num2 = +numero2.textContent;
        console.log(num1);
        console.log(num2);
    }
}

function leerOperador(e) {
    
}

function operar(num1, operador) {
    oper = new operacion();
    numero1.textContent = `${+num1} ${operador}`;

    // const resultado = operacion.sumar(num1, numero2.textContent);
}