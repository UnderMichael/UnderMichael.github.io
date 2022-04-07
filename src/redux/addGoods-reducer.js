let initialState = {
    goods: [
        {id: null, name: null, totalRem: null}
    ]
}

const ADD_NEW_GOODS = 'ADD_NEW_GOODS'

export const addGoods = () => ({type: ADD_NEW_GOODS})

export const addGoodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_GOODS:
            return state
        default: return state
    }
}