import { LitElement, html, css } from 'lit';

export class MiArreglo extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];
    static get properties() {
        return {
            names: { type: Array },
        };
    }
    constructor() {
        super()
        this.names = ['Sofia', 'Luis', 'Antonio']
    }

    render() {
        return html`
        <ul>${this.names.map(n => html`<li>${n}</li>`)}</ul>
       
        `;

    }
}
customElements.define('mi-arreglo', MiArreglo);
