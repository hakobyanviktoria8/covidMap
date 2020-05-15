import React from "react"
class Grafic extends React.Component{
    render(){
        return(
            <div className="grafic">
                <h4>Grafic</h4>
                <iframe width="500" height="388" frameBorder="0"
                        src="https://covid19chart.org/#/?bare=1&include=US&select=US&ratio=&theme=dark&scale=linear&start=2%2F2%2F20&domain=Intl&advanced=1">
                </iframe>

            </div>
        )
    }
}
export default Grafic