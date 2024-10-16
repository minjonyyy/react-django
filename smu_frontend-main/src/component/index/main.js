import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// 사진
import Vector from '../../images/Vector.png';
import Apart from '../../images/apart.png';
import office from '../../images/office.png';
import House from '../../images/House.png';
import Bed from '../../images/Bed.png';

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
    background-color: #19254D;
    width: 90%;
    height: 25%;
    border-radius: 24px;
    margin: 0 auto;
`;

const Text2 = styled.div`
    color: #FFF;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-left: 5%;
    padding-top: 3%;
`;

const Text3 = styled.div`
    color: #FFF;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.5vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-left: 5%;
    padding-top: 5%;
`;

const Searchbox = styled.div`
    background-color: #FFFFFF;
    width: 90%;
    height: 20%;
    border-radius: 24px;
    margin: 2% auto;
`;

const Imgvector = styled.div`
    width: 90%;
    padding-top: 1%;
    padding-left: 1%;

    display: flex;
    justify-content: space-between;
`;

const Textinput = styled.input.attrs({
    type: 'text',
    placeholder: '원하시는 지역명을 입력해주세요' // 미리 써져 있는 기본 텍스트 설정
  })`
    width: 95%; /* 입력 폼의 가로 길이를 100%로 설정하여 부모 요소에 맞게 늘립니다. */
    border: none; /* border를 없앱니다. */
    border-radius: 0; /* border-radius를 0으로 설정하여 모서리를 둥글게 만들지 않습니다. */
`;

const Rectangle3 = styled.div`
    background-color: #D0EBFF;
    border-radius: 24px;
    width: 90%;
    height: 10%;
    margin: 0 auto;

    color: #1864AB;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.5vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    display: flex;
    align-items: center; /* 수직 가운데 정렬 */
    justify-content: center;

    cursor: pointer;
    &:hover {
        background-color: #ffa0dc;
        color: white;
    }
`;

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

const Mainindex = () => {
    const navigate = useNavigate();
    
    function navigateToupload(){
        navigate('/upload');
    }
    function navigateToboard(){
        navigate('/board');
    }

    return (
        <>
            <Text1>사기 걱정없는 <br></br>부동산 직거래</Text1>
            <Rectangle2>
                <Text2>매물 검색하기</Text2>
                <Text3>어떤 집을 찾고 계세요?</Text3>
                <Searchbox>
                    <Imgvector>
                        <img src = {Vector} alt = "돋보기"/>
                        <Textinput />
                    </Imgvector>
                </Searchbox>
            </Rectangle2>
            <Rectangle3 onClick={navigateToupload}>매물 올리기</Rectangle3>
            <Section1>
                <Rectangle4 onClick={navigateToboard}>
                    <img src = {Apart} alt = "아파트" />
                    <Textapart>아파트</Textapart>
                </Rectangle4>
                <Rectangle5>
                    <img src = {House} alt = "빌라,주택" />
                    <Texthouse>빌라,주택</Texthouse>
                </Rectangle5>
            </Section1>
            <Section2>
                <Rectangle6>
                    <img src = {Bed} alt = "오피스텔" />
                    <Textbed>오피스텔</Textbed>
                </Rectangle6>
                <Rectangle7>
                    <img src = {office} alt = "상가,사무실" />
                    <Textoffice>상가,사무실</Textoffice>
                </Rectangle7>
            </Section2>
        </>
    );
}

export default Mainindex