import React from 'react';
import  Logo from "./Logo";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <Logo />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About us</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/profile">profile</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </>
  );
}

export default Navbar;
