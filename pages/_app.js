import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import * as gtag from 'lib/gtag'

import 'styles/globals.css'
import DefaultLayouts from 'components/Layouts/default'

function MyApp ({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <DefaultLayouts title="Bethel Radio">
        <Head>
          <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        </Head>
        <Component {...pageProps} />
      </DefaultLayouts>
    </>
  )
}

export default MyApp
