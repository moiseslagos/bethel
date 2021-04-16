import styles from 'styles/player/Player.module.css'
import Play from 'components/Icons/Play'

const Player = () => {
  return (
    <div className={`${styles.playerFixed} ${styles.player}`}>
      <div className={styles.playerSocial}></div>
      <div className={styles.playerProgram}>
        <div className={styles.playerProgramTitle}>La Hora de la Transformación</div>
      </div>
      <div className={styles.playerControls}>
        <button className={styles.playerControlsTogglePausePlay}>
          <Play />
        </button>
      </div>
      <div className={styles.playerEqualizer}>
        <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
    </div>
  )
}
export default Player
