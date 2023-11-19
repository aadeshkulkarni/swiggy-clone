import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        restaurant: {},
        items: []
    },
    reducers: {
        setRestaurant: (state,action) =>{
            if(action?.payload?.id === state?.restaurant?.id){
                console.log("Same restuarant, no change required")
            }
            else{
                state.restaurant = action.payload
                state.items.length = 0
            } 
        },
        addItem: (state, action) => {
            // Mutating the state here
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            let newState = []
            const itemToRemove = action.payload
            let isDeleted = false;
            for(let i=0;i<state.items.length;i++){
                if(state.items[i].card.info.id === itemToRemove.card.info.id){
                    if(!isDeleted){
                        isDeleted=true;
                    }
                    else{
                        newState.push(state.items[i])
                    }
                }
                else{
                    newState.push(state.items[i])
                }
            }
            state.items = newState
        },
        clearCart: (state) => {
            state.items.length = 0
        }
    }
})

export const { addItem, removeItem, clearCart, setRestaurant } = cartSlice.actions
export default cartSlice.reducer