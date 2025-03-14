import { render } from 'preact'
import { App } from './app.tsx'


class MyApp extends HTMLElement {
    connectedCallback() {
        render(<App />, this);
    }
}

customElements.define('my-app', MyApp);
