import { useState } from 'react'
import ModalProgram from 'components/ModalProgram'

import styles from 'styles/header/Header.module.css'



export default function Header ({days,shedule}) {
  const [showModal, setShowModal] = useState(false)
  const handleShedule = (e) => {    
    setShowModal(!showModal)
    if(!showModal){
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      const body = document.body;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}`;
    }else{
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
      });
    }
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
