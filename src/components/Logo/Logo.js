import React from 'react';
import LogoImg from '../../images/logo.png';
import styles from './Logo.module.css';
const Logo = () => {
  return (
    <React.Fragment>
      <img className={`${styles.logo}`} src={LogoImg} />
      <span className={`${styles.logoText}`}>Priority</span>
    </React.Fragment>
  )
}

export default Logo;