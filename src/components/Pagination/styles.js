import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: end;

  @media only screen and (max-width: 450px) {
    justify-content: center;
  }
  ul {
    margin: 10px 0;
    display: flex;
    gap: 10px;
    list-style-type: none;

    @media only screen and (max-width: 330px) {
      gap: 5px;
    }
  }

  li {
    background: #ffffff;
    /* border: 1px solid #dfe3e8; */
    border: 1px solid #212b36;
    border-radius: 4px;

    &:hover {
      background-color: #eff2f5;
    }
  }

  a {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    padding: 5px;

    color: darkgray;
    text-decoration: none;

    &:hover {
      color: #212b36;
    }
  }
`;
