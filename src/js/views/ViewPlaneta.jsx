import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ViewPlaneta = () => {
    const { store } = useContext(Context);
    const { id } = useParams();

    const planeta = store.planetas.find(planeta => planeta.uid === id);


    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src="https://via.placeholder.com/500x300"
                        alt="Imagen de ejemplo"
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-6">
                    <h1>{planeta.properties.name}</h1>
                    <p>{planeta.description}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam totam, quam quisquam tempore mollitia minima modi optio, dolor reiciendis ullam suscipit quae asperiores. Illo repudiandae dicta assumenda doloremque sequi numquam.</p>
                </div>
            </div>

            <hr />

            <div className="row" style={{ color: "red" }}>
                <div className="col-md-2">
                    <h6>Modelo:</h6>
                    <p>{planeta.properties.diameter}</p>
                </div>
                <div className="col-md-2">
                    <h6>Periodo de rotación:</h6>
                    <p>{planeta.properties.rotation_period}</p>
                </div>
                <div className="col-md-2">
                    <h6>Periodo de orbita:</h6>
                    <p>{planeta.properties.orbital_period}</p>
                </div>
                <div className="col-md-2">
                    <h6>Gravedad:</h6>
                    <p>{planeta.properties.gravity}</p>
                </div>
                <div className="col-md-2">
                    <h6>Clima:</h6>
                    <p>{planeta.properties.climate}</p>
                </div>
                <div className="col-md-2">
                    <h6>Terreno:</h6>
                    <p>{planeta.properties.terrain}</p>
                </div>
            </div>

            <hr />
        </div>
    );
};