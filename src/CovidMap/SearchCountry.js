import React from "react"
class SearchCountry extends React.Component{
    render(){
        return(
            <div className="searchCountry">
                <input id="inputValue" type="search" placeholder="SearchCountry"/>
                <button id="inputSearch">O\</button>
            </div>
        )
    }
}
export default SearchCountry