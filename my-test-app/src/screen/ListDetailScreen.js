import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MovieItem from '../component/MovieItem';

const Container = styled.div`
    margin:100px auto;
    padding:20px 0;
    width:1000px;
    background:orange;
`;

function ListDetailScreen(props){
    console.log(props.location.state.title);  // {영화데이터}
    if (props.location.state) {
        return (
            <Container>
                {/* 상세화면에 해당하는 요소 */}
                <MovieItem data={props.location.state}/>
            </Container>
        )
    } else {
        return (
            <Container>접속 방법이 올바르지 않습니다</Container>
        )
    }
}

export default ListDetailScreen;