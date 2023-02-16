import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { NewlineText } from "../code/Utilities"


export default function HomeHeader(props)
{
	return (
		<header className="hero">
			<article className="hero-div">

				<section className="hero-div-1">
				<Text className="fnt-1" >Little Lemon</Text>
				<Text className="fnt-2" >Chicago</Text>

				<NewlineText className="fnt-3" text={props.description} />
				<Text className="fnt-3">&nbsp;</Text>
				<Link className="button-yellow fnt-2" to="/reservations" >Reserve a Table</Link>
				</section>

				<section className="hero-div-2">
					<img className="hero-img" src={require("../assets/herofood.jpg")} alt="food"></img>
				</section>

			</article>
		</header>
	);
};

