import React from 'react';
import styled  from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Rectangle1 = styled.div`
    width: 100%;
    height : 10%;
    background: #F3F3F3;
    z-index: -2;
    display: flex;
    justify-content: space-between;
    align-items: center; /* 자식 요소를 수직 가운데 정렬 */
`;

const Titlename = styled.div`
    width: 16%;
    height: 40%;
    background-color: #D0EBFF;
    border-radius: 24px;

    color: #1864AB;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    display: flex;
    align-items: center; /* 수직 가운데 정렬 */
    justify-content: center; /* 수평 가운데 정렬 */

    margin-right : 5%;

    cursor: pointer;
    &:hover {
        background-color: #19254D;
        color: white;
    } 
`;

const Titlelogin = styled.div`
    color: #CFCFCF;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.5vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    display: flex;

    margin-left: 5%;

    cursor: pointer; /*커서를 올려놓으면 커서모양이 손모양으로 변경*/
`;

const Headerindex = () => {
    const navigate = useNavigate();
    
    function navigateTologin(){
        navigate('/Kakao_login');
    }

    function navigateTohome(){
        navigate('/');
    }
    return (
        <Rectangle1>
            <Titlelogin onClick={navigateTohome}>공인바이</Titlelogin>
            <Titlename onClick={navigateTologin}>로그인/회원가입</Titlename>
        </Rectangle1>
    );
}

export default Headerindex;
