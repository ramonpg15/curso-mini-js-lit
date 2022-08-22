import { LitElement, html, css } from 'lit';

export class MiEmail extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            .msg {
                font-size: 0.8rem;
            }
        `
    ];
    static properties = {
        _validationMessage: { type: String }
    }

    constructor() {
        super();
        this.clearMessage();
    }

    render() {
        return html`
        <input type='text' id="email" @focus="${this.clearMessage}" @blur="${this.validateInput}">
        <div class="msg">${this._validationMessage}</div>
        `;
    }
    clearMessage() {
        this._validationMessage = 'Escribe un email'
    }
    validateInput() {
        let campoTexto = this.shadowRoot.getElementById('email').value
        if (campoTexto === '') {
            this.clearMessage()
        }
        else {
            if (this.validateEmail(campoTexto)) {
                this._validationMessage = 'Correcto'
            }
            else {
                this._validationMessage = 'Este email no es valido'
            }
        }
    }
    validateEmail(email) {
        return String(email)
            .toLowerCase()
            .match(            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
}
customElements.define('mi-email', MiEmail);
