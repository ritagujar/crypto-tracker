import React, { useState } from "react";
import { TableContainer } from ".";
import useData from "../../Hooks/useData";
import Loader from "../Loader/Loader";
import star from "../../images/star.png";
import downarrow from "../../images/downarrow.png";
import uparrow from "../../images/uparrow.png";
import stroke from "../../images/stroke.svg";
import { BsThreeDotsVertical } from "react-icons/bs";
import Pagination from "../Pagination/Pagination";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CoinsTable = () => {
  const [coins, loading] = useData();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <TableContainer className="container">
        {loading ? (
          <Loader />
        ) : (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th style={{ textAlign: "left" }}></th>
                  <th style={{ textAlign: "left" }}>#</th>
                  <th style={{ textAlign: "left" }}>NAME</th>
                  <th>PRICE</th>
                  <th>
                    24H{" "}
                    <img
                      src={stroke}
                      alt="Stroke"
                      style={{
                        width: "12px",
                        height: "9px",
                      }}
                    />
                  </th>
                  <th>7D</th>
                  <th>MARKET CAP</th>
                  <th>VOLUME(24H)</th>
                  <th>CIRCULATING SUPPLY</th>
                </tr>
              </thead>
              <tbody>
                {coins
                  .slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10)
                  .map((coin, index) => (
                    <tr key={coin.id}>
                      <td style={{ textAlign: "left" }}>
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
                      <td style={{ textAlign: "left" }}>
                        {coin.market_cap_rank}
                      </td>
                      <td style={{ textAlign: "left" }}>
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
                          style={{ width: "9px", height: "5px" }}
                        />
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </td>
                      <td style={{ color: "#16C784 " }}>
                        {" "}
                        <img
                          src={uparrow}
                          alt=""
                          style={{ width: "9px", height: "5px" }}
                        />
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </td>
                      <td>
                        $
                        {numberWithCommas(
                          coin.market_cap.toString().slice(0, -6)
                        )}
                      </td>
                      <td>
                        ${numberWithCommas(coin.total_volume).slice(0, -6)}
                        <p style={{ color: "#CFD6E4" }}>932,071 BTC</p>
                      </td>
                      <td>
                        $
                        {numberWithCommas(coin.circulating_supply).slice(0, -6)}
                      </td>
                      <td>
                        <BsThreeDotsVertical />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
        )}
      </TableContainer>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={coins.length}
        paginate={paginate}
      />
    </>
  );
};

export default CoinsTable;
