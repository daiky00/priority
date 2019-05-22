import React from 'react';
import styles from './Avatar.module.css';

const Size = (size) => {
  switch(size) {
    case 'xs':
     return styles.xs
    case 'sm':
     return styles.sm
    case 'md':
     return styles.md
    case 'lg':
     return styles.lg
    default:
      return size
  }
}

const Avatar = (props) => {
  return <img  className={`${styles.avatar} ${Size(props.size)}`} src={props.image} alt={props.alt} />
}

export default Avatar;