import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Peticiones from 'components/Peticiones'

import { getDate } from 'lib/getDate'

import styles from 'styles/Home.module.css'
import { dataShedule } from 'data/schedule'

const DynamicPlayer = dynamic(
  () => import('components/Player'), { ssr: false }
)
export default function DefaultLayouts (props) {
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
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <!--player--> */}
      <DynamicPlayer shedule={dataShedule} days={currentDay} path="https://tampa.audio-stream.com/proxy/bethelra?mp=/stream"/>
      {/* <!--player--> */}
      <Peticiones />
      <div className="wrapper-desktop">
          <Header days={currentDay} shedule={dataShedule} />
          <main className={`${styles.main}`}>
            {props.children}
          </main>
          <div className="main-desk">
            <Footer />
          </div>
      </div>
    </div>
  )
}
