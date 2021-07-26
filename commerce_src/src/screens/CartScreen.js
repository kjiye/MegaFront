import React from 'react';
import styled from 'styled-components';
import { CartListItem } from '../components/Content';

const Container = styled.div`
    padding:80px 0;
    background:lemon;
`;

function CartScreen(){
    return (
        <Container>
            <CartListItem />
            <CartListItem />
            <CartListItem />
        </Container>
    )
}

export default CartScreen;