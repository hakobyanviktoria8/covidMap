import React from "react"
import Running from "./Running";

class SearchTable extends React.Component{
    render(){
        return(
            <div className="searchTable">
                <table>
                    <thead>
                    <tr>
                        <th style={{width:"45px"}}>N</th>
                        <th style={{width:"280px"}}>Country</th>
                        <th style={{width:"100px"}}>Confirmed</th>
                        <th style={{width:"100px"}}>Recovered</th>
                        <th style={{width:"100px"}}>Active</th>
                        <th style={{width:"100px"}}>Deaths</th>
                    </tr>
                    </thead>
                    <Running />
                </table>
            </div>
        )
    }
}
export default SearchTable