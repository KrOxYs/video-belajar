"use client";
import NavbarComponent from "../components/global/Navbar";
import Register from "../components/Auth/Register";

export default function RegisterPage() {
  return (
    <div>
      <NavbarComponent showItems={false} />
      <Register />
    </div>
  );
}
