import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { SideMenuSlice } from "./features/sideMenu/sideMenuSlice";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { WriteValueSlice } from "./features/writeValue/writeValueSlice";

import { SigninStateSlice } from "./features/signinState/signinStateSlice";
import { UserStateSlice } from "./features/userState/userStateSlice";
import { EditButtonSlice } from "./features/EditButton/editButtonSlice";
import { CommentValueSlice } from "./features/comment/commentValueSlice";
import { DataStateSlice } from "./features/dataState/dataStateSlice";
import { CommentDataSLice } from "./features/comment/commentDataSlice";
import { SignupStateSlice } from "./features/signupState/signupStateSlice";
import { LatestDataSlice } from "./features/latestData/latestDataSlice";
import { ProfileStateSlice } from "./features/profileState/profileStateSlice";

export const store = configureStore({
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
  reducer:{
    sideMenu:SideMenuSlice.reducer,
    writeValue:WriteValueSlice.reducer,
    signupState:SignupStateSlice.reducer,
    signinState:SigninStateSlice.reducer,
    userState:UserStateSlice.reducer,
    editButton:EditButtonSlice.reducer,
    commentValue:CommentValueSlice.reducer,
    dataState:DataStateSlice.reducer,
    commentData:CommentDataSLice.reducer,
    latestData:LatestDataSlice.reducer,
    profileState:ProfileStateSlice.reducer
  }
})

export const useAppDispatch:() => typeof store.dispatch = useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
