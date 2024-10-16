import React from 'react';
import styled from 'styled-components';

import Wonho from '../../images/wonho.png';
import Jin from '../../images/jeongjin.png';
import minjeong from '../../images/minjeong.png';
import euna from '../../images/euna.png';

const Section1 = styled.div`
    width: 100%;
    height: 83%;
`

const Section2 = styled.div`
    width: 100%;
    height: 25%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    color: #000000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1vw;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`


const Makermain = () => {
    return (
        <>
            <Section1>
                <Section2>
                    <img src = {Jin} alt = "정진"/>
                    박정진 <br /> wjdwls7883@naver.com <br /> 상명대학교 융합공학대학 지능 · 데이터 융합학부 휴먼지능정보공학 전공 <br /> 팀장 - 프론트엔드 / 백엔드
                </Section2>
                <Section2>
                    <img src = {Wonho} alt = "원호"/>
                    정원호 <br /> harry7860@naver.com <br /> 상명대학교 융합공학대학 지능 · 데이터 융합학부 휴먼지능정보공학 전공 <br /> 팀원 - 프론트엔드
                </Section2>
                <Section2>
                    <img src = {minjeong} alt = "민정"/>
                    이민정 <br /> minjonyyy@naver.com <br /> 상명대학교 융합공학대학 지능 · 데이터 융합학부 휴먼지능정보공학 전공 <br /> 팀원 - 백엔드
                </Section2>
                <Section2>
                    <img src = {euna} alt = "은아"/>
                    함은아 <br /> hamea1209@naver.com <br /> 상명대학교 융합공학대학 지능 · 데이터 융합학부 휴먼지능정보공학 전공 <br /> 팀원 - 백엔드
                </Section2>
            </Section1>
        </>
    );
}

export default Makermain