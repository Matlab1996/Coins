export default function actionListCoins (listCoins){

    return {
        type: 'SET_LISTCOINS',
        payload: {
            listCoins: listCoins,
        }
    }
}