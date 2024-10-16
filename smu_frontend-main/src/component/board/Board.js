import React from 'react';
import KakaoMap from '../map/kakaomap'
import styled from 'styled-components';
import apart from '../../images/apart_2.png';
import summary from '../../images/summary.png';

/* 부동산게시글 */
const Text1 = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    align-items: center; /* 수직 가운데 정렬 */

    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.5vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
    margin-top: 3%;
    margin-left: 5%;
`

/* 아파트 */
const Rectangle4 = styled.div`
    background-color: #F3F3F3;
    width: 15%;
    height: 140%;
    border-radius: 24px;
    margin-left: 3%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    cursor: pointer;
`
const Img = styled.img`
`

const Textapart = styled.div`
    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.5vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

/* 선 */
const Stroke1 = styled.div`
    width: 95%;
    height: 0.2%;
    margin: 0 auto;
    background-color: #000;

    margin-top: 2%;
`

const Roomimage = styled.div`
    background-color: #F3F3F3;
    width: 60%;
    height: 40%;
    border-radius: 24px;
    margin: 2% auto;
`

const Text2 = styled.div`
    width: 60%;
    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
    margin: 0 auto;
`

/* 등기부등본을 요약해본 결과~ 박스 */
const Summary = styled.div`
    background-color: #EBFBEE;
    width: 60%;
    height: 20%;
    border-radius: 24px;
    margin: 2% auto;
`

const Text3 = styled.div`
    color: #2B8A3E;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    text-align: center;
    padding-top: 3%; 
`

const Summaryrectangle = styled.div`
    background-color: #D0EBFF;
    width: 55%;
    height: 25%;
    border-radius: 24px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    margin-top:5%;
    margin-left: 23%;

    cursor: pointer;

    
    &:hover {
        background-color: #19254D;
            .Textsummary {
                color: white;
                }
    }
`

const Textsummary = styled.div`
    color: #1864AB;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

/* 거래정보, 관리비~ 칸*/
const Texta = styled.div`
    width: 60%;
    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.1vw;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0 auto;

    margin-top: 2%;
`

const Strokea = styled.div`
    width: 60%;
    height: 0.2%;
    margin: 0 auto;
    background-color: #000;

    margin-top: 1%;
`

const Section1 = styled.div`
    width: 60%;
    height: 7%;
    margin: 0 auto;
`

const Rectanglea = styled.div`
    width:18%;
    height:100%;
    background-color: #F3F3F3;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

/* 거래 방식*/
const Textb = styled.div`
    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 0.9vw;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: auto;
`

const Strokeb = styled.div`
    width: 60%;
    height: 0.1%;
    margin: 0 auto;
    background-color: #000;
`

/* 관리비 */
const Section2 = styled.div`
    width: 60%;
    height: 14%;
    margin: 0 auto;
`

const Rectangleb = styled.div`
    width:18%;
    height:100%;
    background-color: #F3F3F3;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Textc = styled.div`
    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 0.9vw;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: auto;
`

const Board = ({ title, content, price, region, address, size, direction, availability, floor, apart, images }) => {
  return (
    <>
            <Text1>부동산 게시글
                <Rectangle4>
                    <Img src={apart} alt="Apart"></Img>
                    <Textapart>아파트</Textapart>
                </Rectangle4>
            </Text1>

            <Stroke1></Stroke1>
            <Roomimage></Roomimage>
            <Text2>신축 화이트톤 깔끔한 투룸, 시청역 5분 거리</Text2>
            <Summary>
                <Text3>0inbye에서 이 집에 등기부등본을 요약해본 결과</Text3>
                <Text3>'안전합니다'</Text3>
                <Summaryrectangle>
                    <Img src={summary} alt="summary"></Img>
                    <Textsummary className="Textsummary">자세한 요약 확인하기</Textsummary>
                </Summaryrectangle>
            </Summary>
            {/* 거래정보 */}
            <Texta>거래정보</Texta>
            <Strokea></Strokea>
            {/* 거래 방식 */}
            <Section1>
                <Rectanglea>
                    <Textb>거래 방식</Textb>
                </Rectanglea>
            </Section1>
            <Strokeb></Strokeb>
            {/* 관리비 */}
            <Section2>
                <Rectangleb>
                    <Textc>관리비</Textc>
                </Rectangleb>
            </Section2>
            <Strokeb></Strokeb>
            {/* 융자금 */}
            <Section1>
                <Rectanglea>
                    <Textb>융자금</Textb>
                </Rectanglea>
            </Section1>
            <Strokeb></Strokeb>
            {/* 입주가능일 */}
            <Section1>
                <Rectanglea>
                    <Textb>입주 가능일</Textb>
                </Rectanglea>
            </Section1>
            <Strokeb></Strokeb>

            {/* 방정보 */}
            <Texta>방 정보</Texta>
            <Strokea></Strokea>
            {/* 건물 유형 */}
            <Section1>
                <Rectanglea>
                    <Textb>건물 유형</Textb>
                </Rectanglea>
            </Section1>
            <Strokeb></Strokeb>
            {/* 건물 형태 */}
            <Section1>
                <Rectanglea>
                    <Textb>건물 형태</Textb>
                </Rectanglea>
            </Section1>
            <Strokeb></Strokeb>
            {/* 해당층/전체층 */}
            <Section1>
                <Rectanglea>
                    <Textb>해당층/전체층</Textb>
                </Rectanglea>
            </Section1>
            <Strokeb></Strokeb>
            {/* 전용/공급면적 */}
            <Section1>
                <Rectanglea>
                    <Textb>전용/공급면적</Textb>
                </Rectanglea>
            </Section1>
            <Strokeb></Strokeb>
            {/* 방/욕실개수 */}
            <Section1>
                <Rectanglea>
                    <Textb>방/욕실개수</Textb>
                </Rectanglea>
            </Section1>
            <Strokeb></Strokeb>
            {/* 방/거실형태 */}
            <Section1>
                <Rectanglea>
                    <Textb>방/거실형태</Textb>
                </Rectanglea>
            </Section1>
            <Strokeb></Strokeb>
            {/* 주실기준/방향 */}
            <Section1>
                <Rectanglea>
                    <Textb>주실기준/방향</Textb>
                </Rectanglea>
            </Section1>
            <Strokeb></Strokeb>
            {/* 현관유형 */}
            <Section1>
                <Rectanglea>
                    <Textb>현관유형</Textb>
                </Rectanglea>
            </Section1>
            <Strokeb></Strokeb>
        </>
  );
};

export default Board;
