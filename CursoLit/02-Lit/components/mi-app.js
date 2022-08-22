import { LitElement, html, css } from 'lit';

export class MiApp extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];
    static get properties() {
        return {
            myPropertie: {
                hasChanged(newValue, oldValue) {
                    if (newValue % 2 === 0) {
                        return newValue * 2
                    }
                    else {
                        return newValue
                    }
                }
            }
        };
    }
    render() {
        return html`
        <h1>My component</h1>
        <span>${this.myPropertie}</span>
        `;
    }
}
customElements.define('mi-app', MiApp);
