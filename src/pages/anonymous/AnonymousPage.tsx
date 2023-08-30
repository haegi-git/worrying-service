import WriteBtn from "../../components/WriteBtn"
import ListUl from "../../components/ListUl";

import useFetchData from "../../Hooks/useFetchData";

import PageContainer from "../../styles/ContainerStyle";

export default function AnonymousPage(){

    useFetchData({ collectionName: 'anonymous' })

    return(
        <PageContainer>
            <WriteBtn />
            <ListUl/>
        </PageContainer>
    )
}