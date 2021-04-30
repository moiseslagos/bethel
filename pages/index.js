import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

import { dataPrograms } from 'data/programs'
import { dataFrequencies } from 'data/frequencies'
import { dataShedule } from 'data/schedule'
import { getDate } from 'lib/getDate'

import styles from 'styles/Home.module.css'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Slider from 'components/Slider'
import Frequencies from 'components/Frequencies'
import Peticiones from 'components/Peticiones'

const DynamicPlayer = dynamic(
  () => import('components/Player'),
  { ssr: false }
)
const DynamicProgram = dynamic(
  () => import('components/Program'),
  { ssr: false }
)
console.log('index date: ', getDate())

export default function Home ({ dataPrograms, dataFrequencies, dataShedule }) {
  const [currentDay, setCurrentDay] = useState(getDate())
  useEffect(() => {
    setTimeout(() => {
      console.log(currentDay)
      setCurrentDay(getDate())
    }, 60000)
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Bethel Radio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <!--player--> */}
      <DynamicPlayer shedule={dataShedule} days={currentDay} path="https://tampa.audio-stream.com/proxy/bethelra?mp=/stream"/>
      {/* <!--player--> */}
      <Peticiones />
      <div className="wrapper-desktop">
          <Header days={currentDay} shedule={dataShedule} />
          <main className={`${styles.main}`}>
            {/* <!--Slider--> */}
            <Slider />
            {/* <!--Slider--> */}
            <div className="main-desk">
              <DynamicProgram programs={dataPrograms} />
              <Frequencies frequencies={dataFrequencies} />
            </div>
          </main>
          <div className="main-desk">
            <Footer />
          </div>
      </div>
    </div>
  )
}

export async function getStaticProps () {
  // const res = await fetch('http://localhost:3000/api/programs')
  // const programs = await res.json()
  return {
    props: {
      dataPrograms,
      dataFrequencies,
      dataShedule
    }
  }
}
