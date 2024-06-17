import { LitElement, html } from "lit";
import { styles } from "./styles.js";

export default class Datos extends LitElement {
    constructor() {
        super();
        this.informacion = {};
        this.info={};
        this.formato = new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN',
        });
    }

    static styles = styles;

    static properties = {
        informacion: {
            type: Object
        },
        info: {
            type: Object
        }
    }

    handleClick(event) {
        const clickedElement = event.target;
        if (clickedElement.tagName.toLowerCase() === 'button') {
            switch (clickedElement.id) {
                case 'mov1':
                    console.log('Botón 1 clicado');
                    this.detalle(this.informacion.movimiento1);
                    break;
                case 'mov2':
                    console.log('Botón 2 clicado');
                    this.detalle(this.informacion.movimiento2);
                    break;
                case 'mov3':
                    console.log('Botón 3 clicado');
                    this.detalle(this.informacion.movimiento3);
                    break;
                default:
                    console.log('Otro botón clicado');
            }
        }
    }

    detalle(mov) {
        const composta = document.querySelector("detalles-component");
        composta.dispatchEvent(new CustomEvent('detalles', {detail:mov, bubbles: true, composed: true }));
    }

    firstUpdated() {
        this.addEventListener('sign', (ev) => this.showDashboard(ev));
    }

    showDashboard(ev) {
        this.style.display = 'block';
        document.querySelector('login-component').style.display = 'none';
        this.informacion = ev.detail.movimientos;
        this.info=ev.detail;
    }

    logout() {
        this.style.display = 'none';
        document.querySelector('login-component').style.display = 'block';
    }


    render() {
        return html`
            <section class="containerDatos">
                <div class="head">
                <h2>Buenos días ${this.info.nombre} </h2>
                    <div id="icon-top">
                        <span>
                            <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg> 
                        </span>
                        <span @click=${this.logout}>
                            <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                        </span>
                    </div>
                </div>
                
                <div class="logos">
                    <span><svg class="svglog" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z"/></svg></span>
                    <span><svg class="svglog" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></span>
                    <span><svg class="svglog" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"/></svg></span>
                    <span><svg class="svglog" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg></span>
                </div>

                <div class="center">
                    <div class="datos">
                        
                        <p> ${this.info.nombre}  ${this.info.apellido}</p>
                        <p>No. Cuenta: ${this.info.nocuenta}  </p>
                        <p>No. tarjeta: ${this.info.notarjet}</p>
                        <p>Clabe: ${this.info.clabe} </p>
                    </div>
                    
                    <section class="debito">
                        <p class="title-section">Cuenta en pesos</p>
                        <div class="debitosub">
                            <div>
                                Cuenta 
                                <svg class="minilog" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#1064f4" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                                <img src="https://storage.googleapis.com/finmatcher-mx/bbva_azul.png" alt="">
                            </div>
                            <div>
                                <p>${this.formato.format(this.info.debito)}</p>
                                <p>Saldo disponible</p>
                            </div>

                        </div>
                    </section>

                    <section class="credito">
                        <p class="title-section">Tarjetas</p>
                        <div class="creditosub">
                            <div>
                                <p>Crédito uno</p>
                            </div>
                            <div>
                                <p>${this.formato.format(this.info.credito)}</p>
                                <p>Crédito disponible</p>
                                <p>${this.formato.format(this.info.saldo)}</p>
                                <p>Saldo Utilizado</p>
                            </div>
                        </div>
                        
                    </section>

                    <section class="movimientos">
                        <p class="title-section">Movimientos</p>
                        <div @click="${this.handleClick}" class="movimientosub">
                            <button id="mov1">Movimiento 1</button>
                            <button id="mov2">Movimiento 2</button>
                            <button id="mov3">Movimiento 3</button>
                        </div>
                    </section>
                 
                </div>
                <div class="logosBot">
                    <span><svg class="svglogbot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#d0d3d7" d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z"/></svg></span>
                    <span><svg class="svglogbot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d0d3d7" d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31H476.3c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9H16c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1v5.8c0 16.9-2.8 33.5-8.3 49.1z"/></svg></span>
                    <span><svg class="svglogbot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d0d3d7" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg></span>
                    <span><svg class="svglogbot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d0d3d7" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></span>
                    <span><svg class="svglogbot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#d0d3d7" d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z"/></svg></span>
                </div>
              
            </section>
        
        `;

    }
}