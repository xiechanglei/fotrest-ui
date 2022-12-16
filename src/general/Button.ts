import { PolymerElement, html } from '@polymer/polymer'
import { getGlobalPrefix } from 'src/config/globalName';

class Button extends PolymerElement {
    static get template() {
        return html
        `<style> 
        .button-wraper {
            display: inline-block;
            color: var(--color-matrix-text);
            background-color: var(--color-primary);
            font-size: 1.1rem;
            height: 2.5rem;
            line-height: 2.5rem;
            padding: 0 1.5rem;
            cursor: pointer;
        }
        </style>
        <div class="button-wraper"><slot/></div>
      `;
    }
}

customElements.define(getGlobalPrefix() + 'button', Button)
