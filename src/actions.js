export const AddProduct = (value) => async dispatch =>{
        dispatch({
            type:"ADD",
            payload: value
        })
}
export const RemoveProduct = (value) => async dispatch =>{
    dispatch({
        type:"REMOVE",
        payload: {name:value}
    })
}
