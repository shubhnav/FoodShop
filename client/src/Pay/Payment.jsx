import React from 'react';
import Cards from 'react-credit-cards';

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
    console.log("response",this.props)
    return (
      <>
      <>{this.props.data.name}->{this.props.data.price}</>
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          </br>
          <input
            type="tel"
            name="number"
            placeholder="Card Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          </br>
          <input
            type="tel"
            name="number"
            placeholder="Valid"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          </br>
          <input
            type="tel"
            name="number"
            placeholder="CVV"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          </br>
        </form>
      </div>
      </>
    );
  }
}
