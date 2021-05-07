import styles from 'styles/slider/Slider.module.css'

export default function SliderColabora () {
  return (
    <div className={styles.bgSliderHeader }>
      <div className={`${styles.sliderItem} ${styles.sliderItemColabora} `}>
        <div className={`${styles.sliderItemDescription} wrapper-content`}>
          <div className="main-desk">
            <h2 className={styles.titleColabora}>
              <span className={styles.color1}>Tú puedes ser parte</span><br />
              <span className={styles.color2}>De esta gran labor</span>
            </h2>
            <p className={`${styles.subTitle} ${styles.subTitleColabora}`}>Lleva el mensaje de salvación y esperanza a través de las ondas de Bethel.</p>
          </div>
        </div>
        <div className={styles.sliderItemShadow}>
          <img src="/images/slide/bg-colabora.jpg" />
        </div>
      </div>
    </div>
  )
}
