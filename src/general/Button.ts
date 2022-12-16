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
            user-select: none;
            transition: filter 0.2s;
        }
        .button-wraper:hover {
            filter: brightness(1.1);
        }
        .button-wraper:active {
            filter: brightness(0.9);
        }
        </style>
        <div class="button-wraper"><slot/></div>
      `;
    }
}

customElements.define(getGlobalPrefix() + 'button', Button)
