import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import * as React from 'react'
import { WagmiConfig } from 'wagmi'
import "./App.css";
import { client } from '../wagmi'


function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false)
  
  React.useEffect(() => setMounted(true), [])
  
  return (
 
    <WagmiConfig client={client}>
   
      <NextHead> 
        <link rel="icon" href="https://images.squarespace-cdn.com/content/v1/5a6943c66f4ca3c5dbf1d576/1529163765964-RYARZW4VATBCABBAJ75Q/Car-logo-orange-favicon.png"/>
        <title>CreateCar</title>
      </NextHead>
  
      {mounted && <Component {...pageProps} />}
    </WagmiConfig>
  )
}

export default App
