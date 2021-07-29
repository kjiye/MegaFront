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


function ProductListItem({ value, cartClick }){
    const history = useHistory();
    // console.log("상품 개별 정보 props ", value);

    // prod_idx, prod_qty
    // session

    // web storage
    // localStorage : 같은 PC 같은 브라우저 (자동로그인)
    // sessionStorage : 브라우저 닫히면 만료 (장바구니)
    // 애플리케이션 전역에서 접근 가능
    // setItem("key", value) (value는 문자열 형태로 저장)
    // getItem("key")
    // removeItem("key")
    const onClickCart = () => {
        // {prod_idx : 상품번호, prod_idx : 1 }
        let newList = [];
        let cartList = JSON.parse(sessionStorage.getItem("cartList"));
        if (cartList) {
            let duplication = false;
            // 이전에 "cartList"로 등록된 데이터가 있는 경우 기존의 상품과 새로 추가된 상품을 하나의 배열로 합친다
            // 새로운 상품을 추가하기 전에 동일한 상품이 이미 장바구니에 등록된 상태인지 확인한다
            // 이미 등록된 상품인 경우 수량만 증가시킨다
            newList = cartList.map((v) => {
                if (v.prod_idx === value.prod_idx) {
                    // 중복 상품
                    v.prod_qty = v.prod_qty + 1;
                    duplication = true;
                }
                return v;
            });

            if (!duplication) {
               newList = [...newList, {prod_idx : value.prod_idx, prod_qty : 1}]; 
            }

        } else {
            // 초기 처리
            // session에 장바구니 정보가 아직 아무것도 없을 때
            // 상품 추가
            newList = [{prod_idx: value.prod_idx, prod_qty : 1}];
        }
        console.log(newList);
        sessionStorage.setItem("cartList", JSON.stringify(newList));
        cartClick(1);
        alert("장바구니에 추가했습니다!");
    }

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
                <LeftButton onClick={onClickCart}>CART</LeftButton>
                <RightButton>BUY IT NOW</RightButton>
            </ButtonView>
        </Wrapper>
    )
}

export default ProductListItem;