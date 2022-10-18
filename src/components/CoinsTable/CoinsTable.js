import React from "react";
import { TableContainer } from ".";
import useData from "../../Hooks/useData";
import star from "../../images/star.png";
import downarrow from "../../images/downarrow.png";
import uparrow from "../../images/uparrow.png";
import { BsThreeDotsVertical } from "react-icons/bs";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CoinsTable = () => {
  const [coins, loading] = useData();
  console.log(coins);
  return (
    <TableContainer className="container">
      {loading ? (
        <p>Loading</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th></th>
              <th>#</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>24H</th>
              <th>7D</th>
              <th>MARKET CAP</th>
              <th>VOLUME(24H)</th>
              <th>CIRCULATING SUPPLY</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, index) => (
              <tr key={coin.id}>
                <td>
                  {" "}
                  <img
                    src={star}
                    alt="star"
                    style={{
                      width: "13px",
                      height: "13px",
                    }}
                  />
                </td>
                <td>{index + 1}</td>
                <td>
                  <img src={coin.image} alt="" />
                  {coin.name}
                  <span>{coin.symbol}</span>
                </td>
                <td>${numberWithCommas(coin.current_price)}</td>
                <td style={{ color: "#EA3943" }}>
                  {" "}
                  <img
                    src={downarrow}
                    alt=""
                    style={{ width: "10px", height: "6px" }}
                  />
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td style={{ color: "#16C784 " }}>
                  {" "}
                  <img
                    src={uparrow}
                    alt=""
                    style={{ width: "10px", height: "6px" }}
                  />
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td>
                  ${numberWithCommas(coin.market_cap.toString().slice(0, -6))}
                </td>
                <td>${numberWithCommas(coin.total_volume)}</td>
                <td>${numberWithCommas(coin.circulating_supply)}</td>
                <td>
                  <BsThreeDotsVertical />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </TableContainer>
  );
};

export default CoinsTable;
