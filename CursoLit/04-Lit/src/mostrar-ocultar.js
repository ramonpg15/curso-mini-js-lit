import { LitElement, html, css } from 'lit';

export class MostrarOcultar extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            div {
                display: none;

            }
            :host([show]) div {
                display: block;
            }
        `
    ];
    static get properties() {
        return {
            show: { type: Boolean, reflect: true },
        };
    }
    constructor() {
        super()
        this.show = false
    }

    render() {
        return html`
        <p @click="${this.change}">Mostar/Ocultar</p>
        <div>Este se ve algunas veces si y otras no</div>
        `;
    }
    change() {
        this.show = !this.show
    }
}
customElements.define('mostrar-ocultar', MostrarOcultar);
