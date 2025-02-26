const initialState = {
    inventories: [],
    removedItems: []
}

const inventoryReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TO_STORAGE':
            return {
                ...state,
                inventories: [...state.inventories, action.payload]
            }
        case 'REMOVE_FROM_STORAGE':
            return {
                ...state,
                removedItems: [...state.removedItems, action.payload]
            }
        case 'FETCH_INVENTORY_ITEMS':
            return {
                ...state,
                inventories: action.payload
            }
        case 'FETCH_REMOVED_ITEMS':
            return {
                ...state,
                removedItems: action.payload
            }
       default:
            return state
    }
}

export default inventoryReducer