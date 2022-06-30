import "./css/redeem.css";

function Redeem() {
  return (
    <>
      <div className="col-md-9">
        <div className="header">
          <h3>Gas Tank</h3>
          <div className="bg-rounded">
            <img className="vector" src="./images/Vector.png" alt="" />
            <img className="bell" src="./images/bell.png" alt="" />
          </div>
          <div className="bg-block"></div>
          <div className="name-addr">
            <h6>Brokeln Simons</h6>
          </div>
          <div className="hrz-separator"></div>
        </div>
        <div className="hrz-separator"></div>
        <div className="content">
          <div className="main-heading">
            <h1>Redeem Cryft Cards</h1>
            <div className="input-text">
              <input type="text" placeholder="Enter Serial Number" />
              <button type="button">Redeem</button>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <h1>Redeemed Cryft Cards</h1>
          <h4>No Cryft Card Redeemed</h4>
        </div>
      </div>
    </>
  );
}
export default Redeem;
