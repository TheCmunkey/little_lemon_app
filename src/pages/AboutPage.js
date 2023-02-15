
import Navigation from "../components/Navigation";
import HomeHeader from "../components/HomeHeader";
import Footer from "../components/Footer";

const description=
`Lorem ipsum is placeholder text commonly used in the graphic,
 print, and publishing industries for previewing layouts and visual mockups.`;

export default function AboutPage(props)
{
	return (

        <>
            <Navigation/>
            <HomeHeader description={description} />
            <main>
                <div>ABOUT</div>
            </main>
            <Footer/>
        </>

    );
}