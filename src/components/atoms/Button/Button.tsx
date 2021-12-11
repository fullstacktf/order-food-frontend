import React, { FC } from 'react'

interface ButtonProps {
  onClickHandler?: () => void
  styles?: string
  text: string
}

export const Button: FC<ButtonProps> = ({ text, styles, onClickHandler }) => {
  return styles ?
    (<button className={styles}  onClick={onClickHandler}>{text}</button>) : (<button onClick={onClickHandler}>{text}</button>)
  }

