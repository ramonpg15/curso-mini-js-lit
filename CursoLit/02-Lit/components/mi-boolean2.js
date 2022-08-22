import { LitElement, html, css } from 'lit';

export class MiBoolean2 extends LitElement {
    static styles = [
        css`
           p{
            font-family:Roboto;
            font-size:20px;
            color:greenyellow;
            background-color:black
           }
           .fuchsia{
            color:fuchsia
           }
           .cyan{
            color:cyan
           }
           .yellow{
            color:yellow
           }
        `
    ];
    static get properties() {
        return {
            message: { type: String },
            myBool: { type: Boolean },
            myArray: { type: Array },
            myString: { type: String }
        };
    }
    constructor() {
        super()
        this.myBool = false
        this.myString='yellow'
        
    }
    clickHanler(e){
        this.myBool=!this.myBool
    }

    render() {
        return html`
        <p>Soy un texto</p>
        <p class="${this.myBool?'fuchsia':'cyan'}">Soy un texto dos</p>
        <p class="${this.myString}">Soy texto tres</p>
        <button @click="${this.clickHanler}">click</button>
        `;
    }
}
customElements.define('mi-boolean2', MiBoolean2);
