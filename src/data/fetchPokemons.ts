const getPokemons = async (id: number) => {
	try {
		const getData = await fetch('https://pokeapi.co/api/v2/pokemon/' + id).then((res) => res.json());
		return getData;
	} catch (error) {
		console.log(error);
	}
};

export default getPokemons;
