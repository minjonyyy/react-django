import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import apart from '../../images/apart_2.png'

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
    height: 0.1%;
    margin: 0 auto;
    background-color: #000;

    margin-top: 2%;
    margin-bottom: 1%;
`

const Stroke2 = styled.div`
    width: 95%;
    height: 0.1%;
    margin: 0 auto;
    background-color: #000;

    margin-top: 1%;
`

const Search = styled.div`
    width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;   
`

const Searchinput = styled.input.attrs({
    type: 'text',
    placeholder: '동, 지역명, 대학교, 매물번호' // 미리 써져 있는 기본 텍스트 설정
    })`
    width: 30%;
    margin: 0 1%;
    padding: 1%;
    border: 1px solid #ccc;
    border-radius: 5px;

    font-family: "Spoqa Han Sans Neo";
    font-size: 1.0vw;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const Searchselect = styled.select`
    margin: 0 1%;
    padding: 1%;
    border: 1px solid #ccc;
    border-radius: 5px;

    font-family: "Spoqa Han Sans Neo";
    font-size: 1.0vw;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const Searchoption = styled.option`
    margin: 0 1%;
    padding: 1%;
    border: 1px solid #ccc;
    border-radius: 5px;

    font-family: "Spoqa Han Sans Neo";
    font-size: 1.0vw;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

// const Section1 = styled.div`
//     width: 95%;
//     height: 40%;
//     margin: 1% auto 0 auto;
//     display: flex;
//     align-items: center;
//     justify-content: space-evenly;
// `

const Thumbnail = styled.div`
    width: 85%;
    height: 40vh;
    margin: 0 auto;

    display: block;
    align-items: center;
    justify-content: space-between;
    cursor: pointer; 
`
// 매물이미지 입니다, 현재는 div로 해놓았고 후에 img로 바꾸어야합니다
const Image = styled.img`
    background-color: #c0bfbf;
    width: 70%;
    height: 60%;
    border-radius: 21px;
    margin: 2% auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Cost = styled.div`
    width: 70%;

    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.2vw;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin: 1% auto;
`

const Apartname = styled.div`
    width: 70%;

    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.0vw;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin: 1% auto;
`

const Description = styled.div`
    width: 70%;

    color: #8F8F8F;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.0vw;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    margin: 1% auto;
`

const Title = styled.div`
    width: 70%;

    color: #000;
    font-family: "Spoqa Han Sans Neo";
    font-size: 1.0vw;
    font-style: normal;
    font-weight: 300;
    line-height: normal;

    margin: 1% auto;
`

const Gridcontainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2%; /* 간격을 조절할 수 있습니다 */
`

/* ------footer부분이 내용을 가려서 공백으로 추가했습니다.------ */
const Blank = styled.div` 
    width: 60%;
    height: 25%;
    margin: 0 auto; /*마진 : 0(상하) auto(좌우 마진값 오토로 가운데 정렬)*/
    background-color: #FFFFFF;
`

const BoardList = () => {
  const navigate = useNavigate();
    const [boardList, setBoardList] = useState([]);
    const [searchOp, setsearchOp] = useState('region');
    const getBoardList = async () => {
      const response = (await axios.get('http://127.0.0.1:8000/post/'))
      setBoardList(response.data)
    }
    
  const filteredBoardList = boardList.filter((board) => {
    if (searchOp === 'region') {
      return true;
    }
    return board.region === searchOp;
  });

  const handleSearchChange = (event) => {
    setsearchOp(event.target.value);
  };

  useEffect(() => {
      getBoardList();
  }, []);



    return (
      <>
        <Text1>부동산 게시글
          <Rectangle4>
              <Img src={apart} alt="Apart"></Img>
              <Textapart>아파트</Textapart>
          </Rectangle4>
        </Text1>

        <Stroke1></Stroke1>
        <Search>
          <Searchinput></Searchinput>
          <Searchselect value = {searchOp} onChange={handleSearchChange}>
            <Searchoption value = "region">지역</Searchoption>
            <Searchoption value = "서울">서울</Searchoption>
            <Searchoption value = "인천">인천</Searchoption>
            <Searchoption value = "경기도">경기</Searchoption>
            <Searchoption value = "부산">부산</Searchoption>
            <Searchoption value = "강원도">강원</Searchoption>
            <Searchoption value = "대구">대구</Searchoption>
          </Searchselect>
        </Search>
        <Stroke2></Stroke2>
        <Gridcontainer>
          {filteredBoardList.map((board) => (
            <Thumbnail key={board.id} onClick={() => navigate(`/board/${board.id}`)}>
              <Image src={board.images[0].image} />
              <Cost>{board.price}</Cost>
              <Apartname>{board.apart}</Apartname>
              <Description>{board.floor}  | {board.size}</Description>
              <Title>{board.title}</Title>
            </Thumbnail>
          ))}
        </Gridcontainer>
        
        <Blank></Blank>
      </>
    );
  };

export default BoardList;