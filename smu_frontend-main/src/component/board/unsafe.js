import React from 'react';
import KakaoMap from '../map/kakaomap'
import styled from 'styled-components';
import apart2 from '../../images/apart_2.png';
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
    background-color: #FFF5F5;
    width: 60%;
    height: 20%;
    border-radius: 24px;
    margin: 2% auto;
`

const Text3 = styled.div`
    color: #CE3C3C;
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
    display: flex;
    align-items: center;
`

const Rectanglea = styled.div`
    width:18%;
    height:100%;
    background-color: #F3F3F3;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Rectanglex = styled.div`
    width:82%;
    height:100%;
    background-color: #white;

    display: flex;
    justify-content: flex-start; /* 문자를 왼쪽 정렬 */
`

/* 거래 방식~~*/
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

/* ------footer부분이 내용을 가려서 공백으로 추가했습니다.------ */
const Blank = styled.div` 
    width: 60%;
    height: 7%;
    margin: 0 auto; /*마진 : 0(상하) auto(좌우 마진값 오토로 가운데 정렬)*/
    background-color: #FFFFFF;
`

const UnsafePage = () => {
    return (
        <>
            <Text1>부동산 게시글
                <Rectangle4>
                    <Img src={apart2} alt="Apart"></Img>
                    <Textapart>아파트</Textapart>
                </Rectangle4>
            </Text1>

            <Stroke1></Stroke1>
            <Roomimage></Roomimage>
            <Text2>신축 화이트톤 깔끔한 투룸, 시청역 5분 거리</Text2>
            <Summary>
                <Text3>0inbye에서 이 집에 등기부등본을 요약해본 결과</Text3>
                <Text3>'위험합니다'</Text3>
                <Summaryrectangle>
                    <Img src={summary} alt="summary"></Img>
                    <Textsummary className="Textsummary">자세한 요약 확인하기</Textsummary>
                </Summaryrectangle>
            </Summary>
            {/* 거래정보 */}
            <Texta>거래정보</Texta>
            <Strokea></Strokea>
            {/* 아파트이름 */}
            <Section1>
                <Rectanglea>
                    <Textb>아파트명</Textb>
                </Rectanglea>
                <Rectanglex>
                    <Textb>한남더힐</Textb>
                </Rectanglex>
            </Section1>
            <Strokeb></Strokeb>
            
            {/* 가격 */}
            <Section1>
                <Rectanglea>
                    <Textb>가격</Textb>
                </Rectanglea>
                <Rectanglex>
                    <Textb>40억</Textb>
                </Rectanglex>
            </Section1>
            <Strokeb></Strokeb>
            {/* 면적 */}
            <Section1>
                <Rectanglea>
                    <Textb>면적</Textb>
                </Rectanglea>
                <Rectanglex>
                    <Textb>40평</Textb>
                </Rectanglex>
            </Section1>
            <Strokeb></Strokeb>
            {/* 층 */}
            <Section1>
                <Rectanglea>
                    <Textb>해당층/전체층</Textb>
                </Rectanglea>
                <Rectanglex>
                    <Textb>10층/20층</Textb>
                </Rectanglex>
            </Section1>
            <Strokeb></Strokeb>
            {/* 방향/주실기준 */}
            <Section1>
                <Rectanglea>
                    <Textb>방향/주실기준</Textb>
                </Rectanglea>
                <Rectanglex>
                    <Textb>남동/거실기준</Textb>
                </Rectanglex>
            </Section1>
            <Strokeb></Strokeb>
            {/* 즉시입주가능여부 */}
            <Section1>
                <Rectanglea>
                    <Textb>즉시 입주</Textb>
                </Rectanglea>
                <Rectanglex>
                    <Textb>즉시 입주 가능</Textb>
                </Rectanglex>
            </Section1>
            <Strokeb></Strokeb>
            {/* 지역 */}
            <Section1>
                <Rectanglea>
                    <Textb>지역</Textb>
                </Rectanglea>
                <Rectanglex>
                    <Textb>서울</Textb>
                </Rectanglex>
            </Section1>
            <Strokeb></Strokeb>

            {/* 위치 */}
            <Texta>위치</Texta>
            <Strokea></Strokea>

            {/* 지도 */}
            <KakaoMap />

            <Blank></Blank>
       
        </>
    );
}

export default UnsafePage;