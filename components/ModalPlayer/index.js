import Close from 'components/Icons/Close'
import styles from 'styles/components/modal/ModalPlayer.module.css'

export default function ModalPlayer ({ reproducir, closeModalPlayer, type, data }) {
  return (
    <div className={styles.shadowModal}>
      <div className={styles.ModalPlayer} >
        <button onClick={closeModalPlayer} className={styles.btnClose}><Close /></button>
        <div className={styles.modalPlayerHeader}>
          { type !== 'program' ? <img src="/images/bg-player-modal.jpg" /> : data.img_big ? <img src={`/images/${data.img_big}`} /> : <img src="/images/bethel-default-16-9.jpg" /> }
        </div>
        <div className={styles.modalPlayerBody}>
          <h2 className="txt-center">{ type !== 'program' ? 'Bienvenido' : data.title }</h2>
          <p className="txt-center">
            { type !== 'program' ? 'Para que disfrutes de nuestra emisora, te recomendamos que hagas clic en aceptar y escucharás toda nuestra programación.' : data.description }
          </p>
        </div>
        {
          type !== 'program' &&
          (<div className={styles.modalPlayerFooter}>
            <div className="grid-2">
              <div className="text-center">
                <button onClick={reproducir} className="btnBethel btnFirst btnRounded">Sí, escuchar</button>
              </div>
              <div className="text-center">
                <button onClick={closeModalPlayer} className="btnBethel btnSecond btnRounded">No, gracias</button>
              </div>
            </div>
          </div>) }
      </div>
    </div>
  )
}
