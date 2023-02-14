import {  Link } from "react-router-dom";

export default function Navigation()
{
	return (

		<nav>
			<ul className="nav-bar">

				<li><img src={require("../assets/nav-logo-new.png")} alt="Little Lemon logo"></img></li>

				<li><Link to="/home"  tabindex="1" alt="home">Home</Link></li>
				<li><Link to="/about" tabindex="2" alt="about">About</Link></li>
				<li><Link to="/menu"  tabindex="3" alt="menu">Menu</Link></li>
				<li><Link to="/reservations" tabindex="4" alt="reservations">Reservations</Link></li>
				<li><Link to="/order" tabindex="5" alt="order">Order</Link></li>
				<li><Link to="/login" tabindex="6" alt="login">Login</Link></li>

			</ul>
		</nav>

	);
};

