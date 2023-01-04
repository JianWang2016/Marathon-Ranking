// import '../styles/globals.css'
import Router from "next/router"
import Head from "next/head"
import NProgress from "nprogress"
import { ChakraProvider } from "@chakra-ui/react"

import Layout from "../components/Layout"

function App({ Component, pageProps }) {
  return (
    <>
        <Head>
          <title>Marathon Ranking</title>
        </Head>

        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />            
          </Layout>
        </ChakraProvider>
    </>

  )
}

export default App

