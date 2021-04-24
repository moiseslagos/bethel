import { useState, useEffect } from 'react'

import Play from 'components/Icons/Play'
import Pause from 'components/Icons/Pause'
import ModalPlayer from 'components/ModalPlayer'

import styles from 'styles/player/Player.module.css'

const Player = ({ path, shedule, days }) => {
  const formatDay = (day) =>{
    const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
    const daySplit = day.split('').map( letra => acentos[letra] || letra).join('').toString();
    return daySplit.toLowerCase();
  }
  const [play, setPlay] = useState(false)
  const [audio, setAudio] = useState(null)
  const [listShedule, setShedule] = useState(shedule[formatDay(days.day)])
  const [showModalPlayer, setShowModalPlayer] = useState(false)

  useEffect(() => {
    setShowModalPlayer(true)
    setAudio(new Audio(path))
  }, [])
  const handlePlayer = () => {
    audio.onplay = () => {
      console.log("el audio empezó a sonar")
      setPlay(true)
    }
    audio.onerror = (e) => {
      console.log('el audio tiene errores: '+e)
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
  const closeModalPlayer = () =>{
    setShowModalPlayer(false)
  }
  return (
    <>
    {
      showModalPlayer ? <ModalPlayer reproducir={handlePlayer} closeModalPlayer={closeModalPlayer} />: ''
    }    
    <div className={`${styles.playerFixed} ${styles.player}`}>
      <div className={styles.playerSocial}></div>
      <div className={styles.playerProgram}>
        <div className={styles.playerProgramTitle}>
          {
            listShedule && Object.entries(listShedule).map(([key, value], index) => {
              if(key.slice(0,2) == days.hours){
                if(days.minuts > 0 && days.minuts < 30){
                  if(key.slice(3,5)=='00'){
                    return value.title
                  }
                }else{
                  if(key.slice(3,5)=='30'){
                    return value.title
                  }
                }
              }  
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
