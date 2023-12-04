import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

import "./Profile.scss";

const New = () => {
  return (
    <div className="profile">
      <Sidebar />
      <div className="profileContainer">
        <Navbar />
        <div className="Top">
          <h1>User profile page</h1>
        </div>
        <div className="Bottom">
          <div className="left">
            <div className="item">
              <img
                src="https://www.lifewire.com/thmb/TRGYpWa4KzxUt1Fkgr3FqjOd6VQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Aaron Fang" />
              </div>
              <div className="formInput">
                <label>Name</label>
                <input type="text" placeholder="Aaron fang" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="Aaronfang@gmail.com" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Phone Number</label>
                <input type="number" placeholder="+1 234-234-4556" />
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
