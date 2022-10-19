import styled from "styled-components";

export const BannerContainer = styled.div`
  border-bottom: 1px solid #dedfe2;
  @media only screen and (max-width: 480px) {
    border-bottom: none;
  }

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 35px;
    letter-spacing: -0.03em;
    margin-top: 10px;
    color: #000000;

    @media only screen and (max-width: 600px) {
      font-size: 18px;
      margin-bottom: 10px;
    }
    @media only screen and (max-width: 480px) {
      font-size: 15px;
      line-height: 20px;
    }
  }
`;
