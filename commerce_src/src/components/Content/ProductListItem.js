import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import sample from '../../image/sample_product.jpeg';

const Wrapper = styled.div`
    display:inline-block;
    margin:20px;
    width:300px;
`;

const ProductWrap = styled.div`
    display:inline-block;
    cursor:pointer;
`;

const ProductImg = styled.img`
    width:300px;
    height:300px;
`;

const ProductName = styled.div`
    height: 35px;
    padding:12px 0;
    font-size:16px;
    border-bottom:1px solid #333333;
`;

const Price = styled.div`
    padding:12px 0;
    font-size:18px;
    font-weight:bold;
    text-align:right;
`;

const ButtonView = styled.div`
    display:flex;
    flex-direction:row;
`;

const LeftButton = styled.span`
    display:inline-block;
    padding:10px 0;
    width:150px;
    border:1px solid #333333;
    text-align:center;
    font-weight:bold;
    cursor:pointer;
`;

const RightButton = styled(LeftButton)`
    background:#333333;
    color:white;
`;


function ProductListItem({ value }){
    const history = useHistory();
    console.log("상품 개별 정보 props ", value);
    return (
        <Wrapper>
            <ProductWrap 
                onClick={() => {
                    history.push("/product/detail/"+value.prod_idx);
                }}>
                <ProductImg src={value.prod_img_url}/>
                <ProductName>[{value.prod_brand}] {value.prod_name}</ProductName>
                <Price>{value.prod_price.toLocaleString()} {'₩'}</Price>
            </ProductWrap>
            <ButtonView>
                <LeftButton>CART</LeftButton>
                <RightButton>BUY IT NOW</RightButton>
            </ButtonView>
        </Wrapper>
    )
}

export default ProductListItem;