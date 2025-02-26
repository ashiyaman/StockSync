import { useState } from "react"
import { useDispatch } from "react-redux"

import { addToStorage, removeFromStorage } from "../actions"

const AddItemForm = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [entryType, setEntryType] = useState('addToStorage')

    const addItemHandler = (e) => {
        e.preventDefault()
        const inventoryData = {
            itemName: name,
            itemQuantity: parseInt(quantity),
            entryType: entryType
        }
        entryType === 'addToStorage' ? 
            dispatch(addToStorage(inventoryData)) :
            dispatch(removeFromStorage(inventoryData))
    }

    return (
        <>
            <h1>Inventory Admin App</h1>
            <form onSubmit={(e) => addItemHandler(e)}>
                <label>Item Name:</label><br/>
                <input type='text' onChange={(e) => setName(e.target.value)}/><br/><br/>
                <label>Item Quantity:</label><br/>
                <input type='number' onChange={(e) => setQuantity(e.target.value)}/><br/><br/>
                <label>Entry Type:</label><br/>
                <select onChange={(e) => setEntryType(e.target.value)}>
                    <option value='addToStorage'>Add to Storage</option>
                    <option value='removeFromStorage'>Remove From Storage</option>
                </select><br/><br/>
                <input type='submit' value='Add Item Data'/>
            </form>
        </>
    )
}

export default AddItemForm