import React from "react";
import axios from 'axios';

class Running extends React.Component{
    constructor(props){
        super(props);
        //hoc url + data ->
        this.getCountries();
        this.state = {
            countries:[],
        }
    }
    getCountries = async () => {
        let res = await axios.get(`https://covid19.mathdro.id/api/confirmed`);
        let countries  = res.data;
        let groupedCountries = {};
        countries.map(x => !groupedCountries.hasOwnProperty(x.countryRegion) ?
            groupedCountries[x.countryRegion] = [x] : groupedCountries[x.countryRegion].push(x));
        let totalGroupedCountries = Object.values(groupedCountries);
        // console.log(totalGroupedCountries);
        totalGroupedCountries = totalGroupedCountries.map(x => x.length === 1 ? x[0]
            : x = {
                countryRegion : x[0].countryRegion,
                confirmed : x.map(c => c.confirmed).reduce((a,b)=>a+b),
                recovered :  x.map(c => c.recovered).reduce((a,b)=>a+b),
                active :  x.map(c => c.active).reduce((a,b)=>a+b),
                deaths :  x.map(c => c.deaths).reduce((a,b)=>a+b),
            });
        totalGroupedCountries = totalGroupedCountries.sort((a,b)=>b.confirmed-a.confirmed);
        this.setState(
            {countries: totalGroupedCountries}
        );
    };
    render(){
        console.log("render");
        return(
            <tbody>
                { this.state.countries.map((country,index) =>
                    <tr key={index.toString()}>
                        <td style={{width:"45px"}}>{index +1}</td>
                        <td style={{textAlign:"left",width:"280px"}}>{country.countryRegion}</td>
                        <td style={{width:"100px"}}>{country.confirmed}</td>
                        <td style={{width:"100px"}}>{country.recovered}</td>
                        <td style={{width:"100px"}}>{country.active}</td>
                        <td style={{width:"100px"}}>{country.deaths}</td>
                    </tr>)
                }
            </tbody>
        )
    }
}
export default Running
