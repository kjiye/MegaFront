import React from 'react';
import styled from 'styled-components';
import sample from '../../image/sample_product.jpeg';

const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding:20px;
    background: rgba(159, 201, 165, 0.5);
    margin: 20px 0;
    border-radius:16px;
`;

const RowWrap = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`;

const ProductImg = styled.img`
    width:150px;
    height:150px;
    border-radius:50%;
`;

const ProductName = styled.div`
    margin-left:20px;
    font-size:15px;
    font-weight:bold;
`;

const QuantityWrap = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`;

const NumberView = styled.div`
    padding:0 40px;
    text-align:right;
    font-size:22px;
    font-weight:bold;
`;

const ButtonView = styled.div`
    flex-direction:column;
`;

const Button = styled.div`
    width:30px;
    padding:2px 0;
    border:2px solid #333333;
    border-radius:12px;
    font-size:25px;
    text-align:center;
    cursor:pointer;
`;

const PriceView = styled.div`
    padding-left:80px;
    font-size: 22px;
`;

const DeleteButton = styled.span`
    display:inline-block;
    margin-left:80px;
    padding:10px;
    background: #f4f4f4;
    font-size: 30px;
    border-radius: 12px;
    cursor:pointer;
`;

function CartListItem(){
    return (
        <Wrapper>
            <RowWrap>
                <ProductImg src={sample} />
                <ProductName>LANEIGE Cica Sleeping Mask 60ml</ProductName>
            </RowWrap>
            <RowWrap>
                <QuantityWrap>
                    <NumberView>1234</NumberView>
                    <ButtonView>
                        <Button>{"+"}</Button>
                        <Button style={{marginTop:6}}>{"-"}</Button>
                    </ButtonView>
                </QuantityWrap>
                <PriceView>10,000 {"₩"}</PriceView>
                <DeleteButton>X</DeleteButton>
            </RowWrap>
        </Wrapper>
    )
}

export default CartListItem;