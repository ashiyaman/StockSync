import { useSelector } from "react-redux"

const RemainingItems = () => {
    const itemsInInventory = useSelector(state => state.inventories)
    const removedItemsInInventory = useSelector(state => state.removedItems)

    const totalInventoryItems = itemsInInventory.reduce((acc, curr) => curr.itemQuantity + acc, 0)
    const totalRemovedItems = removedItemsInInventory.reduce((acc, curr) => curr.itemQuantity + acc, 0)

    const remainingItems = totalInventoryItems - totalRemovedItems

    return (
        <>
            <h1>Remaining Items in Inventory</h1>
            <h2>Inventory Total: {remainingItems}</h2>
        </>
    )
}

export default RemainingItems