const form = document.querySelector('form');
const confirm booking = document.querySelector('#confirm booking');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const leavingfrom= document.querySelector('#leaving from').value;
  const travellingto = document.querySelector('#travelling to').value;
  const departuredate = document.querySelector('#departure date').value;
  const departuretime = document.querySelector('#deparure time').value;
  const passengertype = document.querySelector('#passenger-type').value;
  const journeytype = document.querySelector('#journey-type').value;
  const class = document.querySelector('class').value;
  

  confirmbooking(leavingfrom, travellingto, departuredate, departuretime, passengerype, journeytype, class);
});


function confirmbooking(leavingfrom, travellingto, departuredate, departuretime, passengertype, journeytype, class) {


  const flightnumber = [
    'Flight 1',
    'Flight 2',
    'Flight 3'
  ];

  searchResults.innerHTML = '';

  flights.forEach(function(flight) {
    const li = document.createElement('li');
    li.textContent = flight;
    searchResults.appendChild(li);
  });
}
