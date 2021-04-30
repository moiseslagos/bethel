import { useState, useEffect } from 'react'

import Close from 'components/Icons/Close'
import styles from 'styles/components/modal/ModalProgram.module.css'

export default function ModalProgram ({ setModal, days, shedule, closeModal }) {
  const formatDay = (day) => {
    const acentos = { á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u', Á: 'A', É: 'E', Í: 'I', Ó: 'O', Ú: 'U' }
    const daySplit = day.split('').map(letra => acentos[letra] || letra).join('').toString()
    return daySplit.toLowerCase()
  }
  const [showSonando, setShowSonando] = useState(true)
  const [activeDay, setActiveDay] = useState(days.day)
  const [modalProgram, setModalProgram] = useState({
    showModal: setModal,
    listShedule: shedule[formatDay(days.day)],
    sonando: ''
  })
  console.log(activeDay)
  useEffect(() => {
    if (days.minuts > 0 && days.minuts < 30) {
      setModalProgram({
        showModal: setModal,
        listShedule: shedule[formatDay(days.day)],
        sonando: '00'
      })
    } else {
      setModalProgram({
        showModal: setModal,
        listShedule: shedule[formatDay(days.day)],
        sonando: '30'
      })
    }
  }, [setModal])

  const handleClickDay = (e) => {
    const day = e.toLowerCase()
    setActiveDay(e)
    setModalProgram({
      showModal: setModal,
      listShedule: shedule[formatDay(day)],
      sonando: '00'
    })
    if (e === days.day) {
      setShowSonando(true)
    } else {
      setShowSonando(false)
    }
  }

  return (
    <div className={` ${styles.modal} ${modalProgram.showModal ? styles.modalActive : ''} `}>
      <button onClick={() => closeModal(false)} className={styles.btnClose}><Close /></button>

      <div className="modaBody">
        <div className="wrapper-desktop">
          <div className="main-desk">
            <div className="wrapper-content">
              <h2 className="title">Programación</h2>
              <h4>{`${days.day} ${days.date} de ${days.month}`}</h4>
            </div>
            <div className="auto-scroll">
              <ul>
                {
                  days.DAYS.map((value, index) => {
                    console.log(value + ' - ' + activeDay)
                    return (
                      <li key={index} className={styles.listDaysItem}>
                        <button type="button" onClick={() => handleClickDay(value)} className={`${styles.btnListDay} ${'Jueves' === value ? styles.activeBtnListDay : ''}`}>{value}</button>
                      </li>
                    )
                  })
                }
              </ul>
            </div>

            <div className="md-grid-2 resultProgramming wrapper-content">

              <div className={styles.programming}>
                <h3 className={styles.amPm}>A.M.</h3>
                {
                  modalProgram.listShedule && Object.entries(modalProgram.listShedule).map(([key, value], index) => {
                    if (Number(key.slice(0, 2)) < 12) {
                      return (
                        <div key={`am-${index}`} className={styles.blockShedule}>
                        <div className={styles.timer}>{key}</div>
                        <div className={styles.title}>
                          { showSonando ? Number(key.slice(0, 2)) === days.hours ? (key.slice(3, 5) === modalProgram.sonando) ? <span>¡Sonando!</span> : '' : '' : ''
                          }
                          <p>{value.title}</p>
                        </div>
                      </div>
                      )
                    }
                  })
                }
              </div>

              <div className={styles.programming}>
                <h3 className={styles.amPm}>P.M.</h3>
                {
                  modalProgram.listShedule && Object.entries(modalProgram.listShedule).map(([key, value], index) => {
                    if (key.slice(0, 2) > 11) {
                      return (
                        <div key={`pm-${index}`} className={styles.blockShedule}>
                        <div className={styles.timer}>{key}</div>
                        <div className={styles.title}>
                          { showSonando ? Number(key.slice(0, 2)) === days.hours ? (key.slice(3, 5) === modalProgram.sonando) ? <span>¡Sonando!</span> : '' : '' : ''
                          }
                          <p>{value.title}</p>
                        </div>
                      </div>
                      )
                    }
                  })
                }
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
