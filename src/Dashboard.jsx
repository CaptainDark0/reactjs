import "./css/dashboard.css";
import Redeem from "./Redeem";
import Swap from "./Swap.jsx";
import Nft from "./Nft.jsx";
import Wallet from "./Wallet.jsx";
import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import { Web3Auth } from "@web3auth/web3auth";

function Dashboard(props) {
  const [page, setpage] = useState("Swap");


  return (
    <div className="dashboard">
      <div className="container-fluid">
        <div className="row justify-content-start align-items-center">
          <div className="col-md-3">
            <div>
              <img src={require("./images/smalldiamond.png")} alt="" />
            </div>

            <ul className="top-header">
              <li
                onClick={() => {
                  setpage("Redeem");
                }}
              >
                <a href="#">Redeem Card</a>
              </li>
              <li
              onClick={() => {
                setpage("Wallet");
              }}>
                <a href="#">Crypto Wallet</a>
              </li>
              <li
                onClick={() => {
                  setpage("Nft");
                }}
              >
                <a href="#">NFT Collection</a>
              </li>
              <li
                onClick={() => {
                  setpage("Swap");
                }}
              >
                <a href="#">Swap Crypto</a>
              </li>
            </ul>
            <ul className="middle-header">
              <li>
                <a href="">Cryft Shop</a>
              </li>
              <li>
                <a href="">Cryft Zone</a>
              </li>
              <li>
                <a href="">Education</a>
              </li>
            </ul>
            <ul className="exitdash">
              <li onClick={props.logOut}>
                <a href="#">Exit Dashboard</a>
              </li>
            </ul>
          </div>
          {page === "Redeem" && <Redeem />}

          {page === "Swap" && <Swap />}
          {page === "Nft" && <Nft />}
          {page === "Wallet" && <Wallet />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
