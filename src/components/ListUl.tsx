import { styled } from "styled-components"
import { useNavigate } from "react-router-dom"
import getDate from "../utils/getDate"
import { postType } from "../types/dataTypes"

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

type ListUlProps = {
    displayedItems: postType[]
}

export default function ListUl({
    displayedItems
}:ListUlProps){

    const navigate = useNavigate()

    const listOnClick = (item: postType) =>{
        navigate(`/${item.category}/${item.id}`)
    }

    return(
            <ContainerUl>
                {displayedItems.map((item)=>{
                    return(
                        <li key={item.id} onClick={()=>{
                            listOnClick(item)
                        }}>
                    <span>
                        {item.title}
                    </span>
                    <span>{getDate(item.date)}</span>
                </li>
                    )
                })}
            </ContainerUl>
    )
}