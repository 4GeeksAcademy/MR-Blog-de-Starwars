import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import logo from "../../img/logo.png"

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light mb-4" >

            <Link to="/">
                <img src={logo} alt="Logo" className="navbar-brand mb-0 h1"  />
            </Link>
			
			<div className="ml-auto me-3">
                <div className="dropdown">
                    <button 
                        className="btn btn-primary dropdown-toggle" 
                        type="button" 
                        id="dropdownMenuButton" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false"
                    >
                        Favoritos
                    </button>

                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                        {store.favoritos.length > 0 ? (
                            store.favoritos.map((item, index) => (
                                <li key={index} className="d-flex justify-content-between align-items-center">
                                    <span className="dropdown-item">{item}</span>
                                    <i  className="fa-solid fa-trash text-danger me-3" 
                                        style={{color: "red"}}
                                        onClick={() => actions.toggleFavorito(item, true)}
                                    ></i>
                                </li>
                            ))
                        ) : (
                            <li>
                                <span className="dropdown-item">No hay favoritos</span>
                            </li>
                        )}
                    </ul>
                </div>
			</div>
		</nav>
	);
};