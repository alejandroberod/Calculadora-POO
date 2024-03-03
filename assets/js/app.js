//Variables
const btns = document.querySelectorAll('.num');
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
    multiplicar(numero1, numero2) {
        return numero1 * numero2;
    }
    dividir(numero1, numero2) {
        return numero1 / numero2;
    }
    sumar(numero1, numero2) {
        return numero1 + numero2;
    }
    restar(numero1, numero2) {
        return numero1 - numero2;
    }
}

class UI {
    constructor (numero1, numero2) {
        this.numero1P = numero1;
        this.numero2P = numero2;
        this.numero1 = '';
        this.numero2 = '';
        this.operacion = new operacion();
        this.operador = undefined;
    }

    almacenarNumero(num) {
        typeof(num) == 'string' && num !== '.' ? (num = +num) : null;
        num === '.' && this.numero2.includes('.') ? null : (this.numero2 += num, this.numero2P.textContent = this.numero2, this.numero1P.textContent = this.numero1);
    }



    operar(tipoOp, signo) {
        signo == '=' ? signo = '' : null; 
        this.operador !== 'igual' ? this.calcular() : null;
        this.operador = tipoOp;
        this.numero1 = this.numero2 || this.numero1;
        this.numero2 = '';
        this.numero1P.textContent = `${this.numero1} ${signo}`; 
        this.numero2P.textContent = this.numero2; 
    }

    calcular() {
        const numero1 = parseFloat(this.numero1);
        const numero2 = parseFloat(this.numero2);
        (isNaN(numero2) || isNaN(numero1)) ? null : this.numero2 = this.operacion[this.operador](numero1, numero2);
    }
}

const ui = new UI(numero1, numero2);

function leerNum(e) {
    ui.almacenarNumero(e.target.textContent);
};

function leerOperador(e) {
    ui.operar(e.target.value, e.target.textContent);
}
