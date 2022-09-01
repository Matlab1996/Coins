import React from "react";
import { Route } from "react-router-dom";
import DescriptionCoin from "./pages/DescriptionCoin/DescriptionCoin";
import HomePage from "./pages/HomePage/HomePage";
import ListPage from "./pages/ListPage/ListPage";

import './resources/fontawesome-free-6.1.1-web/css/all.css'

import store from './redux/store';
import actionListCoins from "./redux/actionListCoins";
import actionCoin from "./redux/actionCoin";

export default function App() {

    let [page, setPage] = React.useState('Carts');
    let [listCoins, setListCoins] = React.useState([]);
    let [coin, setCoin] = React.useState([]);
    let [countryList, setCountryList] = React.useState([]);
    let [metalList, setMetalList] = React.useState([]);
    let [qualityList, setQualityList] = React.useState([]);
    let [advFilter, setAdvFilter] = React.useState({
        desc: '',
        country: '',
        metal: '',
        quality: '',
        priceFrom: 0,
        priceTo: 0,
        yearFrom: 0,
        yearTo: 0,
    });

    const typeCoins = async (type) => {
        const url = `http://localhost:3003/coinlist/${type}`;
        const response = await fetch(url);
        const data = await response.json();
        store.dispatch(actionListCoins(data));
        return data;
    }

    const idCoins = async (id) => {
        const url = `http://localhost:3003/coin/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        // setCoin(data);
        store.dispatch(actionCoin(data));
        return data;
    }

    const getCountryList = async() => {
        const url = `http://localhost:3003/countrylist`;
        const response = await fetch(url);
        const data = await response.json();
        setCountryList(data);
    }

    const getMetalList = async() => {
        const url = `http://localhost:3003/metallist`;
        const response = await fetch(url);
        const data = await response.json();
        setMetalList(data);
    }
    
    const getQualityList = async() => {
        const url = `http://localhost:3003/qualitylist`;
        const response = await fetch(url);
        const data = await response.json();
        setQualityList(data);
    }

    React.useEffect(() => {
        getCountryList();
        getMetalList();
        getQualityList();

        store.subscribe(() => {
            const state = store.getState();
            setPage(state.page);
            setListCoins(state.listCoins);
            setCoin(state.coin);
        })
    })

    const filterDesc = async () => {
        let query = '';

        for(let prop in advFilter){
            query += (query) ? '&' : '';
            query += (advFilter[prop]) ? `${prop}=${advFilter[prop]}` : '';
        }

        const res = await fetch(`http://localhost:3003/filter?${query}`);
        let data = await res.json();
        store.dispatch(actionListCoins(data));
    };

    return(
        <div className="app">
            <Route exact path="/" render={() => <HomePage page={page} advFilter={advFilter} setAdvFilter={setAdvFilter} filterDesc={filterDesc} countryList={countryList} metalList={metalList} qualityList={qualityList} typeCoins={typeCoins} />} />
            <Route exact path="/listpage" render={() => <ListPage page={page} advFilter={advFilter} setAdvFilter={setAdvFilter} filterDesc={filterDesc} countryList={countryList} metalList={metalList} qualityList={qualityList} idCoins={idCoins} listCoins={listCoins} />} />
            {/* <Route exact path="/desc" render={() => <AdvancedFilter coin={coin} />} /> */}
            <Route exact path="/desc" render={() => <DescriptionCoin coin={coin} />} />
        </div>
    )
}