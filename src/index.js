/* @flow */
import React from 'react'
import style from './style.css'

type propsType = {
  name: string
}

export const Hello = ({name}:propsType) => <div className={style.hello}>Hello {name}!</div>

export default Hello
