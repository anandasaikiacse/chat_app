export function extractTime(dateString) {
	const date = new Date(dateString);
	let hours = date.getHours();
	const minutes = padZero(date.getMinutes());
	const ampm = hours >= 12 ? 'PM' : 'AM';
	
	// Convert 24-hour format to 12-hour format
	hours = hours % 12;
	hours = hours ? hours : 12; // 0 hours should be 12

	return `${padZero(hours)}:${minutes} ${ampm}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
	return number.toString().padStart(2, "0");
}