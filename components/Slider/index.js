import styles from 'styles/slider/Slider.module.css'

export default function Slider () {
  return (
    <div className={styles.bgSliderHeader }>
      <div className={styles.sliderItem}>
        <div className={`${styles.sliderItemDescription} wrapper-content`}>
          <h2>Somos una <br/> Emisora Cristiana </h2>
          <p className={styles.subTitle}>Pertenece a la ASOCIACIÓN CULTURAL BETHEL (ACB), corporación sin fines de lucro y, a la iglesia del MOVIMIENTO MISIONERO MUNDIAL, que tiene como propósito expreso de transmitir el Evangelio a todo el mundo.</p>
        </div>
        <div className={styles.sliderItemShadow}>
          <img src="/images/slide/slide-mob.jpg" />
        </div>
      </div>
    </div>
  )
}
