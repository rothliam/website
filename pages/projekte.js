import React from 'react'
import Styles from './projekte.module.css'

function projekte() {
  return (
    <>
    <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Roboto:700');

        body {
          font-family:'Roboto';
          background-color: #131417;  
        }
    `}
    </style>
    <div className={Styles.container}>
    <div className={Styles.maintitle}>
      <p>Hello you</p> 
    </div>
    </div>
    <div className={Styles.content}>
      <a>der betende mann hat ein gebet ausgesprochen, als er sein gebet vollendet hatte, war er glücklich und zu frieden. daher möchte der mann auch dass er nach hause kehren darf. dede dedededa asd adasde ich habe krebs</a>
    </div>
    </>
  )
}

export default projekte
