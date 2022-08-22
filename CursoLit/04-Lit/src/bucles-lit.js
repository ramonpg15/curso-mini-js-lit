import { LitElement, html, css } from 'lit';
import './two-comp'
export class BuclesLit extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];
    static get properties() {
        return {
            tags: { type: Array },
        };
    }
    constructor() {
        super()
        this.tags = ['Javascript', 'Lit', 'Web Components', 'Custom Elements', 'Array'];
        this.tags = [...this.tags, 'FrontEnd']
    }

    render() {
        return html`
        ${this.tags.length === 0
                ? html`No hay elementos en el array` :
                html`<ul>
            ${this.tags.map(elemento => html`<li>
                <two-comp name='${elemento}'></two-comp>
            </li>`)}
        </ul>`}
        
        `;
    }
}
/* let arrayOriginal = [2, 4, 6, 7]
let doble = arrayOriginal.map((numero) => {
    return numero * 2;
})
console.log('doble', doble)
console.log('Original', arrayOriginal); */
customElements.define('bucles-lit', BuclesLit);
