import { Box,Text } from "@chakra-ui/react";
import {  Link } from "react-router-dom";

function NewlineText(props)
{
	const text = props.text;
	const newText = text.split('\n').map(str => <Text class={props.className}>{str}</Text>);
	return newText;
}


export default function HomeHeader(props)
{
	return (
		<header className="hero">
			<article className="hero-div">

				<section className="hero-div-1">
				<Text className="fnt-1">Little Lemon</Text>
				<Text className="fnt-2">Chicago</Text>

				<NewlineText className="fnt-3" text={props.description} />
				<Text className="fnt-3">&nbsp;</Text>
				<Link class="button-yellow fnt-2" to="/reservations" >Reserve a Table</Link>
				</section>

				<section className="hero-div-2">
					<img className="hero-img" src={require("../assets/herofood.jpg")} alt="food"></img>
				</section>

			</article>
		</header>
	);
};

