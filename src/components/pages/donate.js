import React, { Component } from 'react';
import axios from 'axios';


export default class Donation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      amount: "1.00",
      errorText: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
  }

 

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: "",
    });
  }

  handleSubmit(event) {
    axios.post("https://judystrong1.pythonanywhere.com/amounts",
  {
      email: this.state.email,
      amount: this.state.amount
    },
  
 ).then(response => {
   console.log("response", response);
 }).catch(error => {
    this.setState({
      errorText: "An error occurred"
    })
 })
  .finally(this.setState({
    submitted: true
  }))
      event.preventDefault();
  }

 
  render() {

    if(this.state.submitted) {
      this.state = {
        email: "",
        amount: "1.00",
        errorText: "",
        submitted: false
      };
      return (
        <h1>Your information has been received!</h1>
      )
    }
    return ( 
  
        <div className="create">
          <h2>Donate</h2>
          <p>Please enter and submit your information using the form below and someone will contact you to complete your donation.
            A payment method is not required in this form. This only alerts us that you would like to make a donation.
          </p>

          <form onSubmit={this.handleSubmit} className="donation-form-wrapper">
            <div className="input-wrapper">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={this.state.email}
              onChange={this.handleChange}
              className="select-input"
              required 
            />
            </div>
            <div className="input-wrapper">
            <label>Donation Amount</label>
            <select
             name="amount"
             value={this.state.amount}
             onChange={this.handleChange}
             className="select-element"
            >
              <option value="1.00">$1.00</option>
              <option value="5.00">$5.00</option>
              <option value="10.00">$10.00</option>
              <option value="15.00">$15.00</option>
              <option value="20.00">$20.00</option>
              <option value="25.00">$25.00</option>
              <option value="30.00">$30.00</option>
              <option value="40.00">$40.00</option>
              <option value="50.00">$50.00</option>
              <option value="60.00">$60.00</option>
              <option value="70.00">$70.00</option>
              <option value="80.00">$80.00</option>
              <option value="90.00">$90.00</option>
              <option value="100.00">$100.00</option>
            </select>
            </div>
            <div>
            <button type="submit">Submit</button>
            </div>
          </form>
          <div>{this.state.errorText}</div>
          </div>
    )
 }
}