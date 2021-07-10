import styled from "styled-components";

const ListWrapper = styled.div`
    padding:12px;
    margin-top:12px;
    border:2px solid #333333;
    border-radius: 10px;
    background-color:#ebebeb;
`;

// props는 부모컴포넌트, 상위컴포넌트로부터 넘겨받은 객체 값
// 객체 인자 형태로 전달받는다
// props는 읽기 전용 데이터이며 받은 쪽에서 수정하지 않는다
function ListItem(props){
    return (
        <ListWrapper style={{ "fontSize": props.size === "big" ? "20px" : "15px" }}>{props.title}</ListWrapper>
    );
}

export default ListItem;