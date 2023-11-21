function submitForm(event) {
event.preventDefault();
// Get form values
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const dob = document.getElementById('dob').value;
const acceptTerms = document.getElementById('acceptTerms').checked;
// Validate Date of Birth
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
<td>${acceptTerms}</td>
</tr>`;
// Append the table row to the resultTable
document.getElementById('resultTable').innerHTML = `<h2>Registration Details</h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>password</th>
<th>Date of Birth</th>
<th>Accept Terms</th>
</tr>
</thead
<tbody>
${tableRow}
</tbody>
</table>`;
return true;
}
