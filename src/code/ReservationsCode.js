
export function submitReservationAPI(formData)
{
	if (Math.random() < 0.5) return true;
   return  false;
}

export function getAvailableTimesAPI(date)
{
	let availableTimes = [];

	for ( let i = 11; i <= 22; i++)
	{
		if (Math.random() < 0.25)
		{
			 if (Math.random() < 0.5) availableTimes.push(i + ":00");
			 else 				      availableTimes.push(i + ":30");
		}
	}// END  For i Loop

	if(!availableTimes.length) availableTimes.push("Nothing Available That Day");

	return(availableTimes);

}
