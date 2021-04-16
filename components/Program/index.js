import { useState } from 'react'
import Image from 'next/image'

import styles from 'styles/components/programs/SliderPrograms.module.css'

export default function Program ({ programs }) {
  const [lists] = useState(programs)

  return (
    <section className="blockSection">
      <h2 className="title">Nuestros programas</h2>
      <div className={styles.carouselProgram}>
        <ul>
        {
          lists.map((list) => {
            return (
              <li key={list.id} className={styles.carouselProgramItem}>
                <div className="image">
                  {/* <img src={`/images/${list.img}`} alt="Picture of the author"/> */}
                  <Image src={`/images/${list.img}`} alt="Picture of the author" width={270} height={270} />
                </div>
                <div className="title">{list.title}</div>
              </li>
            )
          })
        }
        </ul>
      </div>
    </section>
  )
}
