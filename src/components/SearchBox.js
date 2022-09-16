import React from 'react';

const SearchBox = ({ searchValue, setSearchValue }) => {

    return (
        <div className='col col-sm-4'>
            <input 
            className='form-control' 
            placeholder='Type to Search'
            value={searchValue}
            onChange={(event)=>setSearchValue(event.target.value)}></input>
        </div>
    );
}

export default SearchBox;
