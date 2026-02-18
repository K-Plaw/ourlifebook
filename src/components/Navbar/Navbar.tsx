"use client";

import React, { useState } from "react";
import "./Navbar.css";
import ProfilePill from "../ProfilePill/ProfilePill";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Left: Logo */}
      <div className="nav-left">
        <Image
          src="/assets/logo.png"
          alt="Lifebook Logo"
          width={40}
          height={40}
        />
        <span className="logo-text">Lifebook</span>
      </div>

      {/* Center: Desktop Links */}
      <div className="nav-center">
        <div className="nav-link">
          <Image src="/assets/lovestory.png" alt="" width={24} height={24} />
          <span>LoveStory</span>
        </div>

        <div className="nav-link">
          <Image src="/assets/family-tree.png" alt="" width={24} height={24} />
          <span>Family Tree</span>
        </div>

        <div className="nav-link">
          <Image src="/assets/roadmap.png" alt="" width={24} height={24} />
          <span>Roadmap</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="nav-right">
        <ProfilePill
          username="Praise"
          nickname="The Legend"
          familyRole="Son/Brother"
          familyName="Lawrence"
          avatarSrc="/assets/default-avatar.png"
          isAdmin={true}
        />

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-link">LoveStory</div>
          <div className="mobile-link">Family Tree</div>
          <div className="mobile-link">Roadmap</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
