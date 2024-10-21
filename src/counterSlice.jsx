import {createSlice} from '@reduxjs/toolkit'

const counterSlice=createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        incriment:(state)=>
        {
            state.value+=1

        },
        decriment:(state)=>{
            state.value-=1
        }


    }

})

export const {incriment,decriment}=counterSlice.actions
export default counterSlice.reducer