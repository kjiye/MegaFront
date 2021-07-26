import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    padding:8px 0;
    font-size: 32px;
    font-weight: bold;
    color: white;
    letter-spacing: 8px;
    text-align: center;
    background: rgba(159, 201, 165);
`;

function ListTitle({ title }){
    return (
        <Title>{title}</Title>
    );
}

export default ListTitle;