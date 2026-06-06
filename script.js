/* Login Button Functionality */

const mobileNumber = 1234567890
const pinNUmber = 1234
document.getElementById('login-btn').addEventListener('click',function(e){
    e.preventDefault()
    const mobileNumberValue = parseInt(document.getElementById('mobileNumber').value)

    const pinNUmberValue = parseInt(document.getElementById('pinNumber').value)

    if(mobileNumber === mobileNumberValue && pinNUmber === pinNUmberValue){
        window.location.href='/home.html'
    } 
    else{
        alert('Invalid Credential')
    }
})