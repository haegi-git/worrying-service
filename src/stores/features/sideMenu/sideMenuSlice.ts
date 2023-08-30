import { createSlice } from "@reduxjs/toolkit";


export const SideMenuSlice = createSlice({
    name : 'sideMenuState',
    initialState : false,
    reducers:{
        toggleSideMenu:(state)=>{
            return state = !state
        },
        closeSideMenu:(state,action)=>{
            state = action.payload
        }
    }
})

export default SideMenuSlice.reducer;
export const { toggleSideMenu,closeSideMenu } = SideMenuSlice.actions