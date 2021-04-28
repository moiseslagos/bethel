import { useState } from 'react'

import Conversation from 'components/Icons/Conversation'
import Close from 'components/Icons/Close'

import styles from 'styles/components/peticiones/Peticiones.module.css'

export default function Peticiones () {
  const [smallPeticion, setSmallPeticion] = useState(false)
  const handlerClosePeticion = () => {
    setSmallPeticion(true)
  }
  return (
    <div className={`${styles.btn_formWrap} ${smallPeticion ? styles.btn_formCircle : ''}`}>
      {!smallPeticion && <button onClick={handlerClosePeticion} className={styles.btn_form_close}><Close /></button>}
      <a href="https://docs.google.com/forms/d/1fttvHqyDGch3PYqNxlcrlbK3ahH8r67iJyrMK32-cb0/edit" target="_blank" rel="noreferrer" className={`${styles.btn_form} ${smallPeticion ? styles.btn_formCircle : ''}`}>
        <div className={styles.btn_form__icon}>
        <Conversation />
        </div>
        {!smallPeticion && <div className={styles.btn_form__title}>Déjanos tus <br />peticiones</div>}
      </a>
    </div>
  )
}