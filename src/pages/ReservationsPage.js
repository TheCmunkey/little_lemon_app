import Navigation from "../components/Navigation";
import HomeHeader from "../components/HomeHeader";
import ReservationsForm from "../components/ReservationsForm";
import Footer from "../components/Footer";
import { useReducer } from "react";
import { getAvailableTimesAPI } from "../code/ReservationsCode";

const description=
`We have all you can eat buffet!
Monday thru Friday 12 to 3PM.
Only $19.99 per person.`;

export default function ReservationsPage()
{
	function updateTimes(date) { return getAvailableTimesAPI(); }

	const output = getAvailableTimesAPI(new Date());

	const [availableTimes, dispatch] = useReducer(updateTimes, output);

	return (
		<>
			<Navigation/>
			<HomeHeader description={description} />
			<main>
				<ReservationsForm availableTimes={availableTimes} updateTimes={dispatch} />
			</main>
			<Footer/>
		</>
	);
}

