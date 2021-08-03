import React from 'react';
import styled from 'styled-components';
import sample from '../../image/sample_banner1.png';

const View = styled.div`
    width:100%;
    height:400px;
    cursor: pointer;
`;

const BannerImage = styled.img`
    width:100%;
    height:400px;
`;
 
function BannerItem({ filename }){
    // static경로로 기본 생성되어 있는 public폴더에 접근
    // public 폴더에는 배포에 사용될 정적 리소스를 넣어두고 관리한다
    return (
        <View>
            <BannerImage src={filename}/>
        </View>
    )
}

export default BannerItem;