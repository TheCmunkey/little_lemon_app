import { Box } from "@chakra-ui/react";

export default function About()
{

	return (
		<Box className="about">
		<Box className="about-div">

			<Box className="about-div-1">
			<img className="hero-img" src={require("../assets/herofood.jpg")} alt="food"></img>
			</Box>

			<Box className="about-div-2">
			<img className="hero-img" src={require("../assets/herofood.jpg")} alt="food"></img>
			</Box>

		</Box>
		</Box>
	);

};

