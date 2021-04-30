import { useState, useEffect } from 'react'

import Play from 'components/Icons/Play'
import Pause from 'components/Icons/Pause'
import ModalPlayer from 'components/ModalPlayer'
import Facebook from 'components/Icons/Facebook'
import Twitter from 'components/Icons/Twitter'

import styles from 'styles/player/Player.module.css'
import Instagram from 'components/Icons/Instagram'

const Player = ({ path, shedule, days }) => {
  const formatDay = (day) => {
    const acentos = { á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u', Á: 'A', É: 'E', Í: 'I', Ó: 'O', Ú: 'U' }
    const daySplit = day.split('').map(letra => acentos[letra] || letra).join('').toString()
    return daySplit.toLowerCase()
  }
  const [play, setPlay] = useState(false)
  const [audio, setAudio] = useState(null)
  const [listShedule, setListShedule] = useState(shedule[formatDay(days.day)])
  const [showModalPlayer, setShowModalPlayer] = useState(false)
  useEffect(() => {
    setShowModalPlayer(true)
    setAudio(new Audio(path))
  }, [])
  useEffect(() => {
    setListShedule(shedule[formatDay(days.day)])
  })
  const handlePlayer = () => {
    audio.onplay = () => {
      setPlay(true)
    }
    audio.onerror = (e) => {
      console.log('el audio tiene errores: ' + e)
    }
    audio.onpause = () => {
      console.log('el audio se pausó')
      setPlay(false)
    }
    setShowModalPlayer(false)
    if (play) {
      audio.pause()
    } else {
      audio.play()
    }
  }
  const closeModalPlayer = () => {
    setShowModalPlayer(false)
  }
  return (
    <>
      { showModalPlayer ? <ModalPlayer reproducir={handlePlayer} closeModalPlayer={closeModalPlayer} /> : '' }
      <div className={`${styles.playerFixed} ${styles.player}`}>
        <div className={styles.playerSocial}>
          <a href="https://www.facebook.com/bethelradio/" target="_blank" rel="noreferrer"><Facebook height="15" /></a>
          <a href="https://twitter.com/bethelradio?lang=es" target="_blank" rel="noreferrer"><Twitter height="15" /></a>
          <a href="https://www.instagram.com/bethel_radio/" target="_blank" rel="noreferrer"><Instagram height="15" /></a>
        </div>
        <div className={styles.playerProgram}>
          <div className={styles.playerProgramTitle}>
            {
              listShedule && Object.entries(listShedule).map(([key, value]) => {
                let title = ''
                if (Number(key.slice(0, 2)) === days.hours) {
                  if (days.minuts > 0 && days.minuts < 30) {
                    if (key.slice(3, 5) === '00') {
                      title = value.title
                    }
                  } else {
                    if (key.slice(3, 5) === '30') {
                      title = value.title
                    }
                  }
                }
                return title
              })
            }
          </div>
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
    </>
  )
}
export default Player
