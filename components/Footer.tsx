import React from 'react';
import styles from '../styles/footer.module.css';
function Footer() {
  return (
    <footer className={styles.footer1}>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>&copy; 2023 Agência online, Inc. Direitos Reservados.</p>
      </div>
      <div>
        Desenvolvido por: Isaac Felipe
        <p>2023</p>
      </div>
    </footer>
  );
}
export default Footer;
