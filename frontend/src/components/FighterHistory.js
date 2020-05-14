import React, { Component } from "react";

class FighterHistory extends Component {
  render() {
    return (
      <div id="fighter-history">
        <ul className="list-group">
          <li className="list-group-item p-3 my-2 shadow">
            <h6>UFC 182 - Jones vs Cormier</h6>
            <p>
              Jan 03, 2015 <span> ~ Refree: Herb dean</span>
            </p>

            <div className="fight-result p-3 mx-3">
              <h5 className="heading mr-3">WIN</h5>
              <h6>VS</h6>
              <div className="result-opponent">
                <img
                  src="https://images.pexels.com/photos/2605587/pexels-photo-2605587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="fighter"
                  className="rounded-circle m-2 p-1 shadow"
                  height="80px"
                  width="80px"
                />
                <h6>Daniel Cormier</h6>
              </div>
            </div>
            <div className="result-details mr-3">
              <ul>
                <li>Decision</li>
                <li>Round 5</li>
                <li>5:00</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default FighterHistory;
