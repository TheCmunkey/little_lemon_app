import { Link } from "react-router-dom";
import { Box, Heading,Text } from "@chakra-ui/react";

export default function ConfirmPage()
{
  return (

		<header className="confirmed-page">
			<Box className="confirmed-banner">

				<section >
					<Heading as='h1'>Your Reservation is Confirmed!</Heading>
					<Heading as='h4'>A confirmation message has been sent to your email.</Heading>
					<Heading as='h4'>Thanks for dining with Little Lemon!</Heading>
					<br></br>
					<Link className="button-yellow fnt-2" to="/menu">Browse the Menu</Link>
					<br></br><br></br>
					<Link className="button-yellow fnt-2" to="/order">Order Something Else</Link>
					<br></br><br></br>
					<Link className="button-yellow fnt-2" to="/">Back To Home Page</Link>
				</section>

			</Box>
		</header>

  );
}

