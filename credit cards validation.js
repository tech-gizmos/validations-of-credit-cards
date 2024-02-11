// program for validating a visa card
function validateCreditCard(cardNumber){
    // regex patterns for master card and visa card
    const visaStyle = /^4\d{12}(\d{3})?$/;
    const masterStyle = /^5[1-5]\d{14}$/;
    
    // checking if it matches either visa or mastercard patterns

    if (visaStyle.test(cardNumber)) {
        return "Visa card number valid"
        
    } else if (masterStyle.test(cardNumber)){
        return "Master card number valid"
        
    } else {
        return "invalid credit card number"
    }
}

const cardNumber = 4114343543545455
const result = validateCreditCard(cardNumber)
console.log(result)

