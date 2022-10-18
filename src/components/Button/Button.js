import React from "react";
import { ButtonContainer, RightSide, Tags } from ".";
import star from "../../images/star.png";
import Vector from "../../images/Vector.svg";

const Button = () => {
  return (
    <ButtonContainer>
      <Tags>
        {" "}
        <span>
          <img src={star} alt="" />
          Favourites
        </span>
        <span>CryptoCurrencies</span>
        <span>DeFi</span>
        <span>NFTs & Collectibles</span>
      </Tags>
      <RightSide>
        <p>show rows</p>
        <span>
          100 <img src={Vector} alt="" />
        </span>
      </RightSide>
    </ButtonContainer>
  );
};

export default Button;
