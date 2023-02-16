import Navigation from "../components/Navigation";
import HomeHeader from "../components/HomeHeader";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Footer from "../components/Footer";

const header_description=
`Lorem ipsum is placeholder text commonly used in the graphic,
 print, and publishing industries for previewing layouts and visual mockups.`;

 const about_description=
'Established in 1489, Little Lemon has been a part of the Chicago community for 500 years!\n'+
'At our restaurant, you will experience the worst food on the planet. '+
'Our dedicated staff is surely to leave you with a feeling of disgust. The critics all agree, '+
'"Little Lemon is the worst shit on the planet..."';


export default function HomePage()
{
	return (
		<>
			<Navigation/>
			<HomeHeader description={header_description} />
			<main>
				<Specials/>
				<Testimonials/>
				<About description={about_description} />
			</main>
			<Footer/>
		</>
	);
}

