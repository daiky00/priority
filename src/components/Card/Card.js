import React from 'react';
import styles from './Card.module.css'


const Card = (props) => {
  return (
    <React.Fragment>
      <div className={`${styles.card}`}>
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default Card;