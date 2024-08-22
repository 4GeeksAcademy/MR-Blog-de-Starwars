import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ViewVehiculo = () => {
    const { store } = useContext(Context);
    const { id } = useParams();

    const vehiculo = store.vehiculos.find(vehiculo => vehiculo.uid === id);


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
                    <h1>{vehiculo.properties.name}</h1>
                    <p>{vehiculo.description}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam totam, quam quisquam tempore mollitia minima modi optio, dolor reiciendis ullam suscipit quae asperiores. Illo repudiandae dicta assumenda doloremque sequi numquam.</p>
                </div>
            </div>

            <hr />

            <div className="row" style={{ color: "red" }}>
                <div className="col-md-2">
                    <h6>Modelo:</h6>
                    <p>{vehiculo.properties.model}</p>
                </div>
                <div className="col-md-2">
                    <h6>Clase de vehículo:</h6>
                    <p>{vehiculo.properties.vehicle_class}</p>
                </div>
                <div className="col-md-2">
                    <h6>Manufactura:</h6>
                    <p>{vehiculo.properties.manufacturer}</p>
                </div>
                <div className="col-md-2">
                    <h6>Costo en créditos:</h6>
                    <p>{vehiculo.properties.cost_in_credits}</p>
                </div>
                <div className="col-md-2">
                    <h6>Capacidad de cargo:</h6>
                    <p>{vehiculo.properties.cargo_capacity}</p>
                </div>
                <div className="col-md-2">
                    <h6>Consumibles:</h6>
                    <p>{vehiculo.properties.consumables}</p>
                </div>
            </div>

            <hr />
        </div>
    );
};