import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
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
							<img
								src="https://via.placeholder.com/400x200"
								alt="Imagen de ejemplo"
								className="img-fluid"
							/>
							<div className="card-body">
								<h5 className="card-title display-6">{persona.properties.name}</h5><br />
								<p><strong>Género:</strong> {persona.properties.gender}</p>
								<p><strong>Color de cabello:</strong> {persona.properties.hair_color}</p>

								<div className="d-flex justify-content-between mt-3">


									<Link to={`/ViewPersona/${persona.uid}`}>
										<button className="btn btn-outline-primary mr-2">
											Leer más!
										</button>
									</Link>

									<button
										className="btn btn-outline-warning"
										onClick={() => actions.toggleFavorito(persona.properties.name)}
									>
										<i
											className={`${store.favoritos.includes(persona.properties.name) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}`}
										></i>
									</button>
								</div>

							</div>
						</div>
					</div>
				))}
			</div>

			<br /><br />
			<div className="row">
				<h2>Vehículos</h2>
				{store.vehiculos.map(vehiculo => (
					<div key={vehiculo.uid} className="col-4">
						<div className="card">
							<img
								src="https://via.placeholder.com/400x200"
								alt="Imagen de ejemplo"
								className="img-fluid"
							/>
							<div className="card-body">
								<h5 className="card-title display-6">{vehiculo.properties.name}</h5><br />
								<p><strong>Modelo:</strong> {vehiculo.properties.model}</p>
								<p><strong>Marca:</strong> {vehiculo.properties.manufacturer}</p>

								<div className="d-flex justify-content-between mt-3">

								<Link to={`/ViewVehiculo/${vehiculo.uid}`}>
										<button className="btn btn-outline-primary mr-2">
											Leer más!
										</button>
									</Link>


									<button
										className="btn btn-outline-warning"
										onClick={() => actions.toggleFavorito(vehiculo.properties.name)}
									>
										<i
											className={`${store.favoritos.includes(vehiculo.properties.name) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}`}
										></i>
									</button>
								</div>


							</div>
						</div>
					</div>
				))}
			</div>

			<br /><br />
			<div className="row">
				<h2>Planetas</h2>
				{store.planetas.map(planeta => (
					<div key={planeta.uid} className="col-4">
						<div className="card">
							<img
								src="https://via.placeholder.com/400x200"
								alt="Imagen de ejemplo"
								className="img-fluid"
							/>
							<div className="card-body">
								<h5 className="card-title display-6">{planeta.properties.name}</h5><br />
								<p><strong>Poblacion:</strong> {planeta.properties.population}</p>
								<p><strong>Terreno:</strong> {planeta.properties.terrain}</p>


								<div className="d-flex justify-content-between mt-3">

								<Link to={`/ViewPlaneta/${planeta.uid}`}>
										<button className="btn btn-outline-primary mr-2">
											Leer más!
										</button>
									</Link>

									<button
										className="btn btn-outline-warning"
										onClick={() => actions.toggleFavorito(planeta.properties.name)}
									>
										<i
											className={`${store.favoritos.includes(planeta.properties.name) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}`}
										></i>
									</button>
								</div>


							</div>
						</div>
					</div>


				))}
			</div>
		</div>
	);
};