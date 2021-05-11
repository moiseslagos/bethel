import Head from 'next/head'

import ClaimColabora from 'components/ClaimColabora'
import ListColabora from 'components/ListColabora'
import SliderColabora from 'components/Slider/colabora'
import VideoColabora from 'components/VideoColabora'

import { dataShedule } from 'data/schedule'

export default function Colabora ({ dataShedule }) {
  return (
    <>
      <Head>
        <title>Colabora | Bethel Radio</title>
      </Head>
      <SliderColabora />
      <VideoColabora />
      <ClaimColabora />
      <ListColabora />
    </>
  )
}

export async function getStaticProps () {
  return {
    props: {
      dataShedule
    }
  }
}
