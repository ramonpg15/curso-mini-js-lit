import { LitElement, html, css } from 'lit';

export class MyApp extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];
    static get properties() {
        return {
            personas: { type: Array },
            object: { type: Object }
        };
    }
    constructor() {
        super()
        this.object = { myProp: 'Initial value' }
    }
    handleClick(){
        this.object.myProp='New Value'
    }
    /**
     * The render function returns a template literal that contains a string, a variable, and an event
     * listener
     * @returns A template literal with a string and a variable.
     */
    render() {
        return html`Hola mundo desde el js
        <h2>${this.object.myProp}</h2>
        <button @click=${this.handleClick}>Click me</button>
        `;
    }
}
customElements.define('my-app', MyApp);
