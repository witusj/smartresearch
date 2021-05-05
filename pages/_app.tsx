import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../paused_lib/gtag'

const App = ({ Component, pageProps }) => {

  return <Component {...pageProps} />
}

export default App