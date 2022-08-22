import { LitElement, html, css } from 'lit';

export class HolaMundo extends LitElement {
    static styles = [
        css`
            p{
                color:#775AA9
            }
        `
    ];
    static get properties() {
        return { nombre: String },
            { contador: Number };
    }
    constructor() {
        super()
        this.nombre = 'Ramon'
        this.contador = 0
    }
    incremento(e) {
        this.contador++
        console.log(this.contador);
    }
    decremento(e) {
        this.contador--;
        console.log(this.contador);
    }

    render() {
        return html`Hola ${this.nombre}
<p>Hola jejeje </p>

<button @click=${this.incremento}>Aumentar contador</button>
<p>Contador: ${this.contador}</p>
<button @click=${this.decremento}>Aumentar contador</button>
`
            ;
    }
}
customElements.define('hola-mundo', HolaMundo);
