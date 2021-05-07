import dynamic from 'next/dynamic'

import { dataPrograms } from 'data/programs'
import { dataFrequencies } from 'data/frequencies'
import { dataShedule } from 'data/schedule'
import Slider from 'components/Slider'
import Frequencies from 'components/Frequencies'
import DefaultLayouts from 'components/Layouts/default'

const DynamicProgram = dynamic(
  () => import('components/Program'),
  { ssr: false }
)

export default function Home ({ dataPrograms, dataFrequencies, dataShedule }) {
  return (
    <>
      <Slider />
      <div className="main-desk">
        <DynamicProgram programs={dataPrograms} />
        <Frequencies frequencies={dataFrequencies} />
      </div>
    </>
  )
}

export async function getStaticProps () {
  return {
    props: {
      dataPrograms,
      dataFrequencies,
      dataShedule
    }
  }
}
