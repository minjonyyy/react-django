import React from 'react';
import styled from 'styled-components';
// 사진
import Apart from '../../images/apart.png';
import office from '../../images/office.png';
import House from '../../images/House.png';
import Bed from '../../images/Bed.png';
import Light from '../../images/LightBulb.png';
import Warning from '../../images/Warning.png';

import { useNavigate } from 'react-router-dom';

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
`
const Rectangle2 = styled.div`
    width: 90%;
    height: 35%;
    border-radius: 24px; 
    background: #F3F3F3;
    margin: 0 auto;
`

const Imgwaring = styled.div`
    padding-top: 2%;
    padding-left: 2%;
`

const Text2 = styled.div`
    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.2vW;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 2%;
    padding-left: 2%;
`

const Imglightbulb = styled`
    padding-top: 3%;
    padding-left: 2%;
`

const Text3 = styled.div`
    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.2vW;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 2%;
    padding-left: 2%;
    text-decoration-line: underline;
`

const Section1 = styled.div`
    width: 90%;
    height: 17%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Rectangle4 = styled.div`
    background-color: #F3F3F3;
    width: 40%;
    height: 65%;
    border-radius: 24px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #19254D;
    }
`;

const Textapart = styled.div`
    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.3vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    ${Rectangle4}:hover & {
        color: white;
    }
`;

const Rectangle5 = styled.div`
    background-color: #F3F3F3;
    width: 40%;
    height: 65%;
    border-radius: 24px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #19254D;
    }
`;

const Texthouse = styled.div`
    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.3vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    ${Rectangle5}:hover & {
        color: white;
    }
`;

const Section2 = styled.div`
    width: 90%;
    height: 17%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Rectangle6 = styled.div`
    background-color: #F3F3F3;
    width: 40%;
    height: 65%;
    border-radius: 24px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #19254D;
    }
`;

const Textbed = styled.div`
    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.3vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    ${Rectangle6}:hover & {
        color: white;
    }
`;

const Rectangle7 = styled.div`
    background-color: #F3F3F3;
    width: 40%;
    height: 65%;
    border-radius: 24px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #19254D;
    }
`;

const Textoffice = styled.div`
    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.3vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    ${Rectangle7}:hover & {
        color: white;
    }
`;

const Uploadmain = () => {

    const navigate = useNavigate();
    
    function navigateToselectpurchase(){
        navigate('/selectpurchase');
    }

    return (
        <>
            <Text1>매물 올리기</Text1>
            <Rectangle2>
                <Imgwaring><img src = {Warning} alt = "경고" /></Imgwaring>
                <Text2>* 방 등록 시 방 정보와 계정정보(가입된 ID, 이름, 연락처 등)가 노출됩니다. <br/>
                       * 허위(계약 완료, 중복 등록, 허위 정보 기재) 등록 및 중개매물, 원룸텔, 쉐어하우스 등록 시 <br />
                       * 이용이 제한될 수 있습니다.
                </Text2>
                <Imglightbulb><img src = {Light} alt = "빛" /></Imglightbulb>
                <Text3>* 매물 등록 가이드 보기</Text3>
            </Rectangle2>
            <Section1>
                <Rectangle4 onClick={navigateToselectpurchase}>
                    <img src = {Apart} alt = "아파트" />
                    <Textapart>아파트</Textapart>
                </Rectangle4>
                <Rectangle5 onClick={() => alert('준비중입니다.')}>
                    <img src = {House} alt = "빌라,주택" />
                    <Texthouse>빌라,주택</Texthouse>
                </Rectangle5>
            </Section1>
            <Section2>
                <Rectangle6 onClick={() => alert('준비중입니다.')}>
                    <img src = {Bed} alt = "오피스텔" />
                    <Textbed>오피스텔</Textbed>
                </Rectangle6>
                <Rectangle7 onClick={() => alert('준비중입니다.')}>
                    <img src = {office} alt = "상가,사무실" />
                    <Textoffice>상가,사무실</Textoffice>
                </Rectangle7>
            </Section2>
        </>
    )
}

export default Uploadmain