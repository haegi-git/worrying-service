import { DocumentData, DocumentSnapshot, doc, getDoc } from "firebase/firestore/lite";
import { db } from "../api/firebase";
import { useEffectOnce } from "usehooks-ts";
import { useState } from "react";

import { postType } from "../types/dataTypes";

type useFetchDataProps ={
    dataId: string | undefined,
    collectionName: string | undefined
}

export default function useFetchDetailData({collectionName,dataId}: useFetchDataProps) {

    const [data,setData] = useState<DocumentData | postType>()

    useEffectOnce(()=>{
        const fetchData = async () => {
            try{
                if(dataId && collectionName){
                    const docRef = doc(db,collectionName,dataId);
                    const docSnapshot: DocumentSnapshot<DocumentData> = await getDoc(docRef);
                    if(docSnapshot.exists()){
                        const docData = docSnapshot.data();
                        const fetchedData = docData;
                        setData(fetchedData)
                    }
                }

                }catch(error){
                console.error(`${error}에러뜨는중`)
            }
        }

        fetchData()
    })
    return data
}