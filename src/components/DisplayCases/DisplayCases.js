import React, { Component } from 'react'
import axios from 'axios'

import DataCard from '../DataCard/DataCard'
import classes from './DisplayCases.module.css'

const dotenv = require('dotenv').config()

class DisplayCases extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cases: {
                new: 0,
                active: 0,
                recovered: 0,
                total: 0
            }
        }
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            url: 'https://covid-193.p.rapidapi.com/history',
            params: {country: this.props.country, day: this.props.date},
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_API_KEY,
                'x-rapidapi-host': 'covid-193.p.rapidapi.com'
            }
        };

        axios.request(options).then(response => {
            // this.state.cases = response.data.response[0].cases
            this.setState({cases: response.data.response[0].cases})
            console.log(response.data.response[0].cases);
        }).catch(function (error) {
            console.error(error);
        });
        
    }

    componentDidUpdate(prevProps) {
        if (this.props.country !== prevProps.country || this.props.date !== prevProps.date) {
            const options = {
                method: 'GET',
                url: 'https://covid-193.p.rapidapi.com/history',
                params: {country: this.props.country, day: this.props.date},
                headers: {
                    'x-rapidapi-key': '03467504a9msh1690e24645b22cdp11c8cajsn633d698377dc',
                    'x-rapidapi-host': 'covid-193.p.rapidapi.com'
                }
            };

            axios.request(options).then(response => {
                // this.state.cases = response.data.response[0].cases
                this.setState({cases: response.data.response[0].cases})
                console.log(response.data.response[0].cases);
            }).catch(function (error) {
                console.error(error);
            });
        }
    }

    render() {
        return (
            // <div>
            //     <p>Confirmed: {this.state.cases.confirmed}</p>
            //     <p>Recovered: {this.state.cases.recovered}</p>
            //     <p>Deaths: {this.state.cases.deaths}</p>
            //     <p>Active: {this.state.cases.active}</p>
            // </div>
            // <div>
            //     {/* <DataCard name='New' number={this.state.cases.new} /> */}
            //     <p>New: {numberWithCommas(this.state.cases.new)}</p>
            //     <p>Active: {numberWithCommas(this.state.cases.active)}</p>
            //     <p>Recovered: {numberWithCommas(this.state.cases.recovered)}</p>
            //     <p>Total: {numberWithCommas(this.state.cases.total)}</p>
            // </div>
            // <div>
            //     <p> New: <CountUp separator=',' duration={2} end={this.state.cases.new} /></p>
            //     <p> Active: <CountUp separator=',' duration={2} end={this.state.cases.active} /></p>
            //     <p> Recovered: <CountUp separator=',' duration={2} end={this.state.cases.recovered} /></p>
            //     <p> Total: <CountUp separator=',' duration={2} end={this.state.cases.total} /></p>
            // </div>
            <div className={classes.DisplayCases}>
                <DataCard name='New Cases' number={this.state.cases.new} />
                <DataCard name='Active Cases' number={this.state.cases.active} />
                <DataCard name='Recovered' number={this.state.cases.recovered} />
                <DataCard name='Total Cases' number={this.state.cases.total} />
            </div>
        )
    }
}

export default DisplayCases

