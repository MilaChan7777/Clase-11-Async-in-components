//Primera forma
const pokemons = fetch('https://pokeapi.co/api/v2/pokemon/10');
//los fetch son promesas

pokemons
	.then((result) => {
		return result.json();
	}) //Hasta aquí la promesa estaba a medias
	.then((data) => {
		console.log(data.name);
	}) //Aquí la resuelve
	.catch((error) => {
		console.log(error);
	});

//Segunda forma
const pokemon2 = fetch('https://pokeapi.co/api/v2/pokemon/10');

const result = pokemon2.then((res) => {
	return res.json();
});

result.then((data) => {
	console.log(data.name);
});

const getPokemons = async () => {
	try {
		const getData = await fetch('https://pokeapi.co/api/v2/pokemon/1').then((res) => res.json());
		//console.log(getData.name);
		return getData;
	} catch (error) {
		console.log(error);
	}
};

//Un botón en un componente card
setTimeout(() => {
	const name = getPokemons();
	console.log(name);
}, 3000);
