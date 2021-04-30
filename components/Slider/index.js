import styles from 'styles/slider/Slider.module.css'

export default function Slider () {
  return (
    <div className={styles.bgSliderHeader }>
      <div className={styles.sliderItem}>
        <div className={`${styles.sliderItemDescription} wrapper-content`}>
          <div className="main-desk">
            <h2>Somos una <br/> Emisora Cristiana </h2>
            <p className={styles.subTitle}>Bethel Radio es una emisora cristiana nacida en el Perú con el propósito de llevar el mensaje de salvación y fortalecimiento de las familias a través de la educación y cultura. Actualmente forma parte de la Asociación Cultural Bethel (ACB).</p>
          </div>
        </div>
        <div className={styles.sliderItemShadow}>
          <img src="/images/slide/slide-mob.jpg" />
        </div>
      </div>
    </div>
  )
}
