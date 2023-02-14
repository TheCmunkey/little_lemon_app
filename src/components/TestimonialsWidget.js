import { Box, Text, Link, HStack } from "@chakra-ui/react";

export default function TestimonialsWidget(props)
{

	return (

        <Box className="testimonials-widget">
            <Text className="fnt-3"> rating </Text>
            <Text className="fnt-B">-</Text>

            <HStack>
            <img className="testimonials-widget-rating" src={require("../assets/delivery_icon.png")} alt="food"></img>
            <Text px="0.1rem" className="fnt-3">{props.name}</Text>
            </HStack>

            <Text className="fnt-B">-</Text>
            <Text className="fnt-3">This place sucks</Text>
            <Text className="fnt-B">-</Text>
        </Box>

	);
};

