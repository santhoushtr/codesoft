function bookTravel() {
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const name = document.getElementById("name").value;

    const bookingDetails = `
        <h2>Booking Details</h2>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Travel Date:</strong> ${date}</p>
        <p><strong>Your Name:</strong> ${name}</p>
    `;

    document.getElementById("bookingDetails").innerHTML = bookingDetails;
}
