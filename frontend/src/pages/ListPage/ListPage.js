import React from "react";

import AdvancedFilter from "../../components/AdvancedFilter/AdvancedFilter";
import Header from "../../components/Header/Hearder";
import ListCoins from "../../components/ListCoins/ListCoins";
import SearchBox from "../../components/SearchBox/SearchBox";
import './ListPage.css';

export default function ListPage({page,     advFilter, filterDesc, setAdvFilter, countryList, metalList, qualityList, idCoins, listCoins}) {

    return (
        <div className="listpage">
            <Header page='list' />
            <SearchBox filterDesc={filterDesc} setAdvFilter={setAdvFilter} />
            {
                (page === 'AdvancedFilter')
                ?
                    <AdvancedFilter advFilter={advFilter} setAdvFilter={setAdvFilter} countryList={countryList} metalList={metalList} qualityList={qualityList} />
                :
                    <ListCoins idCoins={idCoins} listCoins={listCoins} />
            }
        </div>
    );
}