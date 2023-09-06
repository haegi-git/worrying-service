import { Pagination } from "react-ts-pagination"
import pageNumber from "../utils/pageNumber"
import { styled } from "styled-components"

type PaginationContainerProps ={
  totalPosts:number,
  itemsPerPage:number,
  currentPage:number,
  handelCurrentPage: any,
}

const Contaier = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${((props)=> props.theme.colors.background)};
  border: ${((props)=>props.theme.border.grayBorder)};
  border-radius: 15px;
  margin-top: 15px;
  ul{
    display: flex;
  }
  ul>li{
    padding: 10px;
    margin: 15px;
    cursor: pointer;
  }
  ul > li:hover{
    background-color: #d3d3d3;
    border-radius: 5px;
  }
  ul > li.active {
    background-color: #d3d3d3;
    border-radius: 5px;
  }

`

export default function PaginationContainer({
  totalPosts,
  itemsPerPage,
  currentPage,
  handelCurrentPage
}:PaginationContainerProps){

  const pages:any = pageNumber(totalPosts)

  return(
    <Contaier>
      <div style={{display:'none'}}>
        <Pagination
          numberOfPages={totalPosts / itemsPerPage}
          currentPageNumber={currentPage}
          onPageChange={handelCurrentPage}
        />
        </div>
        <ul>
          {pages.map((item:any)=>{
            const isActive = currentPage === item;
            return(
              <li key={item}
              className={isActive ? 'active' : ''}
               onClick={()=>{
                handelCurrentPage(item)
              }}>{item}</li>
            )
          })}
        </ul>
    </Contaier>
  )
}