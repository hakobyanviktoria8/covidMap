import React from "react"
import Running from "./Running";
class SearchTable extends React.Component{
    render(){
        return(
            <div className="searchTable">
                <table>
                    <thead>
                    <tr>
                        <th style={{padding:"5px"}}>N</th>
                        <th>Country</th>
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Active</th>
                        <th>Deaths</th>
                    </tr>
                    </thead>

                    <Running />

                </table>
            </div>
        )
    }
}
export default SearchTable