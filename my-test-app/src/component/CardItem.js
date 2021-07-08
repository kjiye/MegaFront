import styled from 'styled-components';
import ListItem from './ListItem';

const CardWrapper = styled.div`
  width:300px;
  height:300px;
  padding:10px;
  box-sizing:border-box;
  background-color:orange;
  font-size:20px;
`;

const CardTitle = styled.div`
  color:white;
`;

const CardData = styled.div`
  margin-top:10px;
  font-size:28px;
  text-align:center;
  color: black;
`;

function CardItem({title, data, showList}){
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardData>{data}</CardData>
      {/* 컴포넌트에서 다른 외부 컴포넌트를 불러와서 화면의 조합을 만드는 것도 가능하다 */}
      {/* showList true 일 때만 ListItem을 표시한다 */}
      {
        showList && (
          <ListItem title={'Card Component에서 사용 중1'} />
        )
      }
    </CardWrapper>
  );
}

export default CardItem;