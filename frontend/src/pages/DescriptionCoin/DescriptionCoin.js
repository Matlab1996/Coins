import React from "react";
import { Link } from "react-router-dom";

import './DescriptionCoin.css';

export default function DescriptionCoin({coin}) {
    
    if(coin[0]){
        let title = <span>{coin[0].name}</span>;
        return(
            <div className="descPage">
                <div className="imageBlock">
                    <img className="reverse" src={`http://localhost:3003/image/${coin[0].obverse}`} alt='reverse' />
                    <img className="obverse" src={`http://localhost:3003/image/${coin[0].reverse}`} alt='obverse' />
                </div>
                <div className="descBlock">
                    <h1 className="titleCoin">{title}</h1>
                    <p className="descCoin">{coin[0].full_desc}</p>
                    <table>
                        <tbody>
                            <tr className="odd">
                                <td>Issuing Country</td>
                                <td>{coin[0].country}</td>
                            </tr>
                            <tr className="even">
                                <td>Composition</td>
                                <td>{coin[0].composition}</td>
                            </tr>
                            <tr className="odd">
                                <td>Quality</td>
                                <td>{coin[0].quality}</td>
                            </tr>
                            <tr className="even">
                                <td>Denomination</td>
                                <td>{coin[0].denomination}</td>
                            </tr>
                            <tr className="odd">
                                <td>Year</td>
                                <td>{coin[0].year}</td>
                            </tr>
                            <tr className="even">
                                <td>Weight</td>
                                <td>{coin[0].weight}</td>
                            </tr>
                            <tr className="odd">
                                <td>Price</td>
                                <td>{coin[0].price}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link className="backToList" to='/listpage'>Back to list</Link>
                </div>
            </div>
        )
    }
}