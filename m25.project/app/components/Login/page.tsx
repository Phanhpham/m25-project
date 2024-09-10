import React from "react";
import "./login.css";
export default function page() {
  return (
    <div className="wrapper animated bounce">
    <h1>GIFTOS</h1>
    <hr />
    <form>
      <label id="icon" htmlFor="username">
        <i className="fa fa-user" />
      </label>
      <input type="text" placeholder="Username" id="username" />
      <label id="icon" htmlFor="password">
        <i className="fa fa-key" />
      </label>
      <input type="password" placeholder="Password" id="password" />
      <input type="submit" defaultValue="Sign In" />
      <hr />
      <div className="crtacc">
        <a href="/components/register">Create Account</a>
      </div>
    </form>
  </div>
  
  );
}
