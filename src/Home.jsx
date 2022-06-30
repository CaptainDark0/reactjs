import "./css/landingpage.css";
import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import { useMoralis } from "react-moralis";
import { Web3Auth } from "@web3auth/web3auth";

function Home() {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();
  console.log(isAuthenticated);

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({
        provider: "web3Auth",
        clientId:
          "BON5amDs3TtsrzOwRgYuP25eFyR5jsb0XegcAQ9Z2NUX99r07XQe5mrTNo4s2auNxszIbkgmuPg54bXM4ow3U9w",
        signingMessage: "Log in using Moralis",
      }).catch(function (error) {
        console.log(error);
      });
    }
  };

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  useEffect(() => {
    if (isAuthenticated) {
     
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <>
      {isAuthenticated ? (
        <>
          <Dashboard logOut={logOut} />
        </>
      ) : (
        <>
          <div className="container min-vh-100">
            <div className="row min-vh-100 justify-content-center align-items-center">
              <div className="col-md-6">
                <img src={require("./images/big-diamond.png")} alt="" />
                <div>
                  <h2>Cryft Cards</h2>
                </div>
                <div>
                  <h3>Welcome to the Moon</h3>
                </div>
                <div>
                  <button type="button" onClick={login}>
                    Enter Dashboard
                  </button>
                </div>
              </div>
            </div>

            <div className="row justify-content-center align-items-center">
              <div className="col-md-4">
                <img src={require("./images/smalldiamond.png")} alt="" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
