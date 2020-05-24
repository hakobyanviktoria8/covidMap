import React from "react";
import axios from 'axios';
import TimeAgo from 'react-timeago';
import  { Component } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import frenchStrings from 'react-timeago/lib/language-strings/fr';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import 'ag-grid-enterprise';
import { Button } from 'reactstrap';


class Running extends React.Component{
    constructor(props){
        super(props);
        //hoc url + data ->
        this.getCountries();
        this.state = {
            formatter : buildFormatter(frenchStrings),
            countries:[],
            columnDefs: [
                // { headerName: "N", field: "n" },  rowGroup:true
                { headerName: "Country", field: "countryRegion", sortable: true, filter: true, checkboxSelection: true},
                { headerName: "Confirmed", field: "confirmed", sortable: true, filter: true, width:150},
                { headerName: "Recovered", field: "recovered", sortable: true, filter: true, width:150},
                { headerName: "Active", field: "active", sortable: true, filter: true, width:150},
                { headerName: "Deaths", field: "deaths", sortable: true, filter: true, width:150},
                { headerName: "Last Update", field: "lastUpdate", sortable: true, filter: true, width:150,
                    cellRendererFramework: function (props) {
                        return <TimeAgo date={props.value} />;
                    }
                },
            ],
            rowData: [],
        }
    }
    getCountries = async () => {
        let res = await axios.get(`https://covid19.mathdro.id/api/confirmed`);
        let countries  = res.data;
        // console.log(countries);
        let groupedCountries = {};
        countries.map(x => !groupedCountries.hasOwnProperty(x.countryRegion) ?
            groupedCountries[x.countryRegion] = [x] : groupedCountries[x.countryRegion].push(x));
        // console.log(groupedCountries);
        let totalGroupedCountries = Object.values(groupedCountries);
        // console.log(totalGroupedCountries);


        // let oneCountries = totalGroupedCountries.map((x,index) => x.length === 1 ? Object.assign(x[0],{n : index+1})
        let oneCountries = totalGroupedCountries.map(x => x.length === 1 ? x[0]
            : x = {
                // n: index+1,
                countryRegion : x[0].countryRegion,
                confirmed : x.map(c => c.confirmed).reduce((a,b)=>a+b),
                recovered :  x.map(c => c.recovered).reduce((a,b)=>a+b),
                active :  x.map(c => c.active).reduce((a,b)=>a+b),
                deaths :  x.map(c => c.deaths).reduce((a,b)=>a+b),
                lastUpdate : x[0].lastUpdate,
            });
        // console.log(oneCountries);
        oneCountries = oneCountries.sort((a,b)=>b.confirmed-a.confirmed);
        // console.log(oneCountries[0].lastUpdate);

        // oneCountries.lastUpdate = oneCountries.map(x => x.lastUpdate = (<TimeAgo date={x.lastUpdate} />).toString() );
        // console.log(oneCountries);
        // console.log(this.state.rowData[0]);
        this.setState(
            {rowData: oneCountries}
        );
        // console.log(this.state.rowData)
    };
    onClickBtn=()=>{
        const selectedCountries = this.gridApi.getSelectedNodes();
        // console.log(selectedCountries);
        const selectedCountriesName = selectedCountries.map(node => node.data.countryRegion).join(", ");
        // console.log(selectedCountriesName);
        alert(selectedCountriesName);
    };
    render(){
        console.log("render");
        return (
            <div className="ag-theme-alpine table">
                {/*<TimeAgo date='Feb 1, 1966' />*/}
                {/*<TimeAgo date={new Date(1590165163000)} />*/}
                {/*<TimeAgo date={1590165163000} />*/}

                <Button style={{margin: "10px 40%"}} color="secondary" onClick={this.onClickBtn}>Get Selected Country</Button>{' '}

                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                    rowSelection = "multiple"
                    onGridReady = {params => this.gridApi = params.api}
                />
            </div>
        );
        // return(
        //     <tbody>
        //         { this.state.countries.map((country,index) =>
        //             <tr key={index.toString()}>
        //                 <td style={{width:"50px"}}>{index +1}</td>
        //                 <td style={{textAlign:"left",width:"200px"}}>{country.countryRegion}</td>
        //                 <td style={{width:"100px"}}>{country.confirmed}</td>
        //                 <td style={{width:"100px"}}>{country.recovered}</td>
        //                 <td style={{width:"90px"}}>{country.active}</td>
        //                 <td style={{width:"90px"}}>{country.deaths}</td>
        //                 <td style={{width:"150px"}}><TimeAgo date={country.lastUpdate} /></td>
        //             </tr>
        //         )
        //         }
        //     </tbody>
        // )
    }
}
export default Running
