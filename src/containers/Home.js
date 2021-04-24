import React, { Component } from 'react';
import classes from './Home.module.css'
import DisplayCases from '../components/DisplayCases/DisplayCases'

class Home extends Component {
  // state = {
  //   country: ''
  // }
  constructor(props) {
    super(props)
    this.state = {
      country: '',
      date: '',
      shouldRenderCases: false
    }
    this.input = React.createRef()
    this.date = React.createRef()
  }

  //METHODS

  handleSubmit = (event) => {
    event.preventDefault()
    const enteredCountry = capitalizeFirstLetter(this.input.value)
    const enteredDate = this.date.value
    this.setState({
      country: enteredCountry,
      date: enteredDate,
      shouldRenderCases: true
    })
    // console.log(enteredCountry);
    event.target.reset()
  }

  render() {
    const display = this.state.shouldRenderCases ? <DisplayCases country={this.state.country} date={this.state.date} /> : null
    return (
      <div className={classes.Home}>
        <h1>COVID-19 Tracker App</h1>
        <div className={classes.form}>
        <form onSubmit={this.handleSubmit}>
          {/* <input type='text' ref={input => this.input = input} placeholder='Country' required /> */}
          <input type='date' ref={date => this.date = date} placeholder='Date' required/>
          <button type='submit'>Submit</button>
        </form>
        </div>
        {/* <p>{this.state.country}</p>
        <p>{this.state.date}</p> */}
        {display}
      </div>
    );

  }
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Home;