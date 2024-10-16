import React from 'react';
import styled from 'styled-components';
import kakao from '../../images/kakao_login_large_wide1.png';


const Text1 = styled.div`
    width: 100%;
    height: 10%;
    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.5vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin-top: 3%;
    margin-left: 5%;
`;

const Kakaoimage = styled.img`
    display: block; 
    margin: 0 auto; 
    padding-top: 50%;
    cursor: pointer;
`;

const Kakaologin = () => {
    const clickToKakao = () => {
        window.location.replace(`${KAKAO_URL}`);
    }
    const KAKAO_URL = "https://kauth.kakao.com/oauth/authorize?client_id=55e6c210f408ffb2e598c0951890d226&redirect_uri=http://localhost:3000/oauth&response_type=code"
    return (
        <>
            <Text1>간편하게 로그인하고<br/>다양한 서비스를 이용하세요.</Text1>
            <Kakaoimage onClick={clickToKakao} src={kakao} alt="카카오 로그인" />
        </>
    );
}

export default Kakaologin;
