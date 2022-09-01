export default function actionSetPage(page){

    return {
        type: 'SET_PAGE',
        payload: {
            page: page,
        },
    }
}