import Close from 'components/Icons/Close'
import styles from 'styles/components/modal/ModalPlayer.module.css'

export default function ModalPlayer ({reproducir,closeModalPlayer}) {
	return(
		<div className={styles.shadowModal}>
			<div className={styles.ModalPlayer} >
				<button onClick={closeModalPlayer} className={styles.btnClose}><Close /></button>
				<div className="modalPlayerBody">
					<h2 className="txt-center">Bienvenido</h2>
					<p className="txt-center">
						Para que disfrutes de nuestra emisora, te recomendamos que hagas clic en aceptar y escucharás toda nuestra programación.
					</p>
				</div>
				<div className="modalPlayerFooter">
					<div className="grid-2">
						<button onClick={reproducir} className="btnBethel btnFirst btnRounded">Sí, escuchar radio</button>
						<button onClick={closeModalPlayer} className="btnBethel btnSecond btnRounded">No, gracias</button>
					</div>
				</div>
			</div>
		</div>
	)
}