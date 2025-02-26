export const addToStorage = (inventoryData) => async (dispatch) => {
    try{
        const response = await fetch(' https://inventory-storage-app-backend-student-neog.replit.app/add-to-store', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inventoryData)
            }
        )
        const data = await response.json()
        if(data.success === true){
            dispatch({
                type: 'ADD_TO_STORAGE',
                payload: data.data
            })
        }
    }
    catch(error){
        console.log(error)
    }
}

export const removeFromStorage = (inventoryData) => async(dispatch) => {
    try{
        const response = await fetch(' https://inventory-storage-app-backend-student-neog.replit.app/remove-from-store', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inventoryData)
        })
        const data = response.json()
        if(data.success === true){
            dispatch({
                type: 'REMOVE_FROM_STORAGE',
                payload: data.data
            })
        }
    }
    catch(error){
        console.log(error)
    }
}

export const fetchInventoryItems = async (dispatch) => {
    const response = await fetch(' https://inventory-storage-app-backend-student-neog.replit.app/storage-items')

    const data = await response.json()

    if(data){
        dispatch({
            type: 'FETCH_INVENTORY_ITEMS',
            payload: data
        })
    }
}

export const fetchRemovedItems = async(dispatch) => {
    const response = await fetch('https://inventory-storage-app-backend-student-neog.replit.app/dispatched-from-store')

    const data = await response.json()

    if(data){
        dispatch({
            type: 'FETCH_REMOVED_ITEMS',
            payload: data
        })
    }
}