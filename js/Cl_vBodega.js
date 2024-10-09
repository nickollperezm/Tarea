export default class Cl_vBodega {
    constructor(controlador) {
        this.vista = document.getElementById("mainForm");
        this.inInicial10 = document.getElementById("mainForm_inInicial10");
        this.inInicial20 = document.getElementById("mainForm_inInicial20");
        this.inInicial50 = document.getElementById("mainForm_inInicial50");
        this.inIniciales = document.getElementById("mainForm_inIniciales");
        this.lblInicial10 = document.getElementById("mainForm_lblInicial10");
        this.lblInicial20 = document.getElementById("mainForm_lblInicial20");
        this.lblInicial50 = document.getElementById("mainForm_lblInicial50");
        this.btAceptar = document.getElementById("mainForm_btAceptar");
        this.btAceptar.onclick = () => {
            controlador.agregarIniciales({
                i10: this.inInicial10.value,
                i20: this.inInicial20.value,
                i50: this.inInicial50.value
            });
        this.ocultarIniciales();
        }
        this.tabla = document.getElementById("mainForm_tabla");
        this.btAgregar = document.getElementById("mainForm_btAgregar");
        this.lblMontoBill10 = document.getElementById("mainForm_lblMontoBill10");
        this.lblMontoBill20 = document.getElementById("mainForm_lblMontoBill20");
        this.lblMontoBill50 = document.getElementById("mainForm_lblMontoBill50");
        this.lblMontoTotal = document.getElementById("mainForm_lblMontoTotal");
        this.btAgregar.onclick = () => controlador.mostrarVistaCliente();
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
    reportarCliente({
        cedula,
        denominacion,
        cantidad,
        montoCuenta,
        cantBill10,
        cantBill20,
        cantBill50,
        montoBill10,
        montoBill20,
        montoBill50,
        montoTotal
    }) {
        this.lblInicial10.innerHTML = cantBill10;
        this.lblInicial20.innerHTML = cantBill20;
        this.lblInicial50.innerHTML = cantBill50;
        this.tabla.innerHTML += `
        <tr>
            <td>${cedula}</td>
            <td>$${denominacion}</td>
            <td>${cantidad}</td>
            <td>$${montoCuenta}</td>
        </tr>
        `;
        this.lblMontoBill10.innerHTML = montoBill10;
        this.lblMontoBill20.innerHTML = montoBill20;
        this.lblMontoBill50.innerHTML = montoBill50;
        this.lblMontoTotal.innerHTML = montoTotal;
    }
}