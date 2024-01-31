import React, { useState } from "react";
import Account from "../../../Assets/Account.svg";
import "../Update_Details/Update_Details.css";
import { useLocation } from "react-router-dom";
export default function Update_Password() {
  const location = useLocation();
  // Now you can access the props like this:
  const { userspassword } = location.state;
  const [userpassword, setuserpassword] = useState(userspassword);
  function setvalue() {
    console.log(userpassword);
  }
  return (
    <div className="User">
      <div className="User-Box">
        <div className="Image-User">
          <img src={Account} alt="Account" />
        </div>
        <div className="Details-User">
          <div className="Update">
            <label>Password</label>
            <input
              type="text"
              className="Name-User"
              value={userpassword}
              onChange={(event) => setuserpassword(event.target.value)}
            />
          </div>
        </div>
        <div className="Button-Users">
          <button onClick={setvalue}>Update Pasword</button>
        </div>
      </div>
    </div>
  );
}
