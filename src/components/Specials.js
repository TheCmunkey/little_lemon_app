import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SpecialsWidget from "../components/SpecialsWidget";

export default function Specials()
{
	return (
		<Box className="specials">

		<Box className="specials-div">

		    <Box className="specials-div-top">
			<Text className="specials-logo-name fnt-2 " >🙞 THIS WEEKS SPECIALS 🙜</Text>
			</Box>

			<Box className="specials-div-1">
			<SpecialsWidget name="Steak" price="$10.99" img_resource={require("../assets/herofood.jpg")} />
			</Box>

			<Box className="specials-div-1">
			<SpecialsWidget name="Fish" price="$8.99" img_resource={require("../assets/herofood.jpg")} />
			</Box>

			<Box className="specials-div-1">
			<SpecialsWidget name="FishFisishFisshFFishFishFishFishFishFishFish" price="$8.99" img_resource={require("../assets/herofood.jpg")} />
			</Box>

			<Box className="specials-div-bot">
			<Link className="button-yellow fnt-2" to="/menu" >Checkout our Menu</Link>
			</Box>
	
		</Box>
	</Box>
	);
};

