import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import useForm from "../useForm";
import Cards from 'react-credit-cards'
//import 'react-credit-cards/es/styles-compiles.css'

const CreaditCardForm = () => {
    const { handleChange, handleFocus, handleSubmit, Values, errors } = useForm();
  return (
   <div>
     <div className='box justify-content-center align-items-center'>
        <div className='form-div'>
          <div className='creadit-card'>
            <Cards
              name={Values.name}
              number={Values.number}
              expiry={Values.expiration}
              cvc={Values.cvc}
              focused={values.focus}
            />
          </div>
        </div>
     </div>
   </div>
  )
}

export default CreaditCardForm