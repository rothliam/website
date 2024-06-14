import React from 'react'
import Styles from './index.module.css';

function index() {
  return (
    <div className={Styles.background}>
      <img className={Styles.gif} src="/coding.gif" alt="loading..." />
    </div>
  )
}

export default index
