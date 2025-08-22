document.getElementById('loginBtn').addEventListener('click', function(event){
    event.preventDefault();

    // Statically declare an user mobile number and pin number for validation with user input.
    const storeMobileNumber = 12345678910;
    const storePinNumber = 1234;

    // User input collect and converted to integer;
    const userInputMobileNumber = document.getElementById('mobile-number').value;
    const userInputMobileNumberConverted = parseInt(userInputMobileNumber)
    
    const userInputPinNumber = document.getElementById('pin-number').value;
    const userInputPinNumberConverted = parseInt(userInputPinNumber)

    if (storeMobileNumber === userInputMobileNumberConverted && storePinNumber === userInputPinNumberConverted) {
        window.location.href='./home.html'
    } else {
        alert("Invalid credentials")
    }
})