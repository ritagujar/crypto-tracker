import styled from "styled-components";

export const TableContainer = styled.div`
  text-align: right;
  img {
    text-align: center;
    height: 24px;
    width: 24px;
    margin-right: 5px;

    @media only screen and (max-width: 450px) {
      height: 15px;
      width: 15px;
    }
  }

  span {
    text-align: center;
    margin-left: 5px;
    text-transform: uppercase;
    color: #808a9d;

    @media only screen and (max-width: 450px) {
      font-size: 10px;
    }
  }

  table {
    width: 100%;
    th {
      text-align: right;
      border-bottom: 1px solid #eff2f5;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      padding: 8px 0;
      color: #000000;

      @media only screen and (max-width: 450px) {
        font-size: 10px;
      }
    }

    tbody {
      td {
        padding: 8px 0;
        border-bottom: 1px solid #eff2f5;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        /* identical to box height, or 171% */
        color: #222531;

        @media only screen and (max-width: 450px) {
          padding: 5px 0;
          font-weight: 500;
          font-size: 10px;
          line-height: 15px;
        }
      }
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        /* identical to box height */

        letter-spacing: -0.035em;

        color: #000000;
      }
    }
  }
`;
