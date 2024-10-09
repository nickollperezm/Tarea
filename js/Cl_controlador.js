import Cl_vBodega from "./Cl_vBodega.js";
import Cl_vCliente from "./Cl_vCliente.js";
import Cl_mBodega from "./Cl_mBodega.js";
import Cl_mCliente from "./Cl_mCliente.js";

export default class Cl_controlador {
    constructor() {
        this.mBodega = null;
        this.vCliente = new Cl_vCliente(this);
        this.vBodega = new Cl_vBodega(this);
    }
    mostrarVistaCliente() {
        this.vBodega.ocultar();
        this.vCliente.mostrar();
    }
    mostrarVistaBodega() {
        this.vCliente.ocultar();
        this.vBodega.mostrar();
    }
    agregarIniciales({ i10, i20, i50 }) {
        if (this.mBodega == null) {
            this.mBodega = new Cl_mBodega({ i10, i20, i50 });
        }
        return this.mBodega;
    }
    agregarCliente({ cedula, denominacion, cantidad}) {
        let cliente = new Cl_mCliente({ cedula, denominacion, cantidad });
        this.mBodega.procesarCliente(cliente);
        this.vBodega.reportarCliente({
            cedula: cliente.cedula,
            denominacion: cliente.denominacion,
            cantidad: cliente.cantidad,
            montoCuenta: cliente.montoCuenta().toFixed(2),
            cantBill10: this.mBodega.cantBill10(),
            cantBill20: this.mBodega.cantBill20(),
            cantBill50: this.mBodega.cantBill50(),
            montoBill10: this.mBodega.montoBill10().toFixed(2),
            montoBill20: this.mBodega.montoBill20().toFixed(2),
            montoBill50: this.mBodega.montoBill50().toFixed(2),
            montoTotal: this.mBodega.montoTotal().toFixed(2)
        });
        this.mostrarVistaBodega();
    }
}