import styled from 'styled-components';
import ListItem from '../component/ListItem';
import ContentTextarea from '../component/ContentTextarea';
import { useState } from 'react';

const Container = styled.div`
    padding:20px;
    background:#c8f7be;
    font-size:40px;
    font-weight:bold;
`;

function DetailScreen(){

    const [content, setContent] = useState("");

    const onContentChange = (text) => {
        console.log(text);
        setContent(text);
    }

    return (
        <Container>
            DetailScreen
            <ListItem title={"DetailScreen에서 ListItem 컴포넌트 사용 중!"} />
            <ListItem title={"제목 출력테스트"}/>
            <ListItem title={"안녕하세요~~"}/>
            <ContentTextarea onChange={onContentChange} currentLength={content.length} limit={10} value={content} />
        </Container>
    );
}

export default DetailScreen;