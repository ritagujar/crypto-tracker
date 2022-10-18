import styled from "styled-components";

export const TableContainer = styled.div`
  img {
    text-align: center;
    height: 24px;
    width: 24px;
    margin-right: 5px;
  }

  span {
    text-align: center;
    margin-left: 5px;
    text-transform: uppercase;
    color: #808a9d;
  }

  table {
    width: 100%;
    th {
      text-align: left;
      border-bottom: 1px solid #eff2f5;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      padding: 8px 0;
      color: #000000;
    }

    tbody {
      td {
        padding: 10px 0;
        border-bottom: 1px solid #eff2f5;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        /* identical to box height, or 171% */

        color: #222531;
      }
    }
  }
`;
