const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personas: [],
			vehiculos: [],
			planetas: [],
			favoritos: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			loadInitialData: () => {
				getActions().fetchPersonas();
				getActions().fetchVehiculos();
				getActions().fetchPlanetas();
			},

			fetchPersonas: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people");
					const data = await response.json();

					// Genera un array de promesas sin usar await en map
					const personasDetailsPromises = data.results.map((persona) => {
						return fetch(persona.url)
							.then(responseDetails => responseDetails.json())
							.then(dataDetails => dataDetails.result);
					});

					// Usa Promise.all para resolver todas las promesas en paralelo
					const personasDetails = await Promise.all(personasDetailsPromises);

					// Actualiza el store con los detalles de las personas
					setStore({ personas: personasDetails });
				} catch (error) {
					console.error("Error fetching personas:", error);
				}
			},

			fetchVehiculos: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles");
					const data = await response.json();

					// Genera un array de promesas sin usar await en map
					const vehiculosDetailsPromises = data.results.map((vehiculo) => {
						return fetch(vehiculo.url)
							.then(responseDetails => responseDetails.json())
							.then(dataDetails => dataDetails.result);
					});

					// Usa Promise.all para resolver todas las promesas en paralelo
					const vehiculosDetails = await Promise.all(vehiculosDetailsPromises);

					// Actualiza el store con los detalles de los vehiculos
					setStore({ vehiculos: vehiculosDetails });
				} catch (error) {
					console.error("Error fetching vehiculos:", error);
				}
			},

			fetchPlanetas: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets");
					const data = await response.json();

					// Genera un array de promesas sin usar await en map
					const planetasDetailsPromises = data.results.map((planeta) => {
						return fetch(planeta.url)
							.then(responseDetails => responseDetails.json())
							.then(dataDetails => dataDetails.result);
					});

					// Usa Promise.all para resolver todas las promesas en paralelo
					const planetasDetails = await Promise.all(planetasDetailsPromises);

					// Actualiza el store con los detalles de los planetas
					setStore({ planetas: planetasDetails });
				} catch (error) {
					console.error("Error fetching planetas:", error);
				}
			},



			toggleFavorito: (item, remove = false) => {
				const store = getStore();
				const favoritos = remove
					? store.favoritos.filter(fav => fav !== item)
					: store.favoritos.includes(item)
						? store.favoritos.filter(fav => fav !== item)
						: [...store.favoritos, item];
				setStore({ favoritos });
			}
		}
	};
};

export default getState;