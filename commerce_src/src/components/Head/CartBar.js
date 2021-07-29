import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import cart from '../../image/shopping-cart.svg';

const Wrapper = styled(Link)`
    display:flex;
    flex:1;
    flex-direction:row-reverse;
    text-decoration:none;
    color:#333333;
`;

const ItemView = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    padding: 8px 0;
    width:150px;
    cursor:pointer;
`;

const Icon = styled.img`
    width:20px;
    height:20px;
`;

const ItemText = styled.span`
    display:inline-block;
    margin-left:10px;
    font-size:14px;
    font-weight:bold;
`;

const CountText = styled(ItemText)`
    margin-left:10px;
    padding:4px;
    background:rgba(159, 201, 165);
    border-radius:20%;
`;

function CartBar({total}){
    return (
        <Wrapper to="/cart">
            <ItemView>
                <Icon src={cart}/>
                <ItemText>CART</ItemText>
                <CountText>{total}</CountText>
            </ItemView>
        </Wrapper>
    );
}

export default CartBar;