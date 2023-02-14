import { useState } from "react";

import { Box, Text } from "@chakra-ui/react";
import {  Link } from "react-router-dom";

const scrollToTop = () =>
{
      window.scrollTo(0,0);
}

export default function ReservationForm(props)
{
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [telNumber, settelNumber] = useState("");
    const [guests, setguests] = useState(1);
    const [date, setDate] = useState("");
    const [occasion, setOccasion] = useState("");
    const [preferences, setPreferences] = useState("");
    const [comments, setComments] = useState("");

// 	const [finalTime, setFinalTime] = useState(
// 		props.availableTimes.map((times) => <option>{times}</option>)
// 	);
 

 	function handleDateChange(e)
 	{
 		  setDate(e.target.value);

// 		var stringify = e.target.value;
// 		const date = new Date(stringify);

// 		props.updateTimes(date);

// 		setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  return (

    <Box className="reservation-form">
    <form className="reservation-form-container">

      <Box className="rf-col-all">
      <Text>Fill out the form below you idiot.</Text>
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
          required
          minLength={2}
          maxLength={50}
          value={firstName}
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
        <label className="fnt-2" htmlFor="telNumber">Phone Number</label>
      </Box>
      <Box className="rf-col-2">
        <input
          className="fnt-2"
          type="tel"
          id="telNumber"
          placeholder="(xxx)-xxx-xxxx"
          value={telNumber}
          required
          minLength={10}
          maxLength={25}
          onChange={(e) => settelNumber(e.target.value)}
        ></input>
      </Box>

      <Box className="rf-col-1">
        <label className="fnt-2" htmlFor="guests">Number of Guests</label>
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
        <label className="fnt-2" htmlFor="date">Date</label>
      </Box>
      <Box className="rf-col-2">
        <input
          className="fnt-2"
          type="date"
          id="date"
          required
          value={date}
          onChange={handleDateChange}
        ></input>
      </Box>

{/*
      <div>
        <label htmlFor="time">Select Time</label> <br></br>
        <select id="time" required>
          {finalTime}
        </select>
      </div>

       <div>
        <label htmlFor="occasion">Occasion</label> <br></br>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="preferences">Seating preferences</label> <br></br>
        <select
          id="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        >
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
          <option>Outdoor (Sidewalk)</option>
        </select>
      </div>

      <div>
        <label htmlFor="comments">Additional Comments</label> <br></br>
        <textarea
          id="comments"
          rows={8}
          cols={50}
          placeholder="Additional Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
      </div>
*/}
      <Box className="rf-col-all">
        <br></br>
        <small>
          <p>
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
        </small>
        <Link onClick={scrollToTop} class="button-yellow fnt-2" to="/home/#" >Book Table</Link>
      </Box>

    </form>
    </Box>
  );
}




