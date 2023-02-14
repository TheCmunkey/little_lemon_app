import Navigation from "../components/Navigation";
import HomeHeader from "../components/HomeHeader";
import ReservationsForm from "../components/ReservationsForm";
import Footer from "../components/Footer";

const description=
"We have all you can eat buffet!\n"+
"Monday thru Friday 12 to 3PM.\n"+
"Only $19.99 per person.";

export default function ReservationsPage()
{
  return (
    <>
      <Navigation/>
      <HomeHeader description={description} />
        <main>
          <ReservationsForm/>
        </main>
      <Footer/>
    </>
  );
}

