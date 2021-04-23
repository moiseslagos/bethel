import { useState, useEffect } from 'react'

import Close from 'components/Icons/Close'
import styles from 'styles/components/modal/ModalProgram.module.css'

export default function ModalProgram ( {setModal, days, shedule, closeModal} ) {
  const [showModal, setShowModal] = useState(setModal)
  const [listShedule, setListShedule] = useState([])
  const [sonando, setSonando] = useState('')
  const [showSonando, setShowSonando] = useState(true)
  const [activeDay, setActiveDay] = useState(days.day)
  useEffect( ()=>{
    setShowModal(setModal)
    if(days.minuts>0 && days.minuts <30){
      setSonando('00')
    }else{
      setSonando('30')
    }
  })
  useEffect( ()=>{
    console.log(days)
    setListShedule(shedule[days.day.toLowerCase()])
  },[])
  const handleClickDay = (e)=>{
    const day = e.toLowerCase()
    e===days.day ? setShowSonando(true) : setShowSonando(false)
    setActiveDay(e);
    setListShedule(shedule[day])
  }
  return (
    <div className={`${styles.modal}  ${showModal ? styles.modalActive : styles.modalDesactive}`}>
      <button onClick={()=>closeModal(false)} className={styles.btnClose}><Close /></button>

      <div className="modaBody">        
        <div className="wrapper-content">
          <h2 className="title">Programación</h2>
          <h4>{`${days.day} ${days.date} de ${days.month}`}</h4>
        </div>
        <div className="auto-scroll">
          <ul>
            {
              days.DAYS.map((value, index) => {
                return (
                  <li key={index} className={styles.listDaysItem}>
                    <button type="button" onClick={()=>handleClickDay(value)} className={`${styles.btnListDay} ${activeDay == value ? styles.activeBtnListDay:'' }`}>{value}</button>
                  </li>
                )
              })
            }
          </ul>
        </div>

        <div className="md:grid-2 resultProgramming wrapper-content">

          <div className={styles.programming}>
            <h3 className={styles.amPm}>A.M.</h3>
            {
              Object.entries(listShedule).map(([key, value], index) => {
                if(key.slice(0,2) < 12){
                  return ( <div key={`am-${index}`} className={styles.blockShedule}>
                    <div className={styles.timer}>{key}</div>
                    <div className={styles.title}>
                      { showSonando ? key.slice(0,2) == days.hours ? 
                          (key.slice(3,5) == sonando ) ? <span>¡Sonando!</span> : '' : 
                        '': ''
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
              Object.entries(listShedule).map(([key, value], index) => {
                if(key.slice(0,2) > 11){
                  return ( <div key={`pm-${index}`} className={styles.blockShedule}>
                    <div className={styles.timer}>{key}</div>
                    <div className={styles.title}>
                      { showSonando ? key.slice(0,2) == days.hours ? 
                          (key.slice(3,5) == sonando ) ? <span>¡Sonando!</span> : '' : 
                        '': ''
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
  )
}
