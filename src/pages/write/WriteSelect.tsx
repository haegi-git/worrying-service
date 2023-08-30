import { styled } from "styled-components"
import { useAppDispatch } from "../../stores/store"
import { onChangeCategory } from "../../stores/features/writeValue/writeValueSlice"

const Container = styled.div`
    width: 100%;
    height: 80px;
`

export default function WriteSelect(){
    const dispatch = useAppDispatch()
    const handelCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const category = e.target.value
        dispatch(onChangeCategory(category))
    }
    return(
        <Container>
            <select name="write_category"
            onChange={handelCategory}>
                <option value="null">- 카테고리 -</option>
                <option value="anonymous">익명 게시판</option>
                <option value="secret">비밀 게시판</option>
                <option value="free">잡담소</option>
            </select>
        </Container>

    )
}