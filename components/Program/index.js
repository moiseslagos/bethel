import { useState, useEffect } from 'react'
import Image from 'next/image'
import Splide from '@splidejs/splide'

import styles from 'styles/components/programs/SliderPrograms.module.css'
import 'node_modules/@splidejs/splide/dist/css/splide.min.css'

export default function Program ({ programs }) {
  const [lists] = useState(programs)
  useEffect(()=>{
    new Splide('#splide',{
      perPage: 8,
      pagination:false,
      breakpoints: {
        '1200': {
          perPage: 5,
          gap    : '1rem',
        },
        '480': {
          perPage: 3,
          gap    : '1rem',
        },
      }
    }).mount()
  },[])

  return (
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
                <li key={list.id} className={`${styles.carouselProgramItem} splide__slide`}>
                  <div className="image">
                    {/* <img src={`/images/${list.img}`} alt="Picture of the author"/> */}
                    <Image src={`/images/${list.img}`} alt={list.title} width={270} height={270} />
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
  )
}
