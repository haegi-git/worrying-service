import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { SideMenuSlice } from "./features/sideMenu/sideMenuSlice";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { WriteValueSlice } from "./features/writeValue/writeValueSlice";
import { JoinButtonSlice } from "./features/JoinButton/joinButtonSlice";
import { LoginButtonSlice } from "./features/LoginButton/loginButtonSlice";
import { UserStateSlice } from "./features/userState/userStateSlice";
import { EditButtonSlice } from "./features/EditButton/editButtonSlice";
import { CommentValueSlice } from "./features/comment/commentValueSlice";
import { DataStateSlice } from "./features/dataState/dataStateSlice";
import { CommentDataSLice } from "./features/comment/commentDataSlice";

export const store = configureStore({
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
  reducer:{
    sideMenu:SideMenuSlice.reducer,
    writeValue:WriteValueSlice.reducer,
    joinButton:JoinButtonSlice.reducer,
    loginButton:LoginButtonSlice.reducer,
    userState:UserStateSlice.reducer,
    editButton:EditButtonSlice.reducer,
    commentValue:CommentValueSlice.reducer,
    dataState:DataStateSlice.reducer,
    commentData:CommentDataSLice.reducer,
  }
})

export const useAppDispatch:() => typeof store.dispatch = useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
