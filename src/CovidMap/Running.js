import React from "react";
import axios from 'axios';

class Running extends React.Component{
    state = {
        countries: []
    };
    componentDidMount() {
        axios.get(`https://covid19.mathdro.id/api/confirmed`)
            .then(res => {
                console.log(res);
                const countries = res.data;
                this.setState({ countries });
                console.log(countries);
            })
    }
    render(){
        return(
            <tbody>
                { this.state.countries.map((country,index) =>
                    <tr key={index.toString()}>
                        <td style={{padding: 0}}>{index +1}</td>
                        <td style={{textAlign:"left"}}>{country.countryRegion ==="US" ? country.combinedKey : country.countryRegion}</td>
                        <td>{country.confirmed}</td>
                        <td>{country.recovered}</td>
                        <td>{country.active}</td>
                        <td>{country.deaths}</td>
                    </tr>)
                }
            </tbody>
        )
    }
}
export default Running
