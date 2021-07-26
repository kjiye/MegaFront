import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    padding: 60px 0 40px 0;
    font-size:32px;
    letter-spacing: 8px;
    text-align:center;
`;


function MainTitle({ title }){
    return (
        <Title>{title}</Title>    
    )
}

export default MainTitle;