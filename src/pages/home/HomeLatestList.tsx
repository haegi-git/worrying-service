import { styled } from "styled-components"
import { postType } from "../../types/dataTypes"
import getDate from "../../utils/getDate"
import { useNavigate } from "react-router-dom"

const Container = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: ${((props)=>props.theme.border.grayBorder)};
    border-radius: 15px;
    h3{
        margin-top:15px
    }
    ul{
        width: 100%;
        margin-top: 15px;
    }
    li{
        display: flex;
        justify-content: space-between;
        padding: 15px;
        border-bottom: ${((props)=>props.theme.border.grayBorder)};
        cursor: pointer;
        span:first-child{
            width: 75%;
        }
        span:last-child{
            width: 25%;
            text-align: end;
        }
    }
    ul li:first-child{
        border-top: ${((props)=>props.theme.border.grayBorder)};
    }
    li:last-child{
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        border-bottom: none;
    }
    li:hover{
        background-color: #e3e3e3;
    }
    @media (max-width:768px) {
        width: 90%;
        margin: auto;
        margin-bottom: 15px;
    }
`

type HomeLatestListProps = {
    listTitle: string,
    listData?: postType[]
}

export default function HomeLatestList({
    listTitle,
    listData
}:HomeLatestListProps){

    const sortedData:postType[] | undefined = listData?.sort((a,b)=> b.date - a.date)

    const sliceData = sortedData?.slice(0,5)

    const navigate = useNavigate()


    if(!listData){
        return <h1>불러오는 중</h1>
    }else{
        return(
            <Container>
                <h3>{listTitle}</h3>
                <ul>
                    {sliceData?.map((item:any)=>{
                        return(
                            <li onClick={()=>{
                                navigate(`/${item.category}/${item.id}`)
                            }} key={item.id}>
                                <span>{item.title}</span>

                                <span>{getDate(item.date)}</span>
                            </li>
                        )
                    })}
                </ul>
            </Container>
        )
    }

}