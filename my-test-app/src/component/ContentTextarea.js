import styled from 'styled-components';

const Container = styled.div`
  padding:20px 0;
  width:350px;
`;

const TextBox = styled.textarea`
  padding:10px;
  width:100%;
  height:400px;
  line-height:20px;
  resize:none;
  border:1px solid grey;
`;

const LimitCount = styled.div`
  text-align:right;
  font-size:12px;
  color:grey;
`;

function ContentTextarea(){
  return (
    <Container>
      <TextBox />
      <LimitCount></LimitCount>
    </Container>
  )
}

export default ContentTextarea;