
import {  Link } from "react-router-dom";
import { pgTop }  from "../code/Utilities";

export default function Footer()
{
	return (
		<footer>
			<menu className="menu">

				<li className="footer_logo">
					<img src={require("../assets/footer-logo-new.png")} alt="Little Lemon logo"></img>
				</li>

				<li className="footer_navigation">
					<h1 className="footer_col_h1 fnt-2-w">Navigation</h1>

					<ul className="footer_nav_list">
						<li><h2><Link onClick={pgTop} to="/home" alt="Home">Home</Link></h2></li>
						<li><h2><Link onClick={pgTop} to="/about" alt="About">About</Link></h2></li>
						<li><h2><Link onClick={pgTop} to="/menu" alt="Menu">Menu</Link></h2></li>
						<li><h2><Link onClick={pgTop} to="/reservations" alt="Reservation">Reservation</Link></h2></li>
						<li><h2><Link onClick={pgTop} to="/order" alt="Order">Order</Link></h2></li>
						<li><h2><Link onClick={pgTop} to="/login" alt="Login">Login</Link></h2></li>
					</ul>
				</li>

				<li className="footer_contact">
					<h1 className="footer_col_h1 fnt-2-w">Contact</h1>

					<ul className="footer_nav_list">
						<li><h2 className="fnt-3-w" >2395 Maldove Way</h2></li>
						<li><h2 className="fnt-3-w" >Chicago Illinois</h2></li>
						<li><h2 className="fnt-3-w" >(629)-243-6827</h2></li>
						<li><h2>
								<a	href="mailto: info@littlelemon.com"	alt="Login">info@littlelemon.com</a>
							</h2>
						</li>
					</ul>
				</li>
				<li className="footer_find_us">
					<h1 className="footer_col_h1 fnt-2-w">Find Us</h1>
					<ul>
						<li><h2 className="fnt-3-w" >Facebook</h2></li>
						<li><h2 className="fnt-3-w" >LinkedIn</h2></li>
						<li><h2 className="fnt-3-w" >Twitter</h2></li>
						<li><h2 className="fnt-3-w" >Instagram</h2></li>
						<li><h2 className="fnt-3-w" >YouTube</h2></li>
					</ul>
				</li>

			</menu>
		</footer>

	);
};

