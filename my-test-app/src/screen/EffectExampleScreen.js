import React, { useState, useEffect } from 'react';

/*
마운트 (mount) : 새로운 컴포넌트를 DOM상에 생성하는 것
업데이트 (update) : state, props의 변경으로 인해 컴포넌트의 갱신이 발생하는 것
언마운트 (unmount) : 컴포넌트가 DOM 상에서 제거되는 것
*/

/*
사이드이펙트 (side effect) : 특정 함수가 호출되어 실행될 때, 함수 내부가 아닌 외부에 영향을 미치는 것
*/

/*
    useEffect()  (사이드 이펙트를 관리할 때 사용.)
    컴포넌트가 마운트 된 후 ***
    컴포넌트가 업데이트 된 후
    컴포넌트가 언마운트 되기 전

    useEffect(실행함수, 실행함수의 조건(배열))
    특정 state가 변화할 때마다 useEffect를 실행시키고 싶다면 [조건 배열] 자리에 그 state값을 넣는다
    [] 만일 빈 배열을 주입시키는 경우에는 useEffect가 컴포넌트 마운트 된 후에만 실행된다

    useEffect(() => {
        // 실행 코드
    }, [state])
*/

function EffectExampleScreen(){

    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("");

    // useEffect(() => {
    //     console.log("Component Did Mount!!!");
    // }, []);

    useEffect(() => {
        console.log(counter);
        console.log("counter state가 update됨!!");
    }, [counter]);

    useEffect(() => {
        console.log(name);
        console.log("name state가 update됨!!");
    }, [name]);

    return (
        <>
            {counter}
            <button onClick={() => { setCounter(counter + 1) }}>증가버튼</button>
            <input value={name} onChange={(e) => { setName(e.target.value) }} />
        </>
    );
}

export default EffectExampleScreen;
