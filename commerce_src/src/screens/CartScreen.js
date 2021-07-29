import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CartListItem } from '../components/Content';
import axios from 'axios';
import { SERVER_URL } from '../util/config';
import qs from 'qs';
import { MainTitle } from '../components/Content';

const Container = styled.div`
    padding:80px 0;
    background:lemon;
`;

const Message = styled.div`
    padding:40px 0;
    font-size:24px;
    font-weight:bold;
    color: #7a7a7a;
    letter-spacing: 6px;
`;

function CartScreen(){

    const [isLoading, setIsLoading] = useState(true);
    const [list, setList] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        // 세션에 저장된 장바구니 리스트 조회
        // 조회한 리스트로 API호출 ( [{prod_idx:1, prod_qty : 3}] )
        // response [ {prod_idx:1, prod_qty 3, prod_name ...} ]
        const cartList = JSON.parse(sessionStorage.getItem("cartList"));
        if (cartList) {
            const getProductList = async () => {
                // API 호출
                // (GET) http://kimdev.cafe24.com:8080/mega/cart/product
                // params --> cartList [{prod_idx:1, prod_qty : 3}]
                const response = await axios.get(SERVER_URL+"/mega/cart/product", {
                    params : {
                        cartList: cartList
                    },
                    paramsSerializer: (params) => {
                        // 파라미터를 직렬화할 때 사용
                        // 객체, 배열과 같이 여러 층위로 감싸진 형태의 데이터를 문자열로 변환

                        // path?key=value&key=value
                        // return 가공한 params;
                        return qs.stringify(params);
                    },
                });
                console.log(response.data);
                setList(response.data.data); 
                setIsLoading(false);
            };
            getProductList();
        } else {
            // 장바구니 데이터 없는 경우
            setList([]);
            setIsLoading(false);
        }
    }, []);

    const onClickDelete = (prod_idx) => {
        let downQty = 0;
        const newList = list.filter((v) => v.prod_idx !== prod_idx);    // 삭제 상품만 제외한 나머지 데이터를 필터링
        sessionStorage.setItem("cartList", JSON.stringify(newList));    // 새로 필터링된 배열을 세션에 저장
        setList(newList);
        // 카트바 수량 감소 처리
        // cartQtyDown(downQty);
    };

    return (
        <Container>
            <>
            <MainTitle title={"SHOPPING CART"}/>
            {isLoading ? (
                <Message>잠시만 기다려주세요..</Message>
            ): list.length > 0 ? (
                list.map((value, index) => {
                    return (
                        <CartListItem 
                            key={index.toString()} 
                            value={value}
                            onDelete={onClickDelete}
                            />
                    )
                })    
            ) : (
                <Message>장바구니 데이터 없음 문구</Message>
            )}
            </>
        </Container>
    )
}

export default CartScreen;