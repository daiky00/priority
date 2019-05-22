import React from 'react';
import styles from './Input.module.css';

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

const Input = (props) => {
  return (
    <React.Fragment>
      <label className={`${styles.label}`} htmlFor={props.name}>{props.title}</label>
      <input 
        className={`${styles.input} ${Size(props.size)}`}
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        required={props.required}
      />
      <span className={`${styles.error}`}>{props.error}</span>

    </React.Fragment>
  )
}

export default Input;