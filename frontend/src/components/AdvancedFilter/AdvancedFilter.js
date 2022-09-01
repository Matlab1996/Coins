import React from "react";

import './AdvancedFilter.css';

export default function AdvancedFilter({advFilter, setAdvFilter, countryList, metalList, qualityList}) {

    const onPropHandler = (e) => {
        let obj = advFilter;
        obj[e.target.name] = e.target.value;

        // console.log(obj);
        setAdvFilter(obj);
    }

    return (
        <div className="advancedFilter">
            <div className="left">
                <div className="countries">
                    <p className="label">Issuing country</p>
                    <select name="country" onChange={onPropHandler}>
                    <option value=''></option>
                        {
                            countryList.map(item => (
                                <option key={item.country} value={item.country}>{item.country}</option>
                            ))
                        }
                        
                    </select>
                </div>
                <div className="metals">
                    <p className="label">Metal</p>
                    <select name="metal" onChange={onPropHandler}>
                    <option value=''></option>
                        {
                            metalList.map(item => (
                                <option key={item.composition} value={item.composition}>{item.composition}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="quality_coin">
                    <p className="label">Quality of the coin</p>
                    <select name="quality" onChange={onPropHandler}>
                        <option value=''></option>
                        {
                            qualityList.map(item => (
                                <option key={item.quality} value={item.quality}>{item.quality}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className="right">
            <div className="price">
                    <p className="label">Price</p>
                    <div className="fromTo">
                        <label>from <input name="priceFrom" type="number" onChange={onPropHandler} /></label>
                        <label>to <input name="priceTo" type="number" onChange={onPropHandler} /></label>
                    </div>
                </div>
                <div className="year">
                    <p className="label">Year of issue</p>
                    <div className="fromTo">
                        <label>from <input name="yearFrom" type="number" onChange={onPropHandler} /></label>
                        <label>to <input name="yearTo" type="number" onChange={onPropHandler} /></label>
                    </div>
                </div>
            </div>
        </div>
    )
}