import styled from 'styled-components';

const Wrapper = styled.div`
    display:inline-block;
    background:#f2f2f2;
    margin:20px;
    padding:20px;
    border-radius:6px;
`;

const Title = styled.h4`
    padding-bottom:8px;
`;

const ImageView = styled.img`
    float:left;
    margin-right:12px;
    border-radius:4px;
`;

const SubText = styled.div`
    font-size:20px;
    font-weight:bold;
    color:#666666;
`;

const MainText = styled.div`
    margin-top:4px;
    font-size:16px;
`;

function MovieItem(props){
    return (
        <Wrapper>
            <Title>{props.data.title_long}</Title>
            <ImageView src={props.data.medium_cover_image} />
            <SubText>{props.data.runtime} min</SubText>
            <MainText>{props.data.summary}</MainText>
        </Wrapper>
    );
}

export default MovieItem;