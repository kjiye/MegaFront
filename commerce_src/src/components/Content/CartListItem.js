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
    width:250px;
    font-size: 22px;
    text-align:center;
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

function CartListItem({value, onDelete, onIncrease, onDecrease}){
    return (
        <Wrapper>
            <RowWrap>
                <ProductImg src={value.prod_img_url} />
                <ProductName>[{value.prod_brand}] {value.prod_name}</ProductName>
            </RowWrap>
            <RowWrap>
                <QuantityWrap>
                    <NumberView>{value.prod_qty}</NumberView>
                    <ButtonView>
                        <Button onClick={() => {onIncrease(value.prod_idx)}}>{"+"}</Button>
                        <Button 
                            style={{marginTop:6}}
                            onClick={() => {
                                onDecrease(value.prod_idx);
                            }}
                            >{"-"}</Button>
                    </ButtonView>
                </QuantityWrap>
                <PriceView>{(value.prod_price * value.prod_qty).toLocaleString()} {"₩"}</PriceView>
                <DeleteButton onClick={() => { onDelete(value.prod_idx) }}>X</DeleteButton>
            </RowWrap>
        </Wrapper>
    )
}

export default CartListItem;