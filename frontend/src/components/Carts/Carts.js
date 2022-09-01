import React from "react";
import { Link } from "react-router-dom";

import './Carts.css';

import bullion from '../../resources/img/South Vietnamese Dong_1.png';
import exclusive from '../../resources/img/ISK_2.png';
import commemoretive from '../../resources/img/Looney_1.png';

export default function Carts({typeCoins}) {

    const onClickHandler = (e) => {
        switch(e.target.id){
            case 'cart1': typeCoins('bullion').then(); break;
            case 'cart2': typeCoins('exclusive'); break;
            case 'cart3': typeCoins('commemorative'); break;
            default: alert("F***");
        }
        
    }

    return(
        <div className="main">
            <div className="cart">
                <h1>Bullion coins</h1>
                <Link id="cart1" to='/listpage' onClick={onClickHandler}>Show all</Link>
                <img className="imageHome" src={bullion} alt='Bullion coins' />
            </div>
            <div className="cart">
                <h1>Exclusive coins</h1>
                <Link id="cart2" to='/listpage' onClick={onClickHandler}>Show all</Link>
                <img className="imageHome" src={exclusive} alt='Exclusive coins' />
            </div>
            <div className="cart">
                <h1>Commemoretive coins</h1>
                <Link id="cart3" to='/listpage' onClick={onClickHandler}>Show all</Link>
                <img className="imageHome" src={commemoretive} alt='Commemoretive coins' />
            </div>
        </div>
    )
}