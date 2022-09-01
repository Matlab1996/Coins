export default function actionCoin (coin) {

    return {
        type: 'SET_COIN',
        payload: {
            coin: coin
        }
    }
}