import React from "react";
import "./User.css";
import Account from "../../../Assets/Account.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const User = () => {
  const [username, setusername] = useState("Kunal Singla");
  const [userid, setuserid] = useState("12140960");
  const [userphone, setuserphone] = useState("1234567890");
  const [useremail, setuseremail] = useState("hello@gmail.com");
  const [useraddres, setuseraddress] = useState("2527 Indore");
  const [userpassword, setuserpassword] = useState("ABCD");
  // const nav = useNavigate();
  // function Update(username, userid, userphone, useremail, useraddres) {
  //   console.log("da");
  //   nav("updetails", {
  //     state: { username, userid, userphone, useremail, useraddres },
  //   });
  // }
  return (
    <div className="User">
      <div className="User-Box">
        <div className="Image-User">
          <img src={Account} alt="Account" />
        </div>
        <div className="Details-User">
          <div className="Detail-Div">
            <div className="Name-User">{username}</div>
            <div className="Id-User">{userid}</div>
          </div>
          <div className="Detail-User"> {userphone}</div>
          <div className="Detail-User">{useremail}</div>
          <div className="Detail-User">{useraddres}</div>
        </div>
        <div className="Button-User">
          <NavLink
            to="updetails"
            state={{
              usersname: username,
              usersid: userid,
              usersphone: userphone,
              usersemail: useremail,
              usersaddres: useraddres,
            }}
          >
            <button>Update Details</button>
          </NavLink>
          <NavLink
            to="uppassword"
            state={{
              userspassword: userpassword,
            }}
          >
            <button>Update Password</button>{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default User;
