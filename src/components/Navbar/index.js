import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  box-shadow: 0px 0px 1.2rem rgba(16, 38, 73, 0.06);
  border-bottom: 1px solid #dedfe2;
  background-color: #ffffff;
`;

export const NavbarContent = styled.div`
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 16.581195831298828px;
    width: 16px;
    left: 1490px;
    top: 21.7628173828125px;
    border-radius: 0px;
  }
`;

export const Heading = styled.div`
  font-family: inter;
  font-weight: 700;

  img {
    margin-right: 5px;
    color: #000000;
    height: 1rem;
  }
`;

export const Hamburger = styled.div`
  height: 12px;

  img {
    margin-right: 10px;
    @media only screen and (max-width: 480px) {
      display: none;
    }
  }
`;

export const SearchImg = styled.span;
