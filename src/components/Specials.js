import { Box, Text, Link,HStack } from "@chakra-ui/react";

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
			    <Box className="specials-inner">
				<img className="specials-img" src={require("../assets/herofood.jpg")} alt="food"></img>
				<Text px="0.2rem" className="fnt-3">STEAK</Text>
				<Text px="0.2rem" className="fnt-3">$10.99</Text>
				<Text px="0.3rem" className="fnt-B">-</Text>
				<Text px="0.3rem" className="fnt-4">sdfsdf sdf sdfsf sdf sdfsf sdf sdfsf d</Text>
				<Text px="0.3rem" className="fnt-4">sdfsdf sdf sdfsf d</Text>
				<Text className="fnt-B">-</Text>

				<HStack>
				<Text px="0.1rem" className="fnt-3">Order delivery</Text>
				<Link className="specials-img-delivery" to="/" >
				<img className="specials-img-delivery" src={require("../assets/delivery_icon.png")} alt="food"></img>
				</Link>
				</HStack>

				</Box>
			</Box>

			<Box className="specials-div-2">
			    <Box className="specials-inner">
				<img className="specials-img" src={require("../assets/herofood.jpg")} alt="food"></img>
				<Text className="fnt-3">STEAK</Text>
				<Text className="fnt-3">$10.99</Text>
				<Text className="fnt-3">sdfsdf sdf sdfsf d</Text>
				<Text className="fnt-3">sdfsdf sdf sdfsf d</Text>
				<Text className="fnt-3">sdfsdf sdf sdfsf d</Text>
				</Box>
			</Box>

			<Box className="specials-div-3">
			    <Box className="specials-inner">
				<img className="specials-img" src={require("../assets/herofood.jpg")} alt="food"></img>
				<Text className="fnt-3">STEAK</Text>
				<Text className="fnt-3">$10.99</Text>
				<Text className="fnt-3">sdfsdf sdf sdfsf d</Text>
				<Text className="fnt-3">sdfsdf sdf sdfsf d</Text>
				<Text className="fnt-3">sdfsdf sdf sdfsf d</Text>
				</Box>
			</Box>

		</Box>

	</Box>
	);
};

