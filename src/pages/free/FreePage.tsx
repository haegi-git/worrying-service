import WriteBtn from "../../components/WriteBtn"
import ListUl from "../../components/ListUl";

import useFetchData from "../../Hooks/useFetchData";

import PageContainer from "../../styles/ContainerStyle";

import { useAppSelector } from "../../stores/store";
import { useState } from "react";
import PaginationContainer from "../../components/PaginationContainer";

export default function FreePage(){

    useFetchData({ collectionName: 'free' })

    const [currentPage,setCurrentPage] = useState(1)

    const listData = useAppSelector((state)=>state.dataState.postsData)

    const totalPosts = useAppSelector((state)=>state.dataState.totalPosts)
    // totalPosts는 파이어베이스에 들어있는 아이템의 갯수

    const itemPerPage = 10;

    const handelCurrentPage = (newPage: number) =>{
        setCurrentPage(newPage)
    }

    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const sortedListData = [...listData].sort((a,b)=>b.date - a.date)
    const displayedItems = sortedListData.slice(startIndex,endIndex)

    return(
        <PageContainer>
            <WriteBtn />
            <ListUl displayedItems={displayedItems}/>
            <PaginationContainer
            totalPosts={totalPosts}
            itemsPerPage={itemPerPage}
            currentPage={currentPage}
            handelCurrentPage={handelCurrentPage}
            />
        </PageContainer>
    )
}