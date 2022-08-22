import { LitElement, html, css } from 'lit';

export class TwoComp extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            span {
                display: inline-block;
                padding: 0.2rem 0.4rem;
                border-radius: 0.2rem;
                background-color: #666;
                color: #fff;
                font-weight: bold;
            }
        `
    ];
    static properties = {
        name: { type: String },
    }

    render() {
        return html`<span>${this.name}</span>`;
    }

}
customElements.define('two-comp', TwoComp);
