import React from "react"
class TotalConfirmed extends React.Component{
    render(){
        return(
            <div className="totalConfirmed">
                <h4>Total Confirmed</h4>
                <div style={{color:"red"}} id="totalConfirmed"></div>
            </div>
        )
    }
}
export default TotalConfirmed