import { Link } from "@chakra-ui/react";

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

				<Link to="/" >Home&nbsp;</Link>
				<Link to="/" >About&nbsp;</Link>
				<Link to="/" >Menu&nbsp;</Link>
				<Link to="/" >Reservations&nbsp;</Link>
				<Link to="/" >Order&nbsp;</Link>
				<Link to="/" >Login&nbsp;</Link>
			</nav>

	);
};

