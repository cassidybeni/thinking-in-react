import React from 'react'

function SearchBar(props) {
    const {searchInput, handleChange} = props

    return (
        <div>
        <input 
            type="text" 
            value={searchInput} 
            onChange={handleChange}
        />
        </div>
    )
}

export default SearchBar
