import React from "react";
import './HomePage.css';

import Header from "../../components/Header/Hearder";
import SearchBox from "../../components/SearchBox/SearchBox";
import Carts from "../../components/Carts/Carts";
import AdvancedFilter from "../../components/AdvancedFilter/AdvancedFilter";

export default function HomePage1({page,     advFilter, filterDesc, setAdvFilter, countryList, metalList, qualityList, typeCoins}) {

    return (
        <div className="homepage">
            <Header page={'home'} />
            <SearchBox filterDesc={filterDesc} setAdvFilter={setAdvFilter} />
            {
                (page === 'AdvancedFilter')
                ?
                    <AdvancedFilter advFilter={advFilter} setAdvFilter={setAdvFilter} countryList={countryList} metalList={metalList} qualityList={qualityList} />
                :
                    <Carts typeCoins={typeCoins} />
            }
        </div>
    )
}