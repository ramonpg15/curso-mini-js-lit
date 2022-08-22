import { LitElement, html, css } from 'lit';

export class TresClicks extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];
    static get properties() {
        return {
            clicks: { type: Number },
        };
    }
    constructor() {
        super()
        this.clicks = 0;
    }
    counter() {
        this.clicks++;
    }

    render() {
        return html`
        <button @click="${this.counter}">Click</button>
        <p>Click Counter ${this.clicks}</p>
        `;
    }
}
customElements.define('tres-clicks', TresClicks);
