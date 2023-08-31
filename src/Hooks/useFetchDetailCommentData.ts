import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../api/firebase";
import { useEffectOnce } from "usehooks-ts";
import { useAppDispatch } from "../stores/store";
import { setCommentData } from "../stores/features/comment/commentDataSlice";
import { commentItemType } from "../types/dataTypes";

type useFetchDataProps ={
    collectionName: string,
    docId: string
}

export default function useFetchDetailCommentData({
    collectionName,
    docId,}: useFetchDataProps) {

        const dispatch = useAppDispatch()

    useEffectOnce(()=>{
        const fetchData = async () => {
            try{
                const querySnapshot = await getDocs(collection(db,collectionName,docId,'comment'));
                const fetchedCommentData: commentItemType[] = [];
                querySnapshot.forEach((doc)=>{
                    const docData = doc.data();
                    const docPushData = {...docData,id: doc.id};
                    fetchedCommentData.push(docPushData)
            })
            dispatch(setCommentData(fetchedCommentData))
        }catch(error){
                console.error(`${error}에러뜨는중`)
            }
        }

        fetchData()
    })
}