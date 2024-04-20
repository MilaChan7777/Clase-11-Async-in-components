import getPokemons from './data/fetchPokemons';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		for (let i = 1; i < 11; i++) {
			//Va a hacer 5 vueltas
			const data = await getPokemons(i);
			console.log(data);
			this.render(data);
			//hola mundo jeje
		}
	}

	render(data: any) {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML += `<h1>${data.name}</h1>
			<h1>${data.weight}</h1>`;

			// this.shadowRoot.innerHTML += `<my-card name='${data.name}' weight='&{data.weight}'></my-card>`;
		}
	}
}

customElements.define('app-container', AppContainer);
