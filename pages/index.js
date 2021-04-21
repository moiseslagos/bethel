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
import Program from 'components/Program'
import Frequencies from 'components/Frequencies'

const DynamicComponentWithNoSSR = dynamic(
  () => import('components/Player'),
  { ssr: false }
)

export default function Home ({ dataPrograms, dataFrequencies, dataShedule }) {
  console.log(getDate())
  return (
    <div className={styles.container}>
      <Head>
        <title>Bethel Radio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <!--player--> */}
      <DynamicComponentWithNoSSR path="https://tampa.audio-stream.com/proxy/bethelra?mp=/stream"/>
      {/* <!--player--> */}
      <Header days={getDate()} shedule={dataShedule} />
      <main className={styles.main}>
        {/* <!--Slider--> */}
        <Slider />
        {/* <!--Slider--> */}
        <Program programs={dataPrograms}/>
        <Frequencies frequencies={dataFrequencies} />
      </main>
      <Footer />
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
