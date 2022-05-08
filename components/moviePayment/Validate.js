import valid from 'card-validator';

export default function Validate(values){
    let errors = {}

    errors.show = true;
    errors.variant = 'danger';
    errors.message = 'An unknown error occured. Please try again later';
    errors.cname = false;
    errors.cnumber = false;
    errors.cexpiry = false;
    errors.csc = false;

    return  errors;
}