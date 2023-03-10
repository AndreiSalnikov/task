import React, {useState} from 'react';
import styles from './Checkbox.module.scss'
import {BsSquare, BsFillCheckSquareFill} from "react-icons/bs";
import styled, {css} from "styled-components";

const Checkbox = ({color,text}) => {
  const [checked, setChecked] = useState(false);
    styled.input `${({}) => css`position: absolute;`}`;

  const checkHandler = (e) => {
    setChecked(e.currentTarget.checked);
  };

  return (
    <>
      <label htmlFor="checkbox" className={checked ? (color==='green' ? `${styles.checkbox} ${styles.checkbox_type_correct}` : `${styles.checkbox} ${styles.checkbox_type_incorrect}`) : `${styles.checkbox}`}>
        <input className={styles.checkbox__input}
          type="checkbox"
          onClick={checkHandler}
          style={{opacity: 0}}
        />
        {!checked && <BsSquare fill={"grey"}  size={20}/>}
        {checked && <BsFillCheckSquareFill fill={color}  size={20}/>}
        <label className={styles.checkbox__label}>{text}</label>
      </label>
    </>
  );
};

export default Checkbox;
