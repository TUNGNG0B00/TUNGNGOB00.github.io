document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let firstName = document.getElementById('fname').value;
  let lastName = document.getElementById('lname').value;
  
  let firstNameValid = NotEmpty(firstName);
  let lastNameValid = NotEmpty(lastName);

  if (!firstNameValid) {
    alert('Please enter your first name.');
  }

  if (!lastNameValid) {
    alert('Please enter your last name.');
  }

  if (firstNameValid && lastNameValid) {
    this.submit();
  }
});

function NotEmpty(name) {
  return name.trim().length > 0;
}


