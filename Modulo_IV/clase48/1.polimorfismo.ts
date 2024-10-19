//clase base
abstract class Pago {
    abstract procesarPago(monto: number): void;
}

//clases derivadas
class PagoConTarjeta extends Pago {
    procesarPago(monto: number): void {
        console.log(`Pago de ${monto} procesando con tarjeta de credito`);
    }
}

class PagoEnEfectivo extends Pago {
    procesarPago(monto: number): void {
        console.log(`Pago de ${monto} procesando en efectivo`);
    }
}

class PagoPorTransferencia extends Pago {
    procesarPago(monto: number): void {
        console.log(`Pago de ${monto} procesado con transferencia`);
    }
}

//uso de polimorfismo
const procesar = (pago: Pago, monto: number) => {
    pago.procesarPago(monto)
};

const pago1 = new PagoConTarjeta();
const pago2 = new PagoEnEfectivo();
const pago3 = new PagoPorTransferencia();

procesar(pago1, 50);
