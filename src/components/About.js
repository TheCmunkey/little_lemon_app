import { Box, Text} from "@chakra-ui/react";
import { NewlineText } from "../code/Utilities";

export default function About(props)
{

	return (
		<Box className="about">
			<Box className="about-div">

				<article className="about-div-1">
					<Text className="fnt-2" >🙞 LITTLE LEMON 🙜</Text>
					<br></br>
					<NewlineText className="fnt-3" text={props.description} />
				</article>

				<Box className="about-div-2">
					<img className="about-div-img-2" src={require("../assets/Vegetable-Kabobs.webp")} alt="food"></img>
					<img className="about-div-img-1" src={require("../assets/grilled_yams.webp")} alt="food"></img> 
				</Box>

			</Box>
		</Box>
	);

};

