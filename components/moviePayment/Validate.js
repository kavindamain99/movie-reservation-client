import valid from 'card-validator';

export default function Validate(values){
    let errors = {};
    let creditCard = valid.number(values.number);

    creditCard.expirationDate = valid.expirationDate(values.expiry);
    creditCard.cardholderName = valid.cardholderName(values.name);
    creditCard.cvv = valid.cvv(values.securityCode);

    //console.log(creditCard)

    errors.show = true;
    errors.variant = 'danger';
    errors.message = 'An unknown error occured. Please try again later'
    errors.cname = false;
    errors.cnumber = false;
    errors.cexpiry = false;
    errors.csc = false;

    return  errors;
}