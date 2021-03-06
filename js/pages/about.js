try {
    (function() {
        const PAGE_NAME = 'about-contact';

        const TEMPLATE = document.createElement('template');
        TEMPLATE.innerHTML = /* html */`
            <link rel="stylesheet" href="css/style.css">

            <style>
                .container {
                    margin: 100px;
                }
            </style>

            <div id="main">
                <wc-header></wc-header>
                <div class="container">
                    <h3>Contact me !</h3>
                </div>
            </div>

        `;

        window.customElements.define(PAGE_NAME, class extends HTMLElement {
            constructor() {
                super();
            }
         
            connectedCallback () {
                this.appendChild(TEMPLATE.content.cloneNode(true));
                this.content = this.querySelector('#main');
            }
          
            disconnectedCallback () {}
        });
    })();
}
catch (err) {
    console.error(err);
}

