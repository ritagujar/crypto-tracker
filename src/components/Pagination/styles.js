import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: end;

  @media only screen and (max-width: 450px) {
    justify-content: center;
  }

  button {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    padding: 5px;
    cursor: pointer;
    text-decoration: none;
    color: #212b36;
    /* border-radius: 4px; */

    @media only screen and (max-width: 390px) {
      font-size: 11px;
      padding: 3.5px;
    }

    &:hover {
      color: #212b36;
    }

    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }

  ul {
    margin: 15px 0;
    display: flex;
    gap: 10px;
    list-style-type: none;

    @media only screen and (max-width: 350px) {
      gap: 3.2px;
    }
  }

  li {
    background: #ffffff;
    /* border: 1px solid #dfe3e8; */
    /* border: 1px solid #212b36; */
    border: 1px solid #dfe3e8;
    border-radius: 4px;

    &:hover {
      background-color: #eff2f5;
      border: 1px solid #212b36;
    }
  }
`;
