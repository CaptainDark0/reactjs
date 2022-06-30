import "./css/buysend.css";
function Wallet() {
  return (
    <div className="col-md-9">
      <div className="header">
        <h3>Gas Tank</h3>
        <div className="bg-rounded">
          <img className="vector" src={require("./images/Vector.png")} alt="" />
          <img className="bell" src={require("./images/bell.png")} alt="" />
        </div>
        <div className="bg-block"></div>
        <div className="name-addr">
          <h6>Brokeln Simons</h6>
        </div>
      </div>
      <div className="hrz-separator"></div>
      <div className="row">
        <div className="col-md-5 content">
          <h3 className="sub-heading">Gas Tank</h3>
          <h3 className="sub-heading-2">0.00BNB</h3>
          <button type="button">Buy Gas</button>
        </div>
        <div className="col-md-5 questions">
          <h3 className="faq">FAQ's</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-11 main">
          <div className="qr-code">
            <h3>QR CODE</h3>
          </div>
          <div className="hex">
            <h6>0x33Bb2864866C70424c84731052EcA8A9a2Cc5bFf</h6>
          </div>
          <div className="separator"></div>
          <div className="sendcryft">
            <h4>Cryft</h4>
            <button>Send</button>
          </div>
          <div className="sendbusd">
            <h4>BUSD</h4>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Wallet;