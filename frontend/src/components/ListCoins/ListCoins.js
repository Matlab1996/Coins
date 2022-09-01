import React from "react";
import { Link } from "react-router-dom";

import './ListCoins.css';

export default function ListCoins({idCoins, listCoins}) {

    const onCoinHandler = (e) => {
        let id = e.target.id;
        idCoins(id)
        // console.log(id);
    }

    return (
        <ul className="listCoins">
            {
                listCoins.map(item => (
                    <li key={item.id} className="itemCoins">
                        <img className="imageCoin" src={`http://localhost:3003/image/${item.obverse}`} alt='description' />
                        <div className="itemDesc">
                            <p className="itemTitle">{item.name}</p>
                            <Link to='/desc' >
                                <p id={item.id} className="desc" onClick={onCoinHandler}>{item.small_desc}</p>
                            </Link>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}