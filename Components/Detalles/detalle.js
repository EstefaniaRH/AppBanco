import { LitElement, html } from "lit";
import { styles } from "./styles.js";

export default class Detalle extends LitElement {
    constructor() {
        super();
        this.informacion = {};
    }

    static styles = styles;
    static properties ={
        informacion: {
            type: Object
        }
    }

    firstUpdated() {
        this.addEventListener('detalles', (ev) => this.showDashboard(ev));
    }

    showDashboard(ev) {
        this.style.display = 'block';
        document.querySelector('datos-component').style.display = 'none';

        console.log(ev.detail.id);
        this.informacion = ev.detail;

    }

    closed() {
        this.style.display = 'none';
        document.querySelector('datos-component').style.display = 'block';
    }


    render() {

        return html`

        <section class="containerDetalles">
            <div class="center">
                <div class="head">
                    <h1>Movimiento ${this.informacion.id} </h1>
                    <h3>Descripción - ${this.informacion.detalle}</h3>
                    <p> ${this.informacion.descripcion}<p>
                </div>
                <div class="idks">
                    <p>Importe  ${this.informacion.importe}</p>
                    <button @click=${this.closed}>Regresar</button>
                </div>

            </div>
            
        </section>
            
        `;
    }
}