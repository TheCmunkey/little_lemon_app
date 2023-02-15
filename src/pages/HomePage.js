import Navigation from "../components/Navigation";
import HomeHeader from "../components/HomeHeader";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Footer from "../components/Footer";

const description=
`Lorem ipsum is placeholder text commonly used in the graphic,
 print, and publishing industries for previewing layouts and visual mockups.`;

export default function HomePage()
{
	return (
		<>
			<Navigation/>
			<HomeHeader description={description} />
			<main>
				<Specials/>
				<Testimonials/>
				<About/>
			</main>
			<Footer/>
		</>
	);
}

