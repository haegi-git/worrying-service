import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffectOnce } from "usehooks-ts";
import { useAppDispatch } from "../stores/store";
import { onChangeUserNickname, onChangeUserPhoto, onChangeUserUid } from "../stores/features/userState/userStateSlice";
import { onChangeProfileUserNickname, onChangeProfileUserPhoto, onChangeProfileUserUid } from "../stores/features/profileState/profileStateSlice";

export default function useUserState(){
    const auth = getAuth()

    const dispatch = useAppDispatch()

    useEffectOnce(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                dispatch(onChangeUserUid(user.uid))
                dispatch(onChangeUserNickname(user.displayName))
                dispatch(onChangeUserPhoto(user.photoURL))

                dispatch(onChangeProfileUserNickname(user.displayName))
                dispatch(onChangeProfileUserUid(user.uid))
                dispatch(onChangeProfileUserPhoto(user.photoURL))
            }else{
                dispatch(onChangeUserUid(null))
                dispatch(onChangeUserNickname(null))
                dispatch(onChangeUserPhoto(null))

                dispatch(onChangeProfileUserNickname(null))
                dispatch(onChangeProfileUserUid(null))
                dispatch(onChangeProfileUserPhoto(null))
            }
        })
    })
}