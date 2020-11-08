import React from 'react';
import Cards from 'react-credit-cards';
import { Form, Card, Button } from 'react-bootstrap';

import 'react-credit-cards/es/styles-compiled.css';

export default class PaymentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: '',
    };
  }

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <Card style={{ width: '30rem' }}>
      <Card.Body>
         <Card.Title>{this.props.data.price}</Card.Title>
         <Card.Text>
            {this.props.data.name}
         </Card.Text>
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <Form >
        	<Form.Control
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <br/>
          <Form.Control
            type="tel"
            name="name"
            pattern="[A-Za-z]{3}"
            placeholder="Card Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <br/>
          <Form.Control
            type="tel"
            pattern="[0-9]{4}"
            name="expiry"
            placeholder="Valid"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <br/>
          <Form.Control
            type="password"
            pattern="[0-9]{3}"
            name="cvc"
            placeholder="CVV"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <br/>
        </Form >
      </div>
      <Button variant="primary">Pay</Button>
      </Card.Body>
      </Card>
    );
  }
}
