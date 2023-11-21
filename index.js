function submitForm(event) {
event.preventDefault();
// Get form values
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const dob = document.getElementById('dob').value;
// Validate Date of Birth
const currentDate = new Date();
const selectedDate = new Date(dob);
const age = currentDate.getFullYear() - selectedDate.getFullYear();
if (age < 18 && age > 55) {
alert('Age must be between 18 and 55');
return;
}
// Create a table row with the form data
const tableRow = `<tr>
<td>${name}</td>
<td>${email}</td>
<td>${dob}</td>
</tr>`;
// Append the table row to the resultTable
document.getElementById('resultTable').innerHTML = `<h2>Registration Details</h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Date of Birth</th>
</tr>
</thead
<tbody>
${tableRow}
</tbody>
</table>`;
}
