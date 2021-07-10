// React라는 이름으로 불러온 react 모듈에는 JSX 문법 지원 등 우리가 사용하고자 하는 리액트의 다양한 속성들이 들어있음
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ListItem from '../component/ListItem';
import CardItem from '../component/CardItem';
import CountButton from '../component/CountButton';

const Container = styled.div`
    padding:20px;
    background:#fce57e;
    font-size:40px;
    font-weight:bold;
`;

const DetailButton = styled.a`
    display:inline-block;
    padding:10px;
    border:1px solid black;
    font-size:20px;
`;

const LinkButton = styled(Link)`
    font-size:20px;
    color:red;    
`;

/*
    state 상태 (상태 값)
    state는 자기 자신 컴포넌트에서 정의되고 사용되는 값 (자신만의 상태 값)
    state에 변경사항이 발생하면(update) 컴포넌트도 그에 맞게 다시 렌더링
    state를 변경할 때는 setState()메서드를 통해서 값을 바꿔준다
    정보의 은닉
*/

function HomeScreen(){

    // state 변수 생성
    // [state, setState()]의 순서로 구성
    // useState(초기값 설정)
    // [상태명, set상태명]
    const [count, setCount] = useState(0);

    // 화살표 함수
    const setCountState = () => {
        // count라는 state를 update하는 역할
        // == setCount(바꿔줄 값) 실행시키는 것
        setCount(count+1);
    };

    const onIncreaseState = () => {
        setCount(count+1);
    }

    const onDecreaseState = () => {
        setCount(count-1);
    }

    return (
        <Container>
            HomeScreen
            {/* <DetailButton href="/detail">상세페이지로 이동</DetailButton> */}
            {/* <Link to="/detail">상세페이지로 이동</Link> */}
            <LinkButton to="/detail">상세페이지로 이동</LinkButton>
            <LinkButton to="/effect">go example screen</LinkButton>
            <LinkButton to="/input">input box 이동</LinkButton>
            <ListItem title={"HomeScreen에서 ListItem컴포넌트 불러왔음!"} size={"big"}/>
            <CardItem title={"제목입니다"} data={count} showList={true}/>
            {/* <CountButton name={"클릭하기"} buttonEvent={setCountState} /> */}
            <CountButton name={"증가버튼"} buttonEvent={onIncreaseState} />
            <CountButton name={"감소버튼"} buttonEvent={onDecreaseState} />
        </Container>
    );
};

export default HomeScreen;