import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import BannerItem from './BannerItem';

const BannerView = styled(Swiper)`
    background:beige;
    height:400px;
`;

function BannerGroup({ bannerList }){
    const history = useHistory();
    return (
        <BannerView>
            {bannerList.map((value, index) => {
                return (
                    <SwiperSlide 
                        key={index.toString()}
                        onClick={() => {
                            // 페이지 이동처리
                            history.push(value.path);
                        }}
                        >
                        <BannerItem filename={value.filename}/>
                    </SwiperSlide>                      
                );
            })}
        </BannerView>
    );
}

export default BannerGroup;