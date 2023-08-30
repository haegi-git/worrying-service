import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../api/firebase";
import { useEffectOnce } from "usehooks-ts";
import { useAppDispatch } from "../stores/store";
import { setPostsData } from "../stores/features/dataState/dataStateSlice";

type useFetchDataProps ={
    collectionName: string
}

export default function useFetchData({collectionName}: useFetchDataProps) {

    const dispatch = useAppDispatch()

    useEffectOnce(()=>{
        const fetchData = async () => {
            try{
                const querySnapshot = await getDocs(collection(db,collectionName));
                const fetchedData: any = [];
                querySnapshot.forEach((doc)=>{
                    const docData = doc.data();
                    const docPushData = {id: doc.id, ...docData};
                    fetchedData.push(docPushData)
            });
            dispatch(setPostsData(fetchedData))
        }catch(error){
                console.error(`${error}에러뜨는중`)
            }
        }

        fetchData()
    });
}