import styled from 'styled-components';
import ListItem from '../component/ListItem';
import ContentTextarea from '../component/ContentTextarea';

const Container = styled.div`
  padding:20px;
  background-color:#c8f7be;
  font-size:4px;
  font-weight:bold;
  color:gray;
`

function DetailScreen(){
  return (
    <Container>
      DetailScreen
      <ListItem title={"DetailScreen에서 사용 중1"} size={'big'}/>
      <ListItem title={"DetailScreen에서 사용 중2"} size={'big'}/>
      <ContentTextarea />
    </Container>
  )
}

export default DetailScreen;