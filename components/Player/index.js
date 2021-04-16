import { useState, useEffect } from 'react'

import Play from 'components/Icons/Play'
import Pause from 'components/Icons/Pause'

import styles from 'styles/player/Player.module.css'

const Player = ({ path }) => {
  const [play, setPlay] = useState(false)
  const [audio, setAudio] = useState(null)
  useEffect(() => {
    setAudio(new Audio(path))
  }, [])
  const handlePlayer = () => {
    if (play) {
      audio.pause()
      setPlay(false)
    } else {
      audio.play()
      setPlay(true)
    }
  }
  return (
    <div className={`${styles.playerFixed} ${styles.player}`}>
      <div className={styles.playerSocial}></div>
      <div className={styles.playerProgram}>
        <div className={styles.playerProgramTitle}>La Hora de la Transformación</div>
      </div>
      <div className={styles.playerControls}>
        {/* <audio src="https://tampa.audio-stream.com/proxy/bethelra?mp=/stream" autoPlay></audio> */}
        <button onClick={handlePlayer} className={styles.playerControlsTogglePausePlay}>
          {play ? <Pause /> : <Play />}
        </button>
      </div>
      <div className={`${styles.playerEqualizer} ${play ? styles.playerEqualizerActive : ''}`}>
        <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
    </div>
  )
}
export default Player
