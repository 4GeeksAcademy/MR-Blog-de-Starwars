import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ViewPersona = () => {
    const { store } = useContext(Context);
    const { id } = useParams();

    const persona = store.personas.find(persona => persona.uid === id);


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
                    <h1>{persona.properties.name}</h1>
                    <p>{persona.description}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam totam, quam quisquam tempore mollitia minima modi optio, dolor reiciendis ullam suscipit quae asperiores. Illo repudiandae dicta assumenda doloremque sequi numquam.</p>
                </div>
            </div>

            <hr />

            <div className="row" style={{color: "red"}}>
                <div className="col-md-2">
                    <h6>Año de nacimiento:</h6>
                    <p>{persona.properties.birth_year}</p>
                </div>
                <div className="col-md-2">
                    <h6>Género:</h6>
                    <p>{persona.properties.gender}</p>
                </div>
                <div className="col-md-2">
                    <h6>Altura:</h6>
                    <p>{persona.properties.height}</p>
                </div>
                <div className="col-md-2">
                    <h6>Color de cabello:</h6>
                    <p>{persona.properties.hair_color}</p>
                </div>
                <div className="col-md-2">
                    <h6>Color de ojos:</h6>
                    <p>{persona.properties.eye_color}</p>
                </div>
                <div className="col-md-2">
                    <h6>Color de piel:</h6>
                    <p>{persona.properties.skin_color}</p>
                </div>
            </div>

            <hr />
        </div>
    );
};