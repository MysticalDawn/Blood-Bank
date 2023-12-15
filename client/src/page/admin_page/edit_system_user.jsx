import { useState } from "react";
import { NavBar } from "../../components/nav_bar_admin";
import "../../style/admin_style/edit_system_user.css";
import axios from "axios";
export const Edit_System_User = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [bdate, setBdate] = useState("");
  const edit_system_user = async () => {
    const data = {
      id: localStorage.getItem("user"),
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      address: address,
      bdate: bdate,
    };
    const res = await axios.post("http://localhost:3000/edit_admin", data);
    console.log(res.data);
    if (res.data === "OK") {
      alert("Edit system user success");
      window.location.reload();
    } else {
      alert("Edit system user fail");
    }
  };
  return (
    <>
      <NavBar />
      <h1>Edit System User</h1>
      <div className="container-3">
        <div className="form-add">
          <label className="fname">First Name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            required
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          ></input>

          <label className="lname">Last Name:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            required
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          ></input>

          <label className="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></input>

          <label className="bdate">Birthdate:</label>
          <input
            type="date"
            id="bdate"
            name="bdate"
            required
            value={bdate}
            onChange={(e) => setBdate(e.target.value)}
          ></input>

          <label className="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <label className="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <input
            type="submit"
            value="Submit"
            className="btn-submit-1"
            onClick={edit_system_user}
          ></input>
        </div>
      </div>
    </>
  );
};
