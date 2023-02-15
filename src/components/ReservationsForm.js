import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import {  Link } from "react-router-dom";

import { submitReservationAPI } from "../code/ReservationsCode";
import { uKey } from "../code/Utilities";

export default function ReservationForm(props)
{
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [telNumber, settelNumber] = useState("");
    const [guests, setguests] = useState(1);
    const [date, setDate] = useState("");
	  const [time, setTime] = useState("11:00");
    const [occasion, setOccasion] = useState("");

 	const [finalTime, setFinalTime] = useState( props.availableTimes.map((times) => <option key={uKey()} >{times}</option>));

	function onChangeDate(e)
 	{
		console.log(e.target.value);
		setDate(e.target.value);

		var stringify = e.target.value;
		const date = new Date(stringify);

		props.updateTimes(date);

		setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  const submitReservation = () =>
  {
    submitReservationAPI();
    window.scrollTo(0,0);
  }

  return (

    <Box className="reservation-form">
    <form className="reservation-form-container">

      <Box className="rf-col-all">
        <br></br>
        <Text className="specials-logo-name fnt-2 " >🙞 RESERVATION FORM 🙜</Text>
        <Text className="fnt-2">Fill out the information below.</Text>
        <br></br>
        <hr></hr>
        <br></br>
      </Box>
      
      <Box className="rf-col-1">
      <label className="fnt-2" htmlFor="firstName">First Name</label>
      </Box>
      <Box className="rf-col-2">
        <input
          className="fnt-2"
          type="text"
          id="firstName"
          placeholder="First Name"
          minLength={2}
          maxLength={50}
          value={firstName}
          required
          onChange={(e) => setfirstName(e.target.value)}
        ></input>
      </Box>

      <Box className="rf-col-1">
        <label className="fnt-2" htmlFor="lastName">Last Name</label>
      </Box>
      <Box className="rf-col-2">
        <input
          className="fnt-2"
          type="text"
          id="lastName"
          placeholder="Last Name"
          minLength={2}
          maxLength={50}
          value={lastName}
          required
          onChange={(e) => setlastName(e.target.value)}
        ></input>
      </Box>

      <Box className="rf-col-1">
        <label className="fnt-2" htmlFor="email">Email</label>
      </Box>
      <Box className="rf-col-2">
        <input
          className="fnt-2"
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          required
          minLength={4}
          maxLength={200}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </Box>

      <Box className="rf-col-1">
        <label className="fnt-2" htmlFor="telNumber">Phone </label>
      </Box>
      <Box className="rf-col-2">
        <input
          className="fnt-2"
          type="tel"
          id="telNumber"
          placeholder="(xxx)-xxx-xxxx"
          value={telNumber}
          minLength={10}
          maxLength={25}
          onChange={(e) => settelNumber(e.target.value)}
        ></input>
      </Box>

{/* /////////////////////////////SET DATE */}

      <Box className="rf-col-1">
        <label className="fnt-2" htmlFor="date">Date</label>
      </Box>
      <Box className="rf-col-2">
			<input
				className="fnt-2"
				type="date"
				id="date"
				required
				value={date}
        onChange={onChangeDate}
			></input>
      </Box>

{/* ////////////////////////// SET TIME */}

      <Box className="rf-col-1">
       	<label className="fnt-2" htmlFor="time">Select Time</label>
      </Box>
      <Box className="rf-col-2">
        	<select
				className="fnt-2"
				id="time"
				required
				value={time}
				onChange={(e) => setTime(e.target.value)}
			>
				{finalTime}
			</select>
      </Box>


		<Box className="rf-col-1">
        <label className="fnt-2" htmlFor="guests">Guests</label>
      </Box>
      <Box className="rf-col-2">
        <input
          className="fnt-2"
          type="number"
          id="guests"
          placeholder="Number of Guests"
          value={guests}
          required
          min={1}
          max={100}
          onChange={(e) => setguests(e.target.value)}
        ></input>
      </Box>


      <Box className="rf-col-1">
        <label className="fnt-2"htmlFor="occasion">Occasion</label>
      </Box>
      <Box className="rf-col-2">
			<select
				id="occasion"
				className="fnt-2"
				value={occasion}
				onChange={(e) => setOccasion(e.target.value)}
			>
				<option key={uKey()} >None</option>
				<option key={uKey()}>Birthday</option>
				<option key={uKey()}>Anniversary</option>
				<option key={uKey()}>Engagement</option>
				<option key={uKey()}>Other</option>
			</select>
      </Box>


      <Box className="rf-col-all">
      
        <hr></hr>
        <br></br>
			<Text className="fnt-2">Press the button below to complete your reservation.</Text>
      <Text className="fnt-2">You will recieve a confirmation by email.</Text>
			<Link onClick={(e) => submitReservation()} className="button-yellow fnt-2" to="/confirm" >Complete Reservation</Link>
      <br></br>
      <br></br>
      </Box>

    </form>
    </Box>
  );
}




