import { Box, Link } from "@chakra-ui/react";

export default function Navigation()
{
	return (

		<nav>
			<Box className="nav-bar">

				<img src={require("../assets/nav-logo-new.png")} alt="Little Lemon logo"></img>

				<Link to="/" >Home</Link>
				<Link to="/" >About</Link>
				<Link to="/" >Menu</Link>
				<Link to="/" >Reservations</Link>
				<Link to="/" >Order</Link>
				<Link to="/" >Login</Link>

			</Box>
		</nav>

	);
};

