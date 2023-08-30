import { createSlice } from "@reduxjs/toolkit";


export const SideMenuSlice = createSlice({
    name : 'sideMenuState',
    initialState : false,
    reducers:{
        toggleSideMenu:(state)=>{
            return state = !state
        }
    }
})

export default SideMenuSlice.reducer;
export const { toggleSideMenu } = SideMenuSlice.actions