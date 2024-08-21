import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">

			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			
			<div className="ml-auto">
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
                                <li key={index}>
                                    <a className="dropdown-item" href="#">
                                        {item}
                                    </a>
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