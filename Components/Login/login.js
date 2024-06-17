import { LitElement, html } from "lit";
import { styles } from "./styles.js";

export default class Login extends LitElement {
    constructor() {
        super();
        this.componentes;
        this.datosUs = {
            nombre: "Estefania",
            apellido: "Rodriguez",
            phone: "5624984697",
            pass: "Hola1234",
            nocuenta: 4579124107,
            notarjet: 4152472950813719,
            clabe: 5531138049050750,
            debito: 12000,
            credito: 10000,
            saldo: 8500,
            movimientos: {
                movimiento1: {
                    id: 1,
                    detalle: "Compra de chicles",
                    descripcion: "Se realiza la compra de un chicle porque tenía mucha hambre.",
                    importe: "$45"
                },
                movimiento2: {
                    id: 2,
                    detalle: "Compra de despensa",
                    descripcion: "Se realiza la compra de articulos como cereal, botes y jabon.",
                    importe: "$857"
                },
                movimiento3: {
                    id: 3,
                    detalle: "Compra ropa",
                    descripcion: "Se realiza la compra de ropa",
                    importe: "$1200"
                }
            }

        };

    }
    static styles = styles;

    static properties = {
        datosUs: Object,
    }

    login() {
        const phonec = this.shadowRoot.getElementById('phone').value;
        const passc = this.shadowRoot.getElementById('passw').value;
        const composta = document.querySelector("datos-component");

        if (phonec == this.datosUs.phone & passc == this.datosUs.pass) {
            composta.dispatchEvent(new CustomEvent('sign', { detail: this.datosUs, bubbles: true, composed: true }));
            console.log("Bienvenido");

        } else {
            alert("Usuario o contraseña incorrectos");
        }
    }

    render() {

        return html`
            <section  class="containerLogin">
                <div class="head">
                    <span id="logueo">
                        <img id="logoMain" src="https://www.bbvacreative.com/wp-content/uploads/2019/09/LogoBBVA-1.png" alt="" srcset="">
                    </span>
                    <span>
                        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                    </span>
                </div>
                
                <div class="center">
                    <input type="text" name="phone" id="phone" placeholder="Número celular">
                    <input type="password" name="pass" id="passw" placeholder="Contraseña">
                    <span>Olvidé mi contraseña</span>
                    <button @click="${this.login}" class="jala">Entrar</button>
                    <span id="foot">¿Quieres usar la app de BBVA? ¡Regístrate!</span>
                </div>

                
              
            </section>

        `;
    }
}