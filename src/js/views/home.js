import React, { useContext } from "react"; 
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="container">
			<h1>Star Wars Entities</h1>
			<div className="row">
				<h2>Personas</h2>
				{store.personas.map(persona => (
					<div key={persona.uid} className="col-4">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">{persona.name}</h5>
								<button
									className="btn btn-primary"
									onClick={() => actions.toggleFavorito(persona.name)}>
									{store.favoritos.includes(persona.name) ? "Quitar de favoritos" : "Agregar a favoritos"}
								</button>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="row">
				<h2>Vehículos</h2>
				{store.vehiculos.map(vehiculo => (
					<div key={vehiculo.uid} className="col-4">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">{vehiculo.name}</h5>
								<button
									className="btn btn-primary"
									onClick={() => actions.toggleFavorito(vehiculo.name)}>
									{store.favoritos.includes(vehiculo.name) ? "Quitar de favoritos" : "Agregar a favoritos"}
								</button>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="row">
				<h2>Planetas</h2>
				{store.planetas.map(planeta => (
					<div key={planeta.uid} className="col-4">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">{planeta.name}</h5>
								<button
									className="btn btn-primary"
									onClick={() => actions.toggleFavorito(planeta.name)}>
									{store.favoritos.includes(planeta.name) ? "Quitar de favoritos" : "Agregar a favoritos"}
								</button>
							</div>
						</div>
					</div>
				))}
			</div>

            
		</div>
	);
};