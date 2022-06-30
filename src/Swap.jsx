import "./css/swap.css";

function Swap() {
  return (
  
      <div className="col-md-9">
        <div className="header">
          <h3>Gas Tank</h3>
          <div className="bg-rounded">
            <img
              className="vector"
              src={require("./images/Vector.png")}
              alt=""
            />
            <img className="bell" src={require("./images/bell.png")} alt="" />
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
            <h1>Swap my Crypto</h1>
            <h6>Coming Soon</h6>
          </div>
        </div>
      </div>
  
  );
}
export default Swap;
