import { Box, Text, HStack } from "@chakra-ui/react";

export default function TestimonialsWidget(props)
{

	return (

        <Box className="testimonials-widget">
            <Text Style="border-radius: 2px 2px 2px 2px;background-color: rgba(0,0,0,0.2);" className="fnt-5">
            <center>⭐⭐⭐⭐⭐</center>
           </Text>
            <Text className="fnt-B">-</Text>

           
            <Text px="0.1rem" className="fnt-3"><center>{props.name}</center></Text>
           

            <Text className="fnt-B">-</Text>
            <Text className="fnt-3"><center>{props.quote}</center></Text>
            <Text className="fnt-B">-</Text>
        </Box>

	);
};

