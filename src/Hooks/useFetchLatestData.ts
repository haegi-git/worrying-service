import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../api/firebase";
import { useEffectOnce } from "usehooks-ts";
import { useState } from "react";

type useFetchDataProps ={
    collectionName: string
}

export default function useFetchLatestData({collectionName}: useFetchDataProps) {

    const [fetchedData, setFetchedData] = useState([])

    useEffectOnce(()=>{
        const fetchData = async () => {
            try{
                const querySnapshot = await getDocs(collection(db,collectionName));
                const data: any = [];
                querySnapshot.forEach((doc)=>{
                    const docData = doc.data();
                    const docPushData = {id: doc.id, ...docData};
                    data.push(docPushData)
            });
            setFetchedData(data)
        }catch(error){
                console.error(`${error}에러뜨는중`)
            }
        }

        fetchData()
    });
    return fetchedData
}