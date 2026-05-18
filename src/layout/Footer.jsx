import React from 'react';
import "./Footer.scss";
import logoFooter from '../images/logo_footer_kasa.svg';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__logo'>
      <img src={logoFooter} alt='Logo Kasa' className='footer_img'/>
      </div>
      <div className='footer__text'> © 2020 kasa. All rights reserved</div>
    </div>
  );
}

export default Footer;
