import { Box, Text } from "@chakra-ui/react";
import TestimonialsWidget from "../components/TestimonialsWidget";

export default function Testimonials()
{
	return (
		<Box className="testimonials">
			<Box className="testimonials-div">

				<Box className="testimonials-div-top">
			 	 	<Text>TESTIMONIALS</Text>
				</Box>

				<Box ><TestimonialsWidget name="Bill"/></Box>
				<Box ><TestimonialsWidget name="Susan"/></Box>
				<Box ><TestimonialsWidget name="John"/></Box>
				<Box ><TestimonialsWidget name="Jessica"/></Box>
				<Box ><TestimonialsWidget name="Susan"/></Box>
				<Box ><TestimonialsWidget name="John"/></Box>

			</Box>
		</Box>
	);
};

