import { Box, Text, Link,HStack } from "@chakra-ui/react";
import SpecialsWidget from "../components/SpecialsWidget";

const bfile="../assets/herofood.jpg";

export default function Specials()
{
	return (
		<Box className="specials">

		<Box className="specials-div">

		    <Box className="specials-div-top">
			<Text className="fnt-1" Style="display:inline;color:black;white-space: nowrap;">This weeks specials!</Text>
			<Link  className="online_menu_button fnt-2" to="/" >Online Menu</Link>
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

			<Box className="specials-div-1">
			<SpecialsWidget name="Chicken" price="$14.99" img_resource={require("../assets/herofood.jpg")} />
			</Box>

			<Box className="specials-div-1">
			<SpecialsWidget name="Chicken" price="$14.99" img_resource={require("../assets/herofood.jpg")} />
			</Box>

			<Box className="specials-div-1">
			<SpecialsWidget name="Chicken" price="$14.99" img_resource={require("../assets/herofood.jpg")} />
			</Box>

		</Box>
	</Box>
	);
};

