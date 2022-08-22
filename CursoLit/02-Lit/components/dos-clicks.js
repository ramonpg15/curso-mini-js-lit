import { LitElement, html, css } from 'lit';

export class DosClicks extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];
    static get properties() {
        return {
            hidden: { type: Boolean },
            state: { type: Number }
        };
    }
    constructor() {
        super()
        this.hidden = false
        this.state = 0
    }
    handleClick(e) {
        this.hidden = !this.hidden
        this.state += (1 + this.hidden)
        //console.log(this.state);
    }
    handleClock(e) {
        this.hidden = !this.hidden
        this.state += (2 + this.hidden)
        console.log(e.target.value);
    }

    render() {
        return html`
        ${this.hidden ?
        html`<button @click="${this.handleClick}">Cambiar el boton</button>` 
        :html`<button @click="${this.handleClock}">Cambiar de boton</button>`
        }
        <p>${this.state}</p>
        `;
    }
}
customElements.define('dos-clicks', DosClicks);
