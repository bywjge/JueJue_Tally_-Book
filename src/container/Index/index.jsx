// About/index.jsx
import React from 'react'
import { Button } from 'zarm'
import s from './style.module.less'

export default function About() {
  return <div className={s.index}>
    <span>样式</span>
    <p>Index</p>
    <Button theme='primary'>按钮</Button>
  </div>
}