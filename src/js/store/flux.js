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
				const response = await fetch("https://www.swapi.tech/api/people");
				const data = await response.json();
				setStore({ personas: data.results });
			},

			fetchVehiculos: async () => {
				const response = await fetch("https://www.swapi.tech/api/vehicles");
				const data = await response.json();
				setStore({ vehiculos: data.results });
			},

			fetchPlanetas: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets");
				const data = await response.json();
				setStore({ planetas: data.results });
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
