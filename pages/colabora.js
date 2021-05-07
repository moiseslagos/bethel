import ClaimColabora from 'components/ClaimColabora'
import DefaultLayouts from 'components/Layouts/default'
import ListColabora from 'components/ListColabora'
import SliderColabora from 'components/Slider/colabora'
import VideoColabora from 'components/VideoColabora'

import { dataShedule } from 'data/schedule'

export default function Colabora ({ dataShedule }) {
  return (
    <>
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
