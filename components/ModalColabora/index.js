import { useState, useEffect } from 'react'
import Image from 'next/image'

import Close from 'components/Icons/Close'
import styles from 'styles/components/modal/ModalColabora.module.css'

export default function ModalColabora ({ setModalColabora, closeModal }) {
  const [showModalColabora, setShowModalColabora] = useState(setModalColabora)
  useEffect(() => {
    setShowModalColabora(setModalColabora)
  })
  return (
    <div className={`${styles.modal} ${showModalColabora ? styles.modalColaboraActive : ''}`}>
      <button onClick={() => closeModal(false)} className={styles.btnClose}><Close /></button>

      <div className="modaBody">
        <div className="wrapper-desktop">
          <div className="main-desk">
            <div className="wrapper-content">
              <h2 className="title">Colabora</h2>
            </div>

            <div className="resultProgramming wrapper-content text-center">
              <div className="mb-md">
                <a href="#">
                  <Image src='/images/paypal.png' alt="Paypal" width={250} height={150} />
                </a>
              </div>
              <div className="mb-md">
                <Image src='/images/santander.png' alt="Santander" width={250} height={72} />
                <p>Banco Santander de Puerto Rico</p>
                <p>Número de Cuenta:</p>
                <p>3004982176</p>
                <p>Código Swift:</p>
                <p>BSCHPRSX</p>
              </div>
              <div className="mb-md">
                <Image src='/images/bcp.png' alt="BCP" width={250} height={72} />
                <p>Banco de Crédito del Perú</p>
                <p>Cta. Corriente en Dólares:</p>
                <p>194-1489674-1-20</p>
                <p>CCI en Dólares:</p>
                <p>002-194-001489674120-95</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
