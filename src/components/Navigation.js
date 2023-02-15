import {  Link } from "react-router-dom";

export default function Navigation()
{
	return (

		<nav>
			<ul className="nav-bar">

				<li><img src={require("../assets/nav-logo-new.png")} alt="Little Lemon logo"></img></li>

				<li><Link to="/home"  tabIndex="1" alt="home">Home</Link></li>
				<li><Link to="/about" tabIndex="2" alt="about">About</Link></li>
				<li><Link to="/menu"  tabIndex="3" alt="menu">Menu</Link></li>
				<li><Link to="/reservations" tabIndex="4" alt="reservations">Reservations</Link></li>
				<li><Link to="/order" tabIndex="5" alt="order">Order</Link></li>
				<li><Link to="/login" tabIndex="6" alt="login">Login</Link></li>

			</ul>
		</nav>

	);
};

