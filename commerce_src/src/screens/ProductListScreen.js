import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
// import ListTitle from '../components/Content/ListTitle';
// import ProductListItem from '../components/Content/ProductListItem';
import { ListTitle, ProductListItem } from '../components/Content';
import axios from 'axios';
import { SERVER_URL } from '../util/config';

const Container = styled.div`
    padding:60px 0;
`;

const ProductWrapper = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
`;

const Message = styled.div`
    padding:40px 0;
    font-size:24px;
    font-weight:bold;
    color: #7a7a7a;
    letter-spacing: 6px;
`;

function getFullTitle(menu_type){
    switch (menu_type) {
        case "new":
            return "NEW ARRIVAL";
        case "best":
            return "BEST";
        case "md":
            return "MD'S PICK";
        default: return;
    }
}

function ProductListScreen({cartQtyUp}){
    const { menu_type } = useParams();  // new, best, md

    const [isLoading, setIsLoading] = useState(true);
    const [list, setList] = useState([]);

    useEffect(() => {
        const getProductList = async () => {
            setIsLoading(true);
            const response = await axios.get(SERVER_URL+'/mega/product?type='+menu_type);
            if (response.data.data) {
                setList(response.data.data);
            }
            setIsLoading(false);
        };
        getProductList();
    }, [menu_type]);
  
    return (
        <Container>
            <ListTitle title={getFullTitle(menu_type)}/>
            <ProductWrapper>
                {isLoading ? (
                    <Message>상품 대기 중...</Message>
                ) : list.length > 0 ? (
                    list.map((value, index) => {
                        return (
                            <ProductListItem key={index.toString()} value={value} cartClick={cartQtyUp}/>
                        )
                    })
                ) : (
                    <Message>상품 대기 중...</Message>
                )}
            </ProductWrapper>
        </Container>
    )
}

export default ProductListScreen;