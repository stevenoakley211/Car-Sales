export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM"

export const addItem = newItemName =>{
    
    return{
        type: ADD_ITEM,
        payload: newItemName
    }
}
export const removeItem = removedItemName =>{

    return {
        type: REMOVE_ITEM,
        payload: removedItemName
    }
}