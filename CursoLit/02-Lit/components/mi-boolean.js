import { LitElement, html, css } from 'lit';

export class MiBoolean extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];
    static get properties() {
        return {
            message: { type: String },
            myBool: { type: Boolean },
            myArray: { type: Array },
            anotherArray: { type: Array }
        };
    }
    constructor() {
        super()
        this.message = 'Component My Boolean Component'
        this.myBool = true
        this.myArray = ['Soy', 'un', 'Arreglo', 'de', 'prueba']
        this.anotherArray = ['Soy', 'otro', 'arreglo', 'de', 'prueba']
    }

    render() {
        return html`
        <p>${this.message}</p>
        <ul>
            ${this.anotherArray.map(item => html`<li>${item}</li>`)}
        </ul>
        ${this.myBool ?
                html`<p>Renderizando de HTML si my Bool es true</p>`
                    : html`<p>Renderizado de HTML si my Bool es false</p>`}
        `;
    }
}
customElements.define('mi-boolean', MiBoolean);
