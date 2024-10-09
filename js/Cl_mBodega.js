export default class Cl_mBodega {
    constructor({ i10, i20, i50 }) {
        this.acmBill10 = 0;
        this.acmBill20 = 0;
        this.acmBill50 = 0;
        this.iniBill10 = i10;
        this.iniBill20 = i20;
        this.iniBill50 = i50;
    }
    procesarCliente(cliente) {
        if (cliente.denominacion == 10) {
            this.acmBill10 += cliente.cantidad;
        } else if (cliente.denominacion == 20) {
            this.acmBill20 += cliente.cantidad;
        } else if (cliente.denominacion == 50) {
            this.acmBill50 += cliente.cantidad;
        }
    }
    cantBill10() {
        return this.iniBill10;
    }
    cantBill20() {
        return this.iniBill20;
    }
    cantBill50() {
        return this.iniBill50;
    }
    montoBill10() {
        return (this.acmBill10 + this.iniBill10) * 10;
    }
    montoBill20() {
        return (this.acmBill20 + this.iniBill20) * 20;
    }
    montoBill50() {
        return (this.acmBill50 + this.iniBill50) * 50;
    }
    montoTotal() {
        return this.montoBill10() + this.montoBill20() + this.montoBill50();
    }
}