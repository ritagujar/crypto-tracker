import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 15px 0;

  span {
    display: flex;
    align-items: center;
    padding: 8px;
    background: #eff2f5;
    border-radius: 8px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #000000;

    img {
      width: 13px;
      height: 13px;
      padding-right: 1px;
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  gap: 8px;
  margin: 15px 0;

  span {
    padding: 8px;
    background: #eff2f5;
    border-radius: 8px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #000000;
  }
`;
