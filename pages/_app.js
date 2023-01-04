import '../styles/globals.css'
import Router from "next/router"
import Head from "next/head"
import NProgress from "nprogress"
import { ChakraProvider } from "@chakra-ui/react"

import Layout from "../components/Layout"

// Initial setup instructed by Amplify studio
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "../src/ui-components";

Amplify.configure(awsconfig);
// end initial setup instructed by Amplify studio


function App({ Component, pageProps }) {
  return (
    <>
        <Head>
          <title>2022 North America Chinese Marathon Runner Ranking</title>
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

