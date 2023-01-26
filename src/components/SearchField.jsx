import React, { useState} from "react";

const SearchField = () => {
    const [search, setSearch] = useState([])

    const searchHandler = (event => {
        console.log("Pokemon: ", event.target.value)
        setSearch(event.target.value)
    })

    const btnSearch = () => {
        console.log("Pokemon: ", search)
    }

    return (
        <div className="container-searchField">
            <div className="searchField">
                <input 
                placeholder="Buscar Pokemon" 
                type="text" 
                name="search"
                onChange={searchHandler} />
            </div>
            <div className="search-btn">
                <button onClick={btnSearch}>Busca</button>
            </div>
        </div>
    )
}

export default SearchField;