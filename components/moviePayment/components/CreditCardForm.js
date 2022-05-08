import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import useForm from "../useForm";
import Cards from 'react-credit-cards';
//import "./CreditCardForm.css";
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
              expiry={values.expiry}
              cvc={values.securityCode}
              focused={values.focus}
            />
          </div>
          <Form onsubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                id="name"
                number="name"
                placeholder="Cardholder Name"
                value={values.name}
                onChange={handleChange}
                onfocus={handleFocus}
                isValid={errors.cname}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="number"
                id="number"
                number="number"
                placeholder="Cardholder Number"
                value={values.number}
                onChange={handleChange}
                onfocus={handleFocus}
                isValid={errors.cnumber}
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="text"
                    id="expiry"
                    number="expiry"
                    placeholder="Expiration Date"
                    value={values.expiry}
                    onChange={handleChange}
                    onfocus={handleFocus}
                    isValid={errors.cexpiry}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="number"
                    id="securityCode"
                    number="securityCode"
                    placeholder="Card Security Code"
                    value={values.securityCode}
                    onChange={handleChange}
                    onfocus={handleFocus}
                    isValid={errors.csc}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button size="block" id="validateButton" type="submit">
              Validate
            </Button>
          </Form>
        </div>
        <Alert id="alertMessage" variant={errors.variant} show={errors.show}>
          {errors.message}
        </Alert>
      </div>
    </div>
  );
};

export default CreditCardForm;