import React from 'react'

const FilterCred = ({term,PassChanger}) => {

    return (
        <div>
          <input value={term} onChange={PassChanger}/>
        </div>
    )
}

export default FilterCred
