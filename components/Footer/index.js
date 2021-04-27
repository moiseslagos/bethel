import AppStore from 'components/Icons/AppStore'
import Email from 'components/Icons/Email'
import GooglePlay from 'components/Icons/GooglePlay'

import styles from 'styles/footer/Footer.module.css'

export default function Footer () {
  return (
    <footer className={`${styles.footer} wrapper-content`}>
        <div className={styles.blockFooter}>
          <h2>Bethel Radio</h2>
          <p>Coordinación:</p>
          <p>(511) 613-1713 / 613-1701</p>
          <p><Email /> <a href="mailto:contacto@bethelradio.fm" >contacto@bethelradio.fm</a></p>
        </div>
        <div className={styles.blockFooter}>
          <h2>Enlaces</h2>
          <ul>
            <li><a href="https://www.betheltv.tv/" target="_blank" rel="noreferrer">Bethel Televisión</a></li>
          </ul>
        </div>
        <div className={styles.blockFooter}>
          <h2>Descargar Gratis</h2>
          <div className="grid-2 storeSvg">
            <a href="#" target="_blank"><AppStore height="51" className={styles.svgStore}/></a>
            <a href="#" target="_blank"><GooglePlay height="51" className={styles.svgStore}/></a>
          </div>
        </div>
    </footer>
  )
}
