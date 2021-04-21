import { useState } from 'react'
import ModalProgram from 'components/ModalProgram'

import styles from 'styles/header/Header.module.css'



export default function Header ({days,shedule}) {
  const [showModal, setShowModal] = useState(false)
  const handleShedule = (e) => {
    setShowModal(!showModal)
  }
  return (
    <>
      <ModalProgram setModal={showModal} days={days} shedule={shedule} closeModal={handleShedule} />
      <header className={styles.header}>
        <div className="logo">
          <img src="/images/logo-bethel.svg"/>
          <h1>Bethel Radio</h1>
        </div>
        <div className={styles.actionTop}> 
          <button onClick={handleShedule} className={styles.btnHeader}>Programación</button>              
        </div>
      </header>
    </>
  )
}
