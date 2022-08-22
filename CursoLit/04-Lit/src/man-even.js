import { LitElement, html, css } from 'lit';

export class ManEven extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        <span>
            <a href="#" @click="${this.funcionManejadora}">Enlace...</a>
        </span>
        `;
    }
    funcionManejadora(e) {
        e.preventDefault()
        console.log('Manejador de eventos',this);
        if(this.tag.name == 'Lit') {
            console.log('Mi propiedad name es Lit');
        }
    }
}
customElements.define('man-even', ManEven);
