import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MovieItem from '../component/MovieItem';

const Container = styled.div`
    margin:100px auto;
`;

const TestButton = styled.span`
    display:inline-block;
    margin-right:20px;
    padding:20px;
    background:orange;
    color:white;
    font-size:20px;
    font-weight:bold;
    cursor:pointer;
    border-radius:12px;
`;

/*
    사용자가 선택한 개수를 기억하는 state 생성
    state가 변경되면 그 변경사항을 감지하는 useEffect가 axios를 이용해서 선택한 수만큼의 데이터를 호출
    API를 통해서 반환받은 response 데이터를 화면에 render시킨다
*/

function ListRenderScreen(){

    const [selectedLimit, setSelectedLimit] = useState(0);
    const [movieData, setMovieData] = useState([]);

    // 동기 : 요청과 결과가 동시에 일어난다
    // 비동기 : 요청과 결과가 동시에 일어나지 않는다

    useEffect(() => {
        // axios를 사용해서 http 통신
        // 영화 데이터 반환 API에 request를 보낸다
        // async - await 자바스크립트 비동기 패턴
        const getMovies = async () => {
            if (selectedLimit > 0) {
                // axios.get('요청을 보낼 url');
                const response = await axios.get("https://yts.mx/api/v2/list_movies.json?limit="+selectedLimit);
                console.log(response.data.data.movies[0]);
                setMovieData(response.data.data.movies);
            }
        }
        getMovies();
    }, [selectedLimit]);

    return (
        <Container>
            <TestButton onClick={() => { setSelectedLimit(3); }}>3개보기</TestButton>
            <TestButton onClick={() => { setSelectedLimit(10); }}>10개보기</TestButton>
            {/* map((인자) => { 여기 실행 구문을 거쳐서 새로운 배열로 반환 }) :   */}
            {/* map() 배열의 길이만큼 반복하며 인자로 넘어오는 배열 안의 각 테이터를 callback 함수 처리를 통해 새로운 배열로 반환한다 */}
            {/* 같은 컴포넌트로 만든 리스트는 각 항목에 key라는 속성 값으로 고유 식별 문자를 지정해야한다.
                React가 각각의 컴포넌트를 인식하고 구분하기 위해서는 고유성이 유지되어야 한다
            */}
            <div>
                {movieData.length > 0 && movieData.map(data => (
                    <MovieItem key={data.id} data={data} />
                ))}
            </div>
        </Container>
    )
}

export default ListRenderScreen;