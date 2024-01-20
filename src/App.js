import React, { useState, useEffect } from "react";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Login, TopBar, SearchBar, User, Contact, Home, SideBar } from "./Import.jsx";

function App() {
  const [logined, setLogined] = useState(false);

  useEffect(() => {
    // You can perform side effects or data fetching here
    // For example, check if the user is logged in and update the state accordingly
  }, []);

  return (
    <Router>
      <div className="App flex">
        {logined ? (
          <>
            <div className="sideb">
              <SideBar />
            </div>
            <div className="content ">
              <TopBar username={`${logined ? "Kunal Singla" : "Sign In"}`} />
              <SearchBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="user" element={<User />} />
                <Route path="contact" element={<Contact />} />
                {/* Add a default route for unmatched paths */}
                <Route path="*" element={<Home />} />
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="login" element={<Login />} />
            {/* Add a default route for unmatched paths */}
            <Route path="*" element={<Login />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
