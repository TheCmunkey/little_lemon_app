import { Box, Text } from "@chakra-ui/react";
import TestimonialsWidget from "../components/TestimonialsWidget";

export default function Testimonials()
{
	return (
		<Box className="testimonials">
			<section className="testimonials-div">
				
				<Box className="testimonials-div-top">
				<hr></hr>
				<br></br>
					<Text>🙞 TESTIMONIALS 🙜</Text>
			 	</Box>

				<Box ><TestimonialsWidget name="Bill"    quote='"I hate the place!"'/></Box>
				<Box ><TestimonialsWidget name="Susan"   quote='"You food here is garbage. I would not feed it to a dog!"' /></Box>
				<Box ><TestimonialsWidget name="John"    quote='"I hate the place!"'/></Box>
				<Box ><TestimonialsWidget name="Jessica" quote='"I hate the place!"'/></Box>

			</section>
		</Box>
	);
};

