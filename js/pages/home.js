try {
    (function() {
        const PAGE_NAME = 'page-home';

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
                    height: calc(100vh - 100px);
                }

                .container {
                    margin: 100px;
                }
                
            </style>

            <div id="main">
                <wc-header></wc-header>
                <div class="container">
                    <h3>New project</h3>
                    <div>
                        Begin a new project with this template !
                        <a href="#/about">About me !</a>
                    </div>
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
