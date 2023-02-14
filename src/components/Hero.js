import { Box,Text,Link } from "@chakra-ui/react";

export default function Hero()
{
	return (
		<Box className="hero">

			<Box className="hero-div-1">
			<Text className="fnt-1">Little Lemon</Text>
			<Text className="fnt-2">Chicago</Text>
			<Text className="fnt-3">Lorem ipsum is placeholder text commonly used in the graphic, 
			print, and publishing industries for previewing layouts and visual mockups.</Text>
			<Text className="fnt-3">&nbsp;</Text>
		    <Link  className="button-yellow fnt-2" to="/" >Reserve a Table</Link>
			</Box>

			<Box className="hero-div-2">
			<img className="hero-img" src={require("../assets/herofood.jpg")} alt="food"></img>
			</Box>

		</Box>
	);
};

