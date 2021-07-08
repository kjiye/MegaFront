import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import CardItem from '../component/CardItem';
import CountButton from '../component/CountButton';

const Container = styled.div`
  flex:1;
  padding:20px;
  background-color:#fce57e;
  font-size:4px;
  font-weight:bold;
  color:gray;
`;

const DetailButton = styled.a`
  display:inline-block;
  padding:10px;
  font-size:20px;
`;

// 컴포넌트나 모듈을 이용해서 스타일 정의를 할 때는 아래와 같이 ()괄호를 사용한다
const LinkButton = styled(Link)`
  display:inline-block;
  padding:10px;
  font-size:20px;
  color:orange;
`;

const CardWrapper = styled.div`
  flex-direction:row;
  justify-content:space-around;
`;


function HomeScreen(){
  // state 변수 생성
  // [state, setState()]의 순서로 구성
  // useState(초기값 설정)
  const [count, setCount] = useState(0);

  // const setCountState = () => {
  //   setCount(count+1);
  // }

  const onIncreseState = () => {
    setCount(count+1);
  }

  const onDecreseState = () => {
    setCount(count-1);
  }

  return (
    <Container>
      HomeScreen
      {/* <DetailButton href="/detail">상세페이지</DetailButton> */}
      <LinkButton to="/detail">상세페이지로 이동</LinkButton>
      {/* CardItem에 컴포넌트의 데이터 출력란 자리에 count 상태 값 표시하기 */}
      <CardItem title={'제목 표시란'} data={count} showList={true}/>
      {/* <button onClick={setCountState}>테스트 증가 버튼</button> */}
      {/* <CountButton name={'클릭하기'} buttonEvent={setCountState}/> */}
      <CountButton name="증가버튼" buttonEvent={onIncreseState}/>
      <CountButton name="감소버튼" buttonEvent={onDecreseState}/>
    </Container>
  );
}

export default HomeScreen;