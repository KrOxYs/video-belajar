"use client";

import Login from "../components/Auth/Login";

import NavbarComponent from "../components/global/Navbar";

export default function LoginPage() {
  return (
    <div>
      <NavbarComponent showItems={false} />
      <Login />
      {/* <Register/> */}
    </div>
  );
}
