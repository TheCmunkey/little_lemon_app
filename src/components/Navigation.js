import { Box, HStack, Link } from "@chakra-ui/react";

export default function Navigation()
{ 
	return (
			<nav className="nav-bar">
				<Link to="/">
					<img
						className="nav-img"
						src={require("../assets/nav-logo.png")}
						alt="Little Lemon logo"
					></img>
				</Link>

				<Link to="/" >Home</Link>
				<Link to="/" >About</Link>
				<Link to="/" >Menu</Link>
				<Link to="/" >Reservations</Link>
				<Link to="/" >Order</Link>
				<Link to="/" >Login</Link>
			</nav>
	);
};


