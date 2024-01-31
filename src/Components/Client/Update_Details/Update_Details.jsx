import React, { useState } from "react";
import Account from "../../../Assets/Account.svg";
import "./Update_Details.css";
import { useLocation } from "react-router-dom";
export default function Update_Details() {
  const location = useLocation();
  // Now you can access the props like this:
  const { usersname, usersid, usersphone, usersemail, usersaddres } =
    location.state;
  const [username, setusername] = useState(usersname);
  const [userid, setuserid] = useState(usersid);
  const [userphone, setuserphone] = useState(usersphone);
  const [useremail, setuseremail] = useState(usersemail);
  const [useraddres, setuseraddress] = useState(usersaddres);
  function setvalue() {
    console.log(username);
  }
  return (
    <div className="User">
      <div className="User-Box">
        <div className="Image-User">
          <img src={Account} alt="Account" />
        </div>
        <div className="Details-User">
          <div className="Update">
            <label>Name:</label>
            <input
              type="text"
              className="Name-User"
              value={username}
              onChange={(event) => setusername(event.target.value)}
            />
          </div>
          <div className="Update">
            <label>Id:</label>
            <input
              className="Id-User"
              value={userid}
              onChange={(event) => setuserid(event.target.value)}
            />
          </div>
          <div className="Update">
            <label>Phone:</label>
            <input
              className="Detail-User"
              value={userphone}
              onChange={(event) => setuserphone(event.target.value)}
            />
          </div>
          <div className="Update">
            <label>Email:</label>
            <input
              className="Detail-User"
              value={useremail}
              onChange={(event) => setuseremail(event.target.value)}
            />
          </div>
          <div className="Update">
            <label>Address:</label>
            <input
              className="Detail-User"
              value={useraddres}
              onChange={(event) => setuseraddress(event.target.value)}
            />
          </div>
        </div>
        <div className="Button-Users">
          <button onClick={setvalue}>Update Detail</button>
        </div>
      </div>
    </div>
  );
}
