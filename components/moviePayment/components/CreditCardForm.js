import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import useForm from "../useForm";
import Cards from 'react-credit-cards';
import "./CreditCardForm.css";
import "react-credit-cards/es/styles-compiled.css";

const CreditCardForm = () => {
    const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
  return (
   <div className='container'>
     <div className='box justify-content-center align-items-center'>
        <div className='form-div'>
          <div className='credit-card'>
            <Cards
              name={values.name}
              number={values.number}
              expiry={values.expiration}
              cvc={values.cvc}
              focused={values.focus}
            />
          </div>
        </div>
     </div>
   </div>
  )
}

export default CreditCardForm