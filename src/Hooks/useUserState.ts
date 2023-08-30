import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffectOnce } from "usehooks-ts";
import { useAppDispatch } from "../stores/store";
import { onChangeUserNickname, onChangeUserPhoto, onChangeUserUid } from "../stores/features/userState/userStateSlice";

export default function useUserState(){
    const auth = getAuth()

    const dispatch = useAppDispatch()

    useEffectOnce(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                dispatch(onChangeUserUid(user.uid))
                dispatch(onChangeUserNickname(user.displayName))
                dispatch(onChangeUserPhoto(user.photoURL))
            }else{
                dispatch(onChangeUserUid(null))
                dispatch(onChangeUserNickname(null))
                dispatch(onChangeUserPhoto(null))
            }
        })
    })
}