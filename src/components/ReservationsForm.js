import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import {  Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';

import {
	// Box,
	// Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
		// Heading,
	Input,
	// Select,
	// Textarea,
	// VStack,
	Center,
 } from "@chakra-ui/react";

import { submitReservationAPI } from "../code/ReservationsCode";
import { uKey } from "../code/Utilities";

export default function ReservationForm(props)
{
   function get_todays_date()
	{
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();

		today = yyyy + '-' + mm + '-' + dd;
		return(today);
	}

	const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
	const [firstName, setfirstName] = useState("");
	const [lastName, setlastName] = useState("");
	const [email, setEmail] = useState("");
	const [telNumber, settelNumber] = useState("");
	const [guests, setguests] = useState(1);
	const [date, setDate] = useState(get_todays_date());
	const [time, setTime] = useState("11:00");
	const [occasion, setOccasion] = useState("");

 	const [finalTime, setFinalTime] = useState( props.availableTimes.map((times) => <option key={uKey()} >{times}</option>));

	const guestsRegExp = "FUCK";

   const formik = useFormik({

      initialValues: {
					firstName: '',
					lastName: '',
					email: '',
					telNumber: '',
					guests: 1,
					type: 'hireMe',
					comment: ''},

      // onSubmit: (values) => {submit("https://fakeapi.com/fakeapi.json", values)},

      validationSchema: Yup.object({

         firstName: Yup.string()
            .min(1,  'Must be  1 characters or more')
            .max(50, 'Must be between 1 and 50 characters')
            .required('Required'),
         lastName: Yup.string()
            .min(1,  'Must be  1 characters or more')
            .max(50, 'Must be between 1 and 50 characters')
            .required('Required'),
         email: Yup.string()
				.email('Invalid email address')
				.required('Required'),
			telNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
			// time:
			guests: Yup.number()
				.min(1, 'You must select one guest.')
				.max(5, 'Guest cannot  exceed 5 people')
				.required('Required'),
			// occasion:
      }),
   });

	function onChangeDate(e)
 	{
		console.log(e.target.value);
		setDate(e.target.value);

		var stringify = e.target.value;
		const date = new Date(stringify);

		props.updateTimes(date);

		setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  function fuck()
  {
	   setguests(1);
  }

  const submitReservation = () =>
  {
    submitReservationAPI();
    window.scrollTo(0,0);
  }

  return (

    <Box className="reservation-form">
    <form className="reservation-form-container">

      <Box className="rf-col-top">
        <br></br>
        <Text className="fnt-2-w">🙞 RESERVATION FORM 🙜</Text>
        <Text className="fnt-2-w">Fill out the information below.</Text>
        <br></br>
      </Box>

{/***************FIRST NAME***********************/}

		<FormControl className="rf-col" isInvalid={ formik.touched.firstName && formik.errors.firstName } >
			<Box className="rf-col-1">
         	<label className=" test fnt-2" htmlFor="firstName">First Name</label>
			</Box>
			<Box className="rf-col-2">
				<input
					id="firstName"
					className="fnt-2"
					{...formik.getFieldProps('firstName')}
					placeholder='First Name.'
				/>
			</Box>
			<Box className="flex-row-break "></Box>
		   <Box className="rf-col-err">
			   <FormErrorMessage className="fnt-RF">{formik.errors.firstName}</FormErrorMessage>
			</Box>
		</FormControl>

{/**************************************/}

		<FormControl className="rf-col" isInvalid={ formik.touched.lastName && formik.errors.lastName } >
			<Box className="rf-col-1">
         	<label className="fnt-2" htmlFor="lastName">Last Name</label>
			</Box>
			<Box className="rf-col-2">
				<Input
					id="lastName"
					className="fnt-2"
					{...formik.getFieldProps('lastName')}
					placeholder='Last Name.'
				/>
			</Box>
			<Box className="flex-row-break "></Box>
		   <Box className="rf-col-err">
			   <FormErrorMessage className="fnt-RF">{formik.errors.lastName}</FormErrorMessage>
			</Box>
		</FormControl>

{/***************EMAIL***********************/}

		<FormControl className="rf-col" isInvalid={ formik.touched.email && formik.errors.email } >
			<Box className="rf-col-1">
         	<label className="fnt-2" htmlFor="email">Email</label>
			</Box>
			<Box className="rf-col-2">
				<Input
					id="email"
					type="email"
					className="fnt-2"
					{...formik.getFieldProps('email')}
					placeholder='Email.'
				/>
			</Box>
			<Box className="flex-row-break "></Box>
		   <Box className="rf-col-err">
			   <FormErrorMessage className="fnt-RF">{formik.errors.email}</FormErrorMessage>
			</Box>
		</FormControl>

{/***************TEL-NUMBER***********************/}

		<FormControl className="rf-col" isInvalid={ formik.touched.telNumber && formik.errors.telNumber } >
			<Box className="rf-col-1">
         	<label className="fnt-2" htmlFor="telNumber">Phone</label>
			</Box>
			<Box className="rf-col-2">
				<Input
					id="telNumber"
					type="tel"
					className="fnt-2"
					{...formik.getFieldProps('telNumber')}
					placeholder="(xxx)-xxx-xxxx"
				/>
			</Box>
			<Box className="flex-row-break "></Box>
		   <Box className="rf-col-err">
			   <FormErrorMessage className="fnt-RF">{formik.errors.telNumber}</FormErrorMessage>
			</Box>
		</FormControl>


{/***************DATE***********************/}

		<FormControl className="rf-col" isInvalid={ formik.touched.date && formik.errors.date } >
			<Box className="rf-col-1">
         	<label className="fnt-2" htmlFor="date">Date</label>
			</Box>
			<Box className="rf-col-2">
				<Input
					id="date"
					className="fnt-2"
					type="date"
					min={date}
					value={date}
					// {...formik.getFieldProps('date')}
					placeholder="11/11/1111"
					onChange={onChangeDate}
				/>
			</Box>
			<Box className="flex-row-break "></Box>
		   <Box className="rf-col-err">
			   <FormErrorMessage className="fnt-RF">{formik.errors.date}</FormErrorMessage>
			</Box>
		</FormControl>

      {/* </FormControl> */}

{/*****************TIME*********************/}

		<FormControl className="rf-col" isInvalid={ formik.touched.time && formik.errors.time } >
			<Box className="rf-col-1">
				<label className="fnt-2" htmlFor="time">Time</label>
			</Box>
			<Box className="rf-col-2">
				<select
					id="time"
					className="fnt-2"
					value={time}
					onChange={(e) => setTime(e.target.value)}
				>
					{finalTime}
				</select>
			</Box>
			<Box className="flex-row-break "></Box>
			<Box className="rf-col-err">
				<FormErrorMessage className="fnt-RF">{formik.errors.time}</FormErrorMessage>
			</Box>
		</FormControl>

{/*****************GUESTS*********************/}

		<FormControl className="rf-col" isInvalid={ formik.touched.guests && formik.errors.guests } >
			<Box className="rf-col-1">
         	<label className="fnt-2" htmlFor="guests">Guests</label>
			</Box>

			<NumberInput className="rf-col-2"
			    defaultValue={1}
				 min={1}
				 max={10}
				 precision={0}
				 keepWithinRange={true}
				 clampValueOnBlur={true}
			>
				<NumberInputField
					id="guests"
					// onBlur={e=>()=>{formik.setFieldValue("gthis is crape})}}
					className="fnt-2"
					min={1}
				 	max={10}
					{...formik.getFieldProps('guests')}
				/>
				<NumberInputStepper>
					<NumberIncrementStepper className="fnt-3" h={0} mt={3} mr={6}/>
					<NumberDecrementStepper className="fnt-3" h={0} mt={0} mr={6}/>
				</NumberInputStepper>
			</NumberInput>

			<Box className="flex-row-break "></Box>
		   <Box className="rf-col-err">
			   <FormErrorMessage className="fnt-RF">{formik.errors.guests}</FormErrorMessage>
			</Box>
		</FormControl>

{/*****************OCCASION*********************/}

		<FormControl className="rf-col" isInvalid={ formik.touched.occasion && formik.errors.occasion } >
			<Box className="rf-col-1">
         	<label className="fnt-2" htmlFor="occasion">Occasion</label>
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
			<Box className="flex-row-break "></Box>
		   <Box className="rf-col-err">
			   <FormErrorMessage className="fnt-RF">{formik.errors.occasion}</FormErrorMessage>
			</Box>
		</FormControl>


{/*****************OCCASION*********************/}

{/* <Box className="rf-col-1">
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
      </Box> */}

		{/* <Box className="rf-col-1">
      <label className="fnt-2" htmlFor="firstName">First Name</label>
      </Box>
      <Box className="rf-col-2">
        <br></br>
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
      </Box> */}



      <Box className="rf-col-bot">
        <hr></hr>
        <Text className="fnt-B">-</Text>
        <Text className="fnt-B">-</Text>
        <Text className="fnt-2-w">Press the button below to complete your reservation.</Text>
        <Text className="fnt-2-w">You will recieve a confirmation by email.</Text>
        <Link onClick={(e) => submitReservation()} className="button-yellow fnt-2" to="/confirm" >Complete Reservation</Link>
        <Text className="fnt-B">-</Text>
      </Box>

    </form>
    </Box>
  );
}




