import React from "react";

import './Filter.css';

import store from '../../redux/store';
import actionSetPage from "../../redux/actionSetPage";

export default function Filter() {
    const onFilterHandler = (e) => {
        if(e.target.children[0]){
            if(e.target.children[0].className === "fa-solid fa-sort-down"){
                e.target.children[0].className = "fa-solid fa-sort-up";
                store.dispatch(actionSetPage('AdvancedFilter'));
            } else {
                e.target.children[0].className = "fa-solid fa-sort-down";
                store.dispatch(actionSetPage('Carts'));
            }
        } else {
            if(e.target.className === "fa-solid fa-sort-down"){
                e.target.className = "fa-solid fa-sort-up";
                store.dispatch(actionSetPage('AdvancedFilter'));
            } else {
                e.target.className = "fa-solid fa-sort-down";
                store.dispatch(actionSetPage('Carts'));
            }
        }
    };

    return(
        <p className="filter" onClick={onFilterHandler}>
            Advanced filter
            <i className="fa-solid fa-sort-down"></i>
        </p>
    )
}