import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Styles from './Navbar.module.css';
 
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
 
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);
 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 
  return (
    <>
      <div className={Styles.all}>
        <div className={Styles.leftSide}>
          <div className={`${Styles.burger} ${menuOpen ? Styles.open : ''}`} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <img className={Styles.logo} src='./logo.jpeg' alt="Logo" />
        </div>
       
        <nav className={Styles.rightSide}>
          <ul className={Styles.nav_ul}>
            <li className={Styles.nav_ul_li}>
              <Link className={Styles.nav_ul_li_a} href="/">Home</Link>
            </li>
            <li className={Styles.nav_ul_li}>
              <Link className={Styles.nav_ul_li_a} href="/about">About</Link>
            </li>
            <li className={Styles.nav_ul_li}>
              <Link className={Styles.nav_ul_li_a} href="/projekte">Projekte</Link>
            </li>
            <li className={Styles.nav_ul_li}>
              <Link className={Styles.nav_ul_li_a} href="/hobbies">Hobbies</Link>
            </li>
            <li className={Styles.nav_ul_li}>
              <Link className={Styles.nav_ul_li_a} href="/dokumente">🔒 Dokumente</Link>
            </li>
          </ul>
         
        </nav>
      </div>
 
      <div className={`${Styles.mainContent} ${menuOpen ? Styles.blurred : ''}`}>
        {/* Hauptinhalt der Seite */}
      </div>
 
      <nav className={`${menuOpen ? Styles.nav_open : Styles.nav_closed}`}>
        <ul className={Styles.nav_ul_mobile}>
        <img className={Styles.logo} src="./logo.png" alt="Logo" />
          <li className={Styles.nav_ul_li}>
            <Link className={Styles.nav_ul_li_a} href="/">Home</Link>
          </li>
          <li className={Styles.nav_ul_li}>
            <Link className={Styles.nav_ul_li_a} href="/projekte">Projekte</Link>
          </li>
          <li className={Styles.nav_ul_li}>
            <Link className={Styles.nav_ul_li_a} href="/hobbies">Hobbies</Link>
          </li>
          <li className={Styles.nav_ul_li}>
              <Link className={Styles.nav_ul_li_a} href="/dokumente">🔒 Dokumente</Link>
          </li>
        </ul>
      </nav>
 
      {menuOpen && <div className={`${Styles.overlay} ${menuOpen ? Styles.visible : ''}`} onClick={toggleMenu}></div>}
    </>
  );
}
 
export default Navbar;