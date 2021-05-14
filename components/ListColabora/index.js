import Image from 'next/image'
import styles from 'styles/components/listColabora/ListColabora.module.css'

export default function ListColabora () {
  return (
    <div className={styles.wrapperListColabora}>
      <div className={`main-desk ${styles.gridColabora}`}>
        <a href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=7V6X6YM882BYQ&source=url" target="_blank" rel="noreferrer" className={styles.itemBank}>
          <div className={styles.itemListColabora}>
            <Image src='/images/paypal.png' alt="Paypal" width={150} height={90} />
          </div>
        </a>
        <div className="itemBank">
          <div className={styles.itemListColabora}>
            <p>Número de Cuenta: 3004982176</p>
            <p>Código Swift: BSCHPRSX</p>
            <Image src='/images/santander.png' alt="Santander" width={150} height={43} />
          </div>
          <p className={styles.bankName}>Banco Santander de Puerto Rico</p>
        </div>
        <div className="itemBank">
          <div className={styles.itemListColabora}>
            <p>Cta. Corriente en Dólares: 194-1489674-1-20</p>
            <p>CCI en Dólares: 002-194-001489674120-95</p>
            <Image src='/images/bcp.png' alt="BCP" width={150} height={43} />
          </div>
          <p className={styles.bankName}>Banco de Crédito del Perú</p>
        </div>
      </div>
    </div>
  )
}
