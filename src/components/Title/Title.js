import React from 'react';
import styles from './Title.module.css';

const Title = (props) => {
  switch (props.variant) {
    case 'h1':
      return (<h1 className={styles.h1}>{props.children}</h1>)
    case 'h2':
      return (<h2 className={styles.h2}>{props.children}</h2>)
    case 'h3':
      return (<h3>{props.children}</h3>)
    default:
      return (<h1 className={styles.h1}>{props.children}</h1>)
  }
}

export default Title;