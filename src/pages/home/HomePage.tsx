import { styled } from "styled-components";

import HomeLatestList from "./HomeLatestList";

import useFetchLatestData from "../../Hooks/useFetchLatestData";

const Container = styled.div`
    h1{
        text-align: center;
        margin-top: 30px;
        font-size: 1.5em;
        }
`
const ListContainer = styled.div`
background-color: ${((props)=>props.theme.colors.background)};
    margin: auto;
    margin-top: 30px;
    border-radius: 15px;
    display: flex;
    justify-content: space-around;
    @media (max-width:768px) {
        width: 90%;
        flex-direction: column;
    }
    @media (min-width:769px) {
        width: 80%;
    }
    @media (min-width:1200px) {
        width:60%
    }
`

export default function HomePage(){
    const anonymous = useFetchLatestData({collectionName: 'anonymous'})
    const free = useFetchLatestData({collectionName: 'free'})

    return(
        <Container>

            <h1>최근 게시글</h1>

            <ListContainer>
            <HomeLatestList
            listData={anonymous}
            listTitle="익명 게시판"/>
            <HomeLatestList
            listData={free}
             listTitle="잡담소"/>
             </ListContainer>
        </Container>
    )
}