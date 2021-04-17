import { useState } from 'react'
import styles from 'styles/header/Header.module.css'

import Close from 'components/Icons/Close'

export default function Header () {
  const [showModal, setShowModal] = useState(false)
  const handleShedule = (e) => {
    setShowModal(!showModal)
  }
  return (
    <>
      <div className={`${styles.modal}  ${showModal ? styles.modalActive : ''}`}>
        <button>close</button>
        <div className="modaBody">
          <div className="wrapper-content">
            <h2 className="title">Programación</h2>
            <h4>Miercoles 8 Abril 2021</h4>
          </div>
          <div className="auto-scroll">
            <ul>
              <li className={styles.listDaysItem}><button className={styles.btnListDay}>Lunes</button></li>
              <li className={styles.listDaysItem}><button className={styles.btnListDay}>Martes</button></li>
              <li className={styles.listDaysItem}><button className={styles.btnListDay}>Miercoles</button></li>
              <li className={styles.listDaysItem}><button className={styles.btnListDay}>Jueves</button></li>
              <li className={styles.listDaysItem}><button className={styles.btnListDay}>Viernes</button></li>
              <li className={styles.listDaysItem}><button className={styles.btnListDay}>Sábado</button></li>
              <li className={styles.listDaysItem}><button className={styles.btnListDay}>Domingo</button></li>
            </ul>
          </div>

          <div className="md:grid-2 resultProgramming wrapper-content">
            <div className={styles.programming}>
              <h3 className={styles.amPm}>A.M.</h3>
              <div className={styles.blockShedule}>
                <div className={styles.timer}>00:00</div>
                <div className={styles.title}>
                  <span>¡Sonando!</span>
                  <p>Hablemos de Salud</p>
                </div>
              </div>
              <div className={styles.blockShedule}>
                <div className={styles.timer}>00:00</div>
                <div className={styles.title}>
                  <p>Hablemos de Salud</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <header className={styles.header}>
        <div className="logo">
          <img src="/images/logo-bethel.svg"/>
          <h1>Bethel Radio</h1>
        </div>
        <div className={styles.actionTop}>
          <button onClick={handleShedule} className={styles.btnHeader}><Close /></button>
          <button onClick={handleShedule} className={styles.btnHeader}>Programación</button>
        </div>
      </header>
    </>
  )
}
