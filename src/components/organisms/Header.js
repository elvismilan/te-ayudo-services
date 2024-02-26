import React from 'react'
import Logo from '../atoms/Logo'
import styles from '../../style';

export const Header = () => {
  return (
    <header className={`${styles.boxWidth} ${styles.flexCenter} ${styles.paddingY}`}>
      <Logo />
    </header>
  )
}
