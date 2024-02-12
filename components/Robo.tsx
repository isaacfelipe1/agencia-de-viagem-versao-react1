import React from 'react';
import styles from '../styles/robo.module.css';

function WhatsAppButton() {
  return (
    <a className="btn1"  href="https://api.Whatsapp.com/send?phone=55" target="_blank">
      <img src="https://cdn-icons-png.flaticon.com/512/1998/1998614.png" alt="Whatsapp" width="70px" height="70px" title="Whatsapp" className={styles.btn1}/>
    </a>
  );
}

export default WhatsAppButton;
