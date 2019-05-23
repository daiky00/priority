import React from 'react';
import styles from './Key.module.css';

const Key = (props) => {
  return (
    <React.Fragment>
      <span className={styles.label}>{props.label}</span>
      <span className={styles.value}>{props.value}</span>
    </React.Fragment>
  )
}

export default Key;