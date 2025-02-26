import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchRemovedItems } from "../actions"

const RemovedItems = () => {
    const dispatch = useDispatch()
    const removedInventories = useSelector(state => state.removedItems)

    const removedItemstotal = removedInventories.reduce((acc, curr) => curr.itemQuantity + acc, 0)

    useEffect(() => {
        dispatch(fetchRemovedItems)
    }, [])

    return (
        <>
            <h1>Removed Items from Inventory</h1>
            <ul>
                {removedInventories.map(removedInventory => 
                    <li key={removedInventory._id}>{removedInventory.itemName}: {removedInventory.itemQuantity}</li>)}
            </ul>
            <h2>Removed Items Total: {removedItemstotal}</h2>
        </>
    )
}

export default RemovedItems