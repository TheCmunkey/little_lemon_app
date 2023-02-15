
import {  Link } from "react-router-dom";
import { pgTop }  from "../code/Utilities";

export default function Footer()
{
	return (
		<footer>
			<menu>

					<li>
					<img
						src={require("../assets/footer-logo-new.png")}
						alt="Little Lemon logo"
					></img>
					</li>

					<li>
					<h1 className="fnt-2-w">Navigation</h1>
						<br></br>
						<h2><Link onClick={pgTop} className="menu_link fnt-3-w" to="/home" alt="Home">Home</Link></h2>
						<h2><Link onClick={pgTop} className="menu_link fnt-3-w" to="/about" alt="About">About</Link></h2>
						<h2><Link onClick={pgTop} className="menu_link fnt-3-w" to="/menu" alt="Menu">Menu</Link></h2>
						<h2><Link onClick={pgTop} className="menu_link fnt-3-w" to="/reservations" alt="Reservation">Reservation</Link></h2>
						<h2><Link onClick={pgTop} className="menu_link fnt-3-w" to="/order" alt="Order">Order</Link></h2>
						<h2><Link onClick={pgTop} className="menu_link fnt-3-w" to="/login" alt="Login">Login</Link></h2>
					</li>

					<li>
					<h1 className="fnt-2-w">Contact</h1>
						<br></br>
						<h2 className="fnt-3-w">Fill me</h2>
						<h2 className="fnt-3-w">Line1sdfsdfsdff</h2>
						<h2 className="fnt-3-w">Fill me</h2>
					</li>

					<li>
						<h1 className="fnt-2-w">Find Us</h1>
						<br></br>
						<h2 className="fnt-3-w">Fill me</h2>
						<h2 className="fnt-3-w">Line1sdsdff</h2>
						<h2 className="fnt-3-w">Fill me</h2>
					</li>
					{/* <li className="contact">
					<h1 className="footer-header">Navigation</h1>
					<ul className="footer-links">
						<Link to="/">Home</Link>
						<Link to="/about">About</Link>
						<a
						href={require("../assets/menu.webp")}
						target="_blank"
						rel="noreferrer"
						>
						Menu
						</a>
						<Link to="/reservations">Reservations</Link>
						<Link to="/order">Order</Link>
						<Link to="/login">Login</Link>
					</ul>
					</li>

					<li>
					<h1 className="footer-header">Contact</h1>
					<ul className="footer-links">
						<li>2395 Maldove Way,</li>
						<li>Chicago Illinois</li>
						<br></br>
						<li>(629)-243-6827</li>
						<br></br>
						<a
						href="mailto: info@littlelemon.com"
						target="_blank"
						rel="noreferrer"
						>
						info@littlelemon.com
						</a>
					</ul>
					</li>
					<li>
					<h1 className="footer-header">Connect</h1>
					<ul className="footer-links">
						<a
						href="https://www.facebook.com/thelittlelemonshop/"
						target="_blank"
						rel="noreferrer"
						>
						Facebook
						</a>
						<a
						href="https://www.instagram.com/littlelemonmoon/"
						target="_blank"
						rel="noreferrer"
						>
						Instagram
						</a>
						<a
						href="https://www.youtube.com/shorts/l3qobJDgNUQ"
						target="_blank"
						rel="noreferrer"
						>
						Join us!
						</a>
					</ul>
					</li> */}
				</menu>
		</footer>

	);
};

