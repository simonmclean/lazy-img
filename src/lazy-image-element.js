import { LitElement, html, css } from 'lit-element';

class LazyImage extends LitElement {
    static get styles() {
        // Minimum dimensions needed for IntersectionObserver to work
        return css`
            ::slotted(img) { min-height: 1px; min-width: 1px; }
        `;
    }

    static get properties() {
        return {
            src: { type: String, reflect: true },
            canUseLazyAttr: { type: Boolean },
            intersected: { type: Boolean },
            tolerance: { type: String }, // rootMargin for IntersectionObserver
        }
    }

    constructor() {
        super();
        this.intersected = false;
        this.tolerance = '0px 0px 0px 0px';
        this.canUseLazyAttr = 'loading' in HTMLImageElement.prototype;
        if (!this.canUseLazyAttr) {
            this.setupIntersectionObserver();
        }
    }

    attributeChangedCallback(name, oldVal, newVal) {
        // Call to super to update the instance property
        super.attributeChangedCallback(name, oldVal, newVal);
        if (name ==='src' && (this.canUseLazyAttr || this.intersected)) {
            this.setImageSrc();
        }
    }

    getImage() {
        return this.children[0];
    }

    setImageSrc(value) {
        this.getImage().setAttribute('src', this.src);
    }

    setupIntersectionObserver() {
        const config = {
            rootMargin: this.tolerance,
        };
        new IntersectionObserver(
            this.intersectionObserverCallback.bind(this),
            config,
        ).observe(this.getImage());
    }

    intersectionObserverCallback(entries, observer) {
        entries.forEach(({ isIntersecting }) => {
            if (isIntersecting) {
                observer.disconnect();
                this.setImageSrc();
            }
        });
    }

    render(){
        return html`<slot/>`;
    }
}

customElements.define('lazy-img', LazyImage);
