import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import * as gtag from 'lib/gtag'

import 'styles/globals.css'

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
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
