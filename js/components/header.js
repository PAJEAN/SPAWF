try {
    (function() {
        const COMPONENT_NAME = 'wc-header';
        
        const TEMPLATE = document.createElement('template');
        TEMPLATE.innerHTML = /* html */`

            <style>
                @import url(css/style.css);
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
                #main {
                    background: rgb(var(--background-color));
                    color: rgb(var(--on-background-color));
                    /* Display */
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    /* Position */
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 1;
                    /* Size */
                    height: 100px;
                    width: 100%;
                    padding: 0 100px;
                }
            </style>        
            <div id="main">
                <div>LOGO</div>
                <div>Accueil</div>
            </div>

        `;
        
        window.customElements.define(COMPONENT_NAME, class extends HTMLElement {
            constructor() {
                super();
                this.attachShadow({mode: 'open'}); /* ShadowRoot */
            }
          
            connectedCallback() {
                this.shadowRoot.appendChild(TEMPLATE.content.cloneNode(true));
                this.content = this.shadowRoot.querySelector('#main');
            }
          
            disconnectedCallback() {}
        });
    })();
}
catch (err) {
    console.error(err);
}