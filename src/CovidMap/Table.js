import React from "react"
import Running from "./Running";

class CountryTable extends React.Component{
 render(){
     return(
         <div className="searchTable">
            <table>
                <thead>
                <tr>
                    <th style={{width:"50px"}}>N</th>
                    <th style={{width:"200px"}}>Country</th>
                    <th style={{width:"100px"}}>Confirmed</th>
                    <th style={{width:"100px"}}>Recovered</th>
                    <th style={{width:"90px"}}>Active</th>
                    <th style={{width:"90px"}}>Deaths</th>
                    <th style={{width:"150px"}}>Last Update</th>
                </tr>
                </thead>
                <Running />
            </table>
         </div>
     )
 }
}
export default CountryTable;