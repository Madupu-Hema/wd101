document.addEventListener("DOMContentLoaded", function() {
// Load stored data on page load
loadTableFromLocalStorage();
});
function submitForm(event) {
event.preventDefault();
// Get form values
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const dob = document.getElementById('dob').value;
const acceptedTerms = document.getElementById('acceptTerms').checked;
const currentDate = new Date();
const selectedDate = new Date(dob);
const age = currentDate.getFullYear() - selectedDate.getFullYear();
if (age < 18 && age > 55) {
alert('Age must be between 18 and 55');
return false;
}
// Create a table row with the form data
const tableRow = `<tr>
<td>${name}</td>
<td>${email}</td>
<td>${password}</td>
<td>${dob}</td>
<td>${acceptedTerms}</td>
</tr>`;
// Append the table row to the resultTable
document.getElementById('resultTable').innerHTML += tableRow;
// Save the form data to localStorage
saveToLocalStorage(name, email, password, dob, acceptedTerms);
// Clear the form
document.getElementById('registrationForm').reset();
return true;
}
function saveToLocalStorage(name, email, password, dob, acceptedTerms) {
// Get existing data from localStorage
const existingData = JSON.parse(localStorage.getItem('formData')) || [];
// Add new data to the array
existingData.push({ name, email, password, dob, acceptedTerms });
// Save the updated array to localStorage
localStorage.setItem('formData', JSON.stringify(existingData));
}
function loadTableFromLocalStorage() {
const existingData = JSON.parse(localStorage.getItem('formData')) || [];
if (existingData.length > 0) {
const tableRows = existingData.map(data => {
return `<tr>
<td>${data.name}</td>
<td>${data.email}</td>
<td>${data.password}</td>
<td>${data.dob}</td>
<td>${data.acceptedTerms}</td>
</tr>`;
}).join('');
// Display the table
document.getElementById('resultTable').innerHTML = `<h2>Registration Details</h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Password</th>
<th>Dob</th>
<th>Accepted Terms</th>
</tr>
</thead>
<tbody>
${tableRows}
</tbody>
</table>`;
}
}
