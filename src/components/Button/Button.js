import React from "react";
import { ButtonContainer, RightSide, Tags } from ".";
import star from "../../images/star.png";
import Vector from "../../images/Vector.svg";

const Button = () => {
  return (
    <ButtonContainer>
      <Tags>
        {" "}
        <button>
          <img src={star} alt="" />
          Favourites
        </button>
        <button>CryptoCurrencies</button>
        <button>DeFi</button>
        <button>NFTs & Collectibles</button>
      </Tags>
      <RightSide>
        <p>show rows</p>
        <button>
          100 <img src={Vector} alt="" />
        </button>
      </RightSide>
    </ButtonContainer>
  );
};

export default Button;
