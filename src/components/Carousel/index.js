import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  margin-top: 34px;
`;

export const Card = styled.div`
  width: 449.12px;
  height: 132.96px;
  display: flex;
  margin: 0 5px;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 1.47737px 17.7284px 4.43211px rgba(208, 214, 227, 0.3);
  border-radius: 12px;

  img {
    margin: 0 20px;
    @media only screen and (max-width: 480px) {
      margin: 0 10px;
    }
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

    @media only screen and (max-width: 480px) {
      font-size: 13px;
      line-height: 20px;
    }
  }
`;
