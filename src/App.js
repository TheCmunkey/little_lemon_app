
import { ChakraProvider } from "@chakra-ui/react";
import './App.css';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
// // import Routing from "./components/Routing";

function App()
{
	return (

		<ChakraProvider>
		<Navigation/>
		{/* <Routing/> */}
		<Footer/>
		</ChakraProvider>

	);
}

export default App;
{/* <Hero/>
			<Highlights/>
			<Testimonials/>
			<About/> */}