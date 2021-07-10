import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin:200px auto;
    width:400px;
`;

const InputWrapper = styled.div`
    padding:10px 0;
`;

const InputBox = styled.input`
    border:0;
    outline:none;
    font-size:25px;
`;

const WarnMessage = styled.div`
    margin-top:8px;
    font-size:14px;
    color:red;
`;

function InputValidationScreen(){

    const [inputValue, setInputValue] = useState("");
    const [focus, setFocus] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        // 사용자가 입력한 값인 inputValue state에 특수문자가 포함되어 있는지를 확인
        // 특수문자가 포함된 경우 경고메세지를 보여준다

        // 정규식 (regular expression)
        // /[~!@#$%^&*()_+|<>?:{}]/gi
        //     /[ 특수문자들  ]/
        // /여기에정규식형식을입력/
        // /[매칭할문자들입력]/
        // g 모든 문자를 대상으로 전역 조회
        // i 대소문자 구분 없음

        const regexp = /[~!@#$%^&*()_+|<>?:{}]/g;

        console.log(regexp.test(inputValue));


    }, [inputValue]);

    return (
        <Container>
            <InputWrapper style={{"borderBottom" : "2px solid " + (focus ? "black" : "#b5b5b5")}}>
                <InputBox 
                    value={inputValue} 
                    onChange={(e) => { setInputValue(e.target.value) }}
                    onFocus={() => {
                        setFocus(true);
                    }}
                    onBlur={() => {
                        setFocus(false);
                    }}
                    />
            </InputWrapper>

            <WarnMessage>특수문자 사용금지</WarnMessage>

        </Container>
    );
}

export default InputValidationScreen;