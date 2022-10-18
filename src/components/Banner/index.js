import styled from "styled-components";

export const BannerContainer = styled.div`
  height: 280px;
  /* background-color: cyan; */
  border-bottom: 1px solid #dedfe2;

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 35px;
    letter-spacing: -0.03em;
    margin-top: 10px;
    color: #000000;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 11.82px;
  margin-top: 34px;

  /* padding-top: 2rem; */
`;

export const Card = styled.div`
  width: 449.12px;
  height: 132.96px;
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 1.47737px 17.7284px 4.43211px rgba(208, 214, 227, 0.3);
  border-radius: 12px;

  img {
    margin: 0 20px;
  }
`;

export const TextContainer = styled.div`
  p {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 27px;
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 27px;
    letter-spacing: -0.03em;
    color: #000000;
  }
`;
