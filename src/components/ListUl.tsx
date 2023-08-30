import { styled } from "styled-components"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../stores/store"
import { post } from "../types/dataTypes"

const ContainerUl = styled.ul`
    width: 100%;
    margin-top: 15px;
    border: ${((props)=>props.theme.border.grayBorder)};
    border-radius: 15px;
    li{
        display: flex;
        justify-content: space-between;
        padding: 15px;
        border-bottom: ${((props)=>props.theme.border.grayBorder)};
        cursor: pointer;
        span:last-child{
            width: 20%;
            text-align: end;
        }
    }
    li:first-child{
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }
    li:last-child{
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        border-bottom: none;
    }
    li:hover{
        background-color: #e3e3e3;
    }
`

export default function ListUl(){

    const navigate = useNavigate()

    const listData = useAppSelector((state)=>state.dataState.postsData)

    const listOnClick = (item: post) =>{
        navigate(`/${item.category}/${item.id}`)
    }

    return(
            <ContainerUl>
                {listData.map((item)=>{
                    return(
                        <li key={item.id} onClick={()=>{
                            listOnClick(item)
                        }}>
                    <span>
                        {item.title}
                    </span>
                    <span>날짜</span>
                </li>
                    )
                })}
            </ContainerUl>
    )
}