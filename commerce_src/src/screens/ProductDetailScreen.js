import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { MainTitle } from '../../src/components/Content';
import axios from 'axios';
import { SERVER_URL } from '../util/config';

const Container = styled.div`
    padding: 20px 0;
`;

const ProductWrapper = styled.div`
    display : flex;
    flex-direction : row;
    justify-content: space-around;
    padding-bottom: 30px;
    border-bottom:3px solid #333333;
`;

const DetailWrapper = styled.div`
    padding: 40px 0;
`;

const ProductImage = styled.img`
    width:400px;
    height:400px;
`;

const InfoView = styled.div`
    display:flex;
    flex:1;
    padding: 0 20px;
    flex-direction:column;
    justify-content:space-between;
    height:400px;
`;

const ProductName = styled.h2`
    padding-bottom:12px;
`;

const ButtonView = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`;

const QuantityButton = styled.div`
    width:40px;
    padding-bottom:4px;
    border-radius:10px;
    border:2px solid #333333;
    font-size:30px;
    text-align:center;
    cursor:pointer;
`;

const NumberView = styled.div`
    padding: 0 30px;
    font-size:28px;
    font-weight:bold;
`;

const PriceView = styled.div`
    font-size:32px;
    font-weight:bolder;
    text-align:right;
`;

const SingleButton = styled.div`
    padding:20px 0;
    width:100%;
    text-align:center;
    font-size:22px;
    border:1px solid #333333;
    cursor:pointer;
    &:hover {
        background-color:#333333;
        color: white;
    }
`;

const ContentTitle = styled.div`
    display:inline-block;
    padding:8px 4px;
    font-size:24px;
    font-weight:bold;
    border-bottom:6px solid rgba(159,201,165);
`;

const ContentTextView = styled.div`
    padding:40px 0;
    font-size:22px;
    color: #333333;
`;

const Message = styled.div`
    padding:40px 0;
    font-size:24px;
    font-weight:bold;
    color: #7a7a7a;
    letter-spacing: 6px;
`;

function ProductDetailScreen({cartQtyUp}){

    const { prod_idx } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [detail, setDetail] = useState({});

    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const getDetail = async () => {
            setIsLoading(true);
            const response = await axios.get(SERVER_URL+'/mega/product/detail/'+prod_idx);
            if (response.data.data) {
                setDetail(response.data.data);
                setPrice(response.data.data.prod_price);
            }
            setIsLoading(false);
        };
        getDetail();
    }, [prod_idx]);

    const onIncrease = () => {
        // 수량 증가

        // 구조 분해 할당 (...객체명)
        // 배열 또는 객체를 해체하여 그 값을 변수에 담을 수 있게 한다 (안에 있는 값을 복사해서 넣어주는 것)
        setDetail({
            ...detail, 
            prod_price : (qty + 1) * price
        });
        setQty(qty + 1);
    };

    const onDecrease = () => {
        // 수량 감소
        if (qty > 1) {
            setDetail({
                ...detail,
                prod_price: (qty - 1) * price
            });
            setQty(qty - 1);
        } else {
            return;
        }
    };

    const onClickCart = () => {
        let newList = [];
        let cartList = JSON.parse(sessionStorage.getItem("cartList"));
        if (cartList) {
            let duplication = false;
            newList = cartList.map((v) => {
                if (v.prod_idx === detail.prod_idx) {
                    v.prod_qty = v.prod_qty + qty;
                    duplication = true;
                }
                return v;
            });
            if (!duplication) {
               newList = [...newList, {prod_idx : detail.prod_idx, prod_qty : qty}]; 
            }
        } else {
            newList = [{prod_idx: detail.prod_idx, prod_qty : qty}];
        }
        console.log(newList);
        sessionStorage.setItem("cartList", JSON.stringify(newList));
        cartQtyUp(qty);
        alert("장바구니에 추가했습니다!");        
    }

    return (
        <Container>
            {isLoading ? (
                // 로딩 진행 중 (미완료)
                <Message>상품 대기 중...</Message>
            ) : detail ? (
                // 로딩된 후 상세 데이터 있을 때
                <>
                <ProductWrapper>
                    <ProductImage src={detail.prod_img_url} />
                    <InfoView>
                        <ProductName>[{detail.prod_brand}] {detail.prod_name}</ProductName>
                        <ButtonView>
                            <QuantityButton onClick={onDecrease}>{"-"}</QuantityButton>
                            <NumberView>{qty}</NumberView>
                            <QuantityButton onClick={onIncrease}>{"+"}</QuantityButton>
                        </ButtonView>
                        <PriceView>{detail.prod_price.toLocaleString()} {"₩"}</PriceView>
                        <SingleButton onClick={onClickCart}>CART</SingleButton>
                        <SingleButton>BUY IT NOW</SingleButton>
                    </InfoView>
                </ProductWrapper>
                <DetailWrapper>
                    <MainTitle title={"PRODUCT DETAIL"}/>
                    <ContentTitle>FEATURES</ContentTitle>
                    <ContentTextView>{detail.prod_feature}</ContentTextView>
                    <ContentTitle>HOW TO USE</ContentTitle>
                    <ContentTextView>{detail.prod_usage}</ContentTextView>
                </DetailWrapper>
                </>
            ) : (
                // 로딩은 다 됐는데 상세 데이터 없을 때
                <Message>존재하지 않는 상품입니다</Message>
            )}
        </Container>
    )
}

export default ProductDetailScreen;