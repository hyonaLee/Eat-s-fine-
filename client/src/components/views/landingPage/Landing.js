import React from "react";
import styled from "styled-components";
import SearchBox from "../../SearchBox";
import InfoToday from "./InfoToday";
import RecomendBtn from "./RecomendBtn";
import Cloud from './WeaterIMG/Cloud';
const MainDivStyle = styled.div`
  background-color: #a5a0a0;
  margin: auto;
  width: 100%;
`;

function Landing(props) {
  return (
    <MainDivStyle>
      <Cloud />
      <InfoToday />
      {/* <SearchBox/> */}
      <RecomendBtn />

    </MainDivStyle>
  );
}

export default Landing;
