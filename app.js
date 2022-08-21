function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        // console.log(pin);
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}


document.getElementById('generate-pin').addEventListener('click', function() {
    const pin = getPin();
    // console.log(pin);
    const getDIsplayPin = document.getElementById('display-pin');
    getDIsplayPin.value = pin;
})



document.getElementById('calculator').addEventListener('click', function(event) {
    // console.log(event.target.innerText);
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const prevTypednumber = typedNumberField.value;
    if (isNaN(number)) {
        // console.log(number);
        if (number === 'C') {
            typedNumberField.value = '';
        } else if (number === 'Del') {
            const digit = prevTypednumber.split('');
            digit.pop();
            const remainigdigit = digit.join('');
            typedNumberField.value = remainigdigit;
        }
    } else {
        const newNumber = prevTypednumber + number;
        typedNumberField.value = newNumber;
    }
})


document.getElementById('verify-pin').addEventListener('click', function() {
    // console.log('verify pin clicked');
    const getDIsplayPin = document.getElementById('display-pin');
    const currentPin = getDIsplayPin.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;
    const pinSuccessMsg = document.getElementById('pin-success');
    const pinFailureMsg = document.getElementById('pin-failure');
    if (typedNumber === currentPin) {
        // console.log('curretc pin');
        pinSuccessMsg.style.display = 'block';
        pinFailureMsg.style.display = 'none';
    } else {
        // console.log('incorrect pin');
        pinFailureMsg.style.display = 'block';
        pinSuccessMsg.style.display = 'none';
    }
})