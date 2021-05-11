import { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import styles from 'styles/header/Header.module.css'

const DynamicModalProgram = dynamic(
  () => import('components/ModalProgram'), { ssr: false }
)
export default function Header ({ days, shedule }) {
  const [showModal, setShowModal] = useState(false)
  const [showModalColabora, setShowModalColabora] = useState(false)
  const handleShedule = (e) => {
    if (e === 'programacion') {
      setShowModal(!showModal)
    }
    if (e === 'colabora') {
      setShowModalColabora(!showModalColabora)
    }
    if (!showModal && !showModalColabora) {
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y')
      const body = document.body
      body.style.position = 'fixed'
      body.style.top = `-${scrollY}`
      body.style.width = '100%'
    } else {
      const body = document.body
      const scrollY = body.style.top
      body.style.position = ''
      body.style.top = ''
      body.style.width = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`)
      })
    }
  }
  return (
    <>
      <DynamicModalProgram setModal={showModal} days={days} shedule={shedule} closeModal={() => { handleShedule('programacion') }} />
      <header className={styles.header}>
        <Link href={'/'}>
          <div className={styles.logoHeader}>
            <img src="/images/logo-bethel.svg" width="83" />
            <h1>Bethel Radio</h1>
          </div>
        </Link>
        <div className={styles.actionTop}>
          <button onClick={() => { handleShedule('programacion') }} className={styles.btnHeader}>Programación</button>
          <Link href={'/colabora'}>
            <a className={styles.btnHeader}>Colabora</a>
          </Link>
        </div>
      </header>
    </>
  )
}
