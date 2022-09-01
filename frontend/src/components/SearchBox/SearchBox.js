import React from "react";
import { Link } from "react-router-dom";

import './SearchBox.css';
import Filter from "../Filter/Filter";

export default function SearchBox({filterDesc, setAdvFilter}) {

    const onSearchHandler = () => {
        filterDesc();
        setAdvFilter({});
    };

    const onChangeDescHandler = (e) => {
        setAdvFilter(prev => {return{...prev, desc: e.target.value}});
    };

    return(
        <div>
            <div className="search">
                <p className="text">Input field</p>
                <div className="input">
                    <input type="text" onChange={onChangeDescHandler} />
                    <button onClick={onSearchHandler}><Link className='searchLink' to='/listpage'>Search</Link></button>
                </div>
            </div>
            <Filter />
        </div>
        
    )
}