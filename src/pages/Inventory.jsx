import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchInventoryItems } from "../actions"

const Inventory = () => {
    const inventories = useSelector(state => state.inventories)
    const dispatch = useDispatch()

    const inventoryItemsTotal = inventories.reduce((acc, curr) => curr.itemQuantity + acc, 0)

    useEffect(() => {
        dispatch(fetchInventoryItems)
    }, [])
    
    return (
        <>
            <h1>Inventory Items</h1>
            <ul>
                {inventories.map(inventory => <li key={inventory._id}>{inventory.itemName}: {inventory.itemQuantity}</li>)}
            </ul>
            <h2>Total Inventory Items: {inventoryItemsTotal}</h2>
        </>
    )
}

export default Inventory