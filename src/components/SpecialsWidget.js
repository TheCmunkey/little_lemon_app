import { Box, Text, Link, HStack } from "@chakra-ui/react";

export default function SpecialsWidget(props)
{

	return (

		<Box className="specials-inner">

		<img class="specials-img" src={props.img_resource} alt='Special' />
		<Text px="0.2rem" className="fnt-3">{props.name}</Text>
		<Text px="0.2rem" className="fnt-3">{props.img}</Text>
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

	);
};

