import WriteBtn from "../../components/WriteBtn"
import ListUl from "../../components/ListUl"

import useFetchData from "../../Hooks/useFetchData"

import PageContainer from "../../styles/ContainerStyle"

export default function SecretPage(){
    useFetchData({collectionName:'secret'})

    return(
        <PageContainer>
            <WriteBtn/>
            <ListUl/>
        </PageContainer>
    )
}