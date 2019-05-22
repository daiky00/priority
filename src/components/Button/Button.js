import React from 'react';
import styles from './Button.module.css';
const Color = (color) => {
  switch(color) {
    case 'primary':
     return styles.btnPrimary
    default:
      return ''
  }
}

const Button = (props) => {
  return (
    <button className={`${styles.btn} ${Color(props.color)}`} onClick={props.onClick} type={props.type}>{props.children}</button>
  )
}

export default Button;