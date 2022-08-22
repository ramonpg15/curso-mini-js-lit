import { LitElement, html, css } from 'lit';

export class DomClick extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];
    static get properties() {
        return {
            number: { type: Array },
        };
    }
    constructor() {
        super()
        this.number = [1, 2, 3, 4, 5]
    }
    handleClick(e) {
        console.log('Origin', e.composedPath()[0]);
    }

    render() {
        return html`
        ${this.number.map(item => html`
        <button id=button-${item} @click="${this.handleClick}">${item}</button>
        `)}
        `;
    }
}
customElements.define('dom-click', DomClick);
