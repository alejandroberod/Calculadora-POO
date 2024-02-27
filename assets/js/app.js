//Variables
const btns = document.querySelectorAll('.btn');
const resultadoPantalla = document.querySelector('.calc__resultado');
const operador = document.querySelectorAll('.signos');

//Eventos
btns.forEach(btn => {
    btn.addEventListener('click', leerNumero);
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

class UI {
    constructor (resultadoPantalla) {
        this.resultadoPantalla = resultadoPantalla;
        this.operacion = new operacion();
        this.operacion = '';
        this.resultado = '';
        this.operador = {
            sumar: '+',
            restar: '-',
            multiplicar: 'x',
            dividir: '÷'
        }
    }

    calcular(operador) {
        this.operacion !== 'igual' && this.operar();
        this.operacion = operador;
    }

    mostrarNumero(num) {
        this.resultado += num;
        this.resultadoPantalla.textContent = `${this.resultado} ${this.operador[this.operacion] || ''}`; 
    }

    operar() {
        this.operacion = operador;
    }
}

const ui = new UI(resultadoPantalla);

function leerNumero(e) {
    ui.mostrarNumero(e.target.textContent);
}
function leerOperador(e) {
    ui.calcular(e.target.value);
}
