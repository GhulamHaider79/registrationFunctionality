
var userName = prompt('Enter your user name:');
var phoneNumber = prompt('Enter your phone number:');
var email = prompt('Enter your email:');
var password = prompt('Enter your password:');
var confirmPassword = prompt('Confirm your password:');


if (
    userName === null || userName === '' ||
    phoneNumber === null || phoneNumber === '' ||
    email === null || email === '' ||
    password === null || password === '' ||
    confirmPassword === null || confirmPassword === ''
) {
    document.write('Error: Please fill in all the input fields.');
} else if (password !== confirmPassword) {
    alert('Error: Password and Confirm Password should be the same.');
} else {
    alert('You are successfully registered!');
}