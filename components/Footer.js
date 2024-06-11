// website/components/Footer.js
import React from 'react';
import styles from './Footer.module.css'; // Importiere die CSS-Module

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>Über uns</h4>
          <p>Informationen über das Unternehmen.</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Kontakt</h4>
          <p>Email: liam.roth@bwdbern.ch</p>
          <p>Telefon: +123 456 7890</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Meine Sozialen Medien</h4>
          <ul className={styles.socialLinks}>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} MeineApp. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}

export default Footer;
