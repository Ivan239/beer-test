import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import './Search.css'

const Search = (props) => {
    const [value, setValue] = useState('');
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            props.search(value)
        }
    }

    return (
        <div className="search">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Search"
                    onKeyDown={(e) => handleKey(e)}
                />
            </span>
        </div>
    )
}

export default Search