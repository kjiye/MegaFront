import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


// list로부터 글 번호를 넘겨받아서 받은 글 번호를 이용해 영화상세조회API를 호출한다
// API를 통해서 반환받은 response를 화면에 출력한다
function ListDetailApiScreen(props){
    console.log("영화번호 ",props.location.movie_id);
    const [movieData, setMovieData] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            // 영화 상세 데이터 조회
            // https://yts.mx/api/v2/movie_details.json
            // paramter --> movie_id=영화번호
            const response = await axios.get("https://yts.mx/api/v2/movie_details.json?movie_id="+props.location.movie_id);
            console.log(response.data.data.movie);
            setMovieData(response.data.data.movie);
        };
        getMovie();
    }, [])

    return (
        <div>글 번호 받아서 Api 호출하기</div>
    )
}

export default ListDetailApiScreen;