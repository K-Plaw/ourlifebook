"use client";

import React, { useState } from "react";
import "./Navbar.css";
import ProfilePill from "../ProfilePill/ProfilePill";
import Image from "next/image";
import { daydream } from '@/fonts';

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
        <span className={`${daydream.className} logoText`}>Lifebook</span>
      </div>

      {/* Center: Desktop Links */}
      <div className="nav-center">
        <div className="nav-link">
          <Image src="/assets/lovestory.png" alt="" width={24} height={24} />
          <span className={daydream.className}>LoveStory</span>
        </div>

        <div className="nav-link">
          <Image src="/assets/family-tree.png" alt="" width={24} height={24} />
          <span className={daydream.className}>Family Tree</span>
        </div>

        <div className="nav-link">
          <Image src="/assets/roadmap.png" alt="" width={24} height={24} />
          <span className={daydream.className}>Roadmap</span>
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
        <>
          <div
            className="overlay"
            onClick={() => setMenuOpen(false)}
          />

          <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
            <div className="mobile">
              &nbsp;
            </div>
            <div className="mobile-link" onClick={() => setMenuOpen(false)}>
              LoveStory
            </div>
            <div className="mobile-link" onClick={() => setMenuOpen(false)}>
              Family Tree
            </div>
            <div className="mobile-link" onClick={() => setMenuOpen(false)}>
              Roadmap
            </div>
          </div>

          {/* Floating Close Button */}
          <button
            className="close-button"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </>
      )}

    </nav>
);
};


export default Navbar;
