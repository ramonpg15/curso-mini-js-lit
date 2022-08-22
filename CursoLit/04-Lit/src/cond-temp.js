import { LitElement, html, css } from 'lit';

export class CondTemp extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        ${this.active 
                ? html`<p>Estoy <b>activo</b></p>`
                : html`<p><b>NO</b> estoy activo</p>`
            }
        `;
    }
    
}
customElements.define('cond-temp', CondTemp);
