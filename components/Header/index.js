import styles from 'styles/header/Header.module.css'

export default function Header () {
  return (
    <header className={styles.header}>
      <div className="logo">
        <img src="/images/logo-bethel.svg"/>
        <h1>Bethel Radio</h1>
      </div>
    </header>
  )
}
