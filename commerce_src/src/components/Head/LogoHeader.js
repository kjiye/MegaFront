import React from 'react';
import styled from 'styled-components';
import logo from '../../image/logo.png';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    width:100%;
`;

const LogoView = styled.img`
    width:120px;
    height:120px;
`;

function LogoHeader(){
    return (
        <Wrapper>
            <Link to="/">
                <LogoView src={logo}/>
            </Link>
        </Wrapper>
    );
}

export default LogoHeader;