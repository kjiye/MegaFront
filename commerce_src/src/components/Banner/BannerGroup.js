import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import BannerItem from './BannerItem';

const BannerView = styled(Swiper)`
    background:beige;
    height:400px;
`;

function BannerGroup({ bannerList }){
    return (
        <BannerView>
            {bannerList.map((value, index) => {
                return (
                    <SwiperSlide key={index.toString()}>
                        <BannerItem filename={value.filename}/>
                    </SwiperSlide>                      
                );
            })}
        </BannerView>
    );
}

export default BannerGroup;