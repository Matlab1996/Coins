import React from "react";
import { Link } from "react-router-dom";

import './Header.css';

export default function Header({page}){
    return(
        <header>
            {
                (page === 'home')
                ?
                    <p className="title">Homepage</p>
                :
                    <div>
                        <p className="title">List of the coins</p>
                        <p className="anonimus"><Link to='/' className="anonimus">Homepage</Link>&nbsp;- List of the coins</p>
                    </div>
                    
            }
            
        </header>
    )
}