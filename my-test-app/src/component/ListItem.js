import styled from 'styled-components';

const ListWrapper = styled.div`
  padding:12px;
  margin-top:12px;
  font-color:gray;
  border:2px solid #333333;
  border-radius:10px;
  background-color:#ebebeb;
`;

function ListItem(props){
  return (
    <ListWrapper style={{"fontSize": props.size === "big" ? "20px" : "15px"}}>{props.title}</ListWrapper>
  )
}

export default ListItem;