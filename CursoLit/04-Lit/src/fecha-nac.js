import { LitElement, html, css } from 'lit';

export class FechaNac extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];
    static get properties() {
        return {
            birthday: { type: String },
            format: { type: String }
        };
    }
    constructor() {
        super()
        this.format = 'yyyy-mm-dd'
        this.birthday = '1999-03-15'
    }

    render() {
        return html`
        <span>${this.calculateAge(this.birthday, this.format)}</span>
        `;
    }
    calculateAge(date, format) {
        if (!date) {
            return '-';
        }
        var parts = date.match(/(\d+)/g),
            i = 0, fmt = {};
        if (!parts || parts.length != 3) {
            return 'Formato de fecha incorrecto';
        }
        format.replace(/(yyyy|dd|mm)/g, function (part) { fmt[part] = i++; });
        var birthday = +new Date(parts[fmt['yyyy']], parts[fmt['mm']] - 1, parts[fmt['dd']]);
        if (isNaN(birthday)) {
            return 'Formato de fecha incorrecto';
        }
        return ~~((Date.now() - birthday) / (31557600000));
    }
}
customElements.define('fecha-nac', FechaNac);
