import Head from 'next/head'
import dynamic from 'next/dynamic'

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

export default function Home ({ dataPrograms, dataFrequencies, dataShedule }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bethel Radio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <!--player--> */}
      <DynamicPlayer shedule={dataShedule} days={getDate()} path="https://tampa.audio-stream.com/proxy/bethelra?mp=/stream"/>
      {/* <!--player--> */}
      <Peticiones />
      <div className="wrapper-desktop">
          <Header days={getDate()} shedule={dataShedule} />
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
