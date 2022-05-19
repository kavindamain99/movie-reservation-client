
import React, { useState } from "react";
import Axios from "axios";
import "./Payment.css";



function PaymentDetails() {
  const [name, setName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const addPayment = () => {
    Axios.post("http://localhost:8000/create", {
      name: name,
      phonenumber: phonenumber,
      email: email,
    }).then(() => {
      setPaymentList([
        ...paymentList,
        {
          name: name,
          phonenumber: phonenumber,
          email: email,
        },
      ]);
    });
  };



  return (
    <div className="form-style-1">
      <div className="form-style-8">
        <label>Full Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Mobile:</label>
        <input
          type="text"
          onChange={(event) => {
            setPhoneNumber(event.target.value);
          }}
        />
        <label>Email:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />


        <button class="button" onClick={addPayment}>Next</button>

      </div>
    </div>
  );

}
export default PaymentDetails;

