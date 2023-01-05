import Head from "next/head";
import Link from "next/link"
// import Image from "next/image"
import styles from '../styles/Home.module.css'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import Layout from "../components/Layout";
// import { Flex, Box, Text, Button, StylesProvider } from '@chakra-ui/react'
// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react'
import { withSSRContext } from 'aws-amplify'
import { listRaces } from '../src/graphql/queries'
import DataTable from 'react-data-table-component'

const columns = [
  {
    name: 'First Name',
    selector: row => row.firstName,
    sortable: true,
  },
  {
    name: 'Last Name',
    selector: row => row.lastName,
    sortable: true,
  },
  {
    name: 'Finish Hour',
    selector: row => row.finishHour,
    sortable: true,
  },
  {
    name: 'Minute',
    selector: row => row.finishMin,
    sortable: true,
  },
  {
    name: 'Second',
    selector: row => row.finishSec,
    sortable: true,
  },
  {
    name: 'Gender',
    selector: row => row.gender,
    sortable: true,
  },
  {
    name: 'Race Name',
    selector: row => row.raceName,
    sortable: true,
  }
];

export async function getServerSideProps () {
  const SSR = withSSRContext()
  const { data } = await SSR.API.graphql({ query: listRaces })
  return {
    props: {
      races: data.listRaces.items
    }
  }
}


function Home({races}) {
  return (
    <>
      <Head>
        <title>Marathon Ranking | Home</title>
        <meta name="keywords" content="Ranking Marathon Finishing Time - All" />
      </Head>
      <div>
        <h1 className={styles.title}>All Runner Finish Time Ranking</h1>
        <div className='container'>
           <h1>Ranking</h1>
            <DataTable columns={columns} data={races} />

        </div>
        Please go to <Link className='linkover' href='/entry'>Join to Rank</Link> page to enter your race information.

      </div>
    </>
  )
}

export default Home
