import { useState, useEffect } from 'react'
import Image from 'next/image'
import Splide from '@splidejs/splide'
import ModalPlayer from 'components/ModalPlayer'

import styles from 'styles/components/programs/SliderPrograms.module.css'
import 'node_modules/@splidejs/splide/dist/css/splide.min.css'

export default function Program ({ programs }) {
  const [lists] = useState(programs)
  const [showModalProgram, setShowModalPlayer] = useState(false)
  const [resultProgram, setResultProgram] = useState({})

  useEffect(() => {
    new Splide('#splide', {
      perPage: 6,
      pagination: false,
      breakpoints: {
        1200: {
          perPage: 5,
          gap: '1rem'
        },
        480: {
          perPage: 3,
          gap: '1rem'
        }
      }
    }).mount()
  }, [])

  const handlerProgram = (program) => {
    setResultProgram(program)
    setShowModalPlayer(true)
  }
  const closeModalPlayer = () => {
    setShowModalPlayer(false)
  }

  return (
    <>
      {
        showModalProgram ? <ModalPlayer type="program" data={resultProgram} closeModalPlayer={closeModalPlayer} /> : ''
      }
      <section className="blockSection">
        <div className="wrapper-content">
          <h2 className="title">Nuestros programas</h2>
        </div>
        <div id="splide" className={`${styles.carouselProgram} splide`}>
          <div className="splide__track">
            <ul className="splide__list">
            {
              lists.map((list) => {
                return (
                  <li onClick={() => { handlerProgram(list) }} key={list.id} className={`${styles.carouselProgramItem} splide__slide`}>
                    <div className="image">
                      { list.img ? <Image src={`/images/${list.img}`} alt={list.title} width={270} height={270} /> : <Image src="/images/bethel-default-1-1.jpg" alt={list.title} width={270} height={270} />}
                    </div>
                    <div className="title">{list.title}</div>
                  </li>
                )
              })
            }
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
