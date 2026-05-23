/* Login Button Functionality */

const mobileNumber = 1234567890
const pinNUmber = 1234
document.getElementById('login-btn').addEventListener('click',function(e){
    e.preventDefault()
    const mobileNumberValue = document.getElementById('mobileNumber').value
    const convertedMobileNumberValue = parseInt(mobileNumberValue)

    const pinNUmberValue = document.getElementById('pinNumber').value
    const convertedPinNumberValue = parseInt(pinNUmberValue)

    if(mobileNumber === convertedMobileNumberValue && pinNUmber === convertedPinNumberValue){
        window.location.href='/home.html'
    } 
    else{
        alert('Invalid Credential')
    }
})