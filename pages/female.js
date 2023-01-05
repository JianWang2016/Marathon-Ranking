import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import styles from '../styles/Home.module.css'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import Layout from "../components/Layout";
// import { Flex, Box, Text, Button, StylesProvider } from '@chakra-ui/react'
import { DataStore } from 'aws-amplify'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

import { Race } from "../src/models"
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

function Female() {

  const [race, setRace] = useState([])

  useEffect( () => {
    const getData = async () => {
      await DataStore.observeQuery(Race).subscribe(({items}) => {
        setRace(items)
      })
    }
    getData()
  })

  return (
    <>
      <Head>
        <title>Marathon Ranking | Female</title>
        <meta name="keywords" content="Ranking Marathon Finishing Time" />
      </Head>
      <div className="container">
        <h1 className={styles.title}>All Female Runner Finish Time Ranking</h1>
        
        <DataTable columns={columns} data={race} />


        
        Please go to <Link className='linkover' href='/entry'>Join to Rank</Link> page to enter your race information.

      </div>
    </>
  )
}

export default Female