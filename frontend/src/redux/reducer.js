let initialState = {
    page: 'Carts',
    listCoins: [],
    coin: [],
    countryList: [],
    metalList: [],
    qualityList: [],
    advFilter: {
        desc: '',
        country: '',
        metal: '',
        quality: '',
        priceFrom: 0,
        priceTo: 0,
        yearFrom: 0,
        yearTo: 0,
    },
};

export default function reducer(state=initialState, action){
    switch(action.type){
        case 'SET_PAGE': 
            state.page = action.payload.page;
            return {...state};

        case 'SET_LISTCOINS':
            state.listCoins = action.payload.listCoins;
            return {...state};
            
        case 'SET_COIN':
            state.coin = action.payload.coin;
            return {...state};
        
        default: 
            return state;
    }
}