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
// import 'styled-components' 
import DataTable from 'react-data-table-component'
import _, { sortBy } from 'underscore' 
import { useEffect, useState } from "react";
import moment from "moment";


const columns = [
  {
    name: 'Rank',
    selector: row => row.rank,
    sortable: true,
  },
  {
    name: 'Name',
    selector: row => row.name,
    sortable: true,
  },
  {
    name: 'Finish Time',
    selector: row => row.finishDur,
    sortable: true,
  },
  {
    name: 'Finish Sec',
    selector: row => row.finishDurSec,
    sortable: true,
  },
  {
    name: 'Gender',
    selector: row => row.gender,
    sortable: true,
  },
  {
    name: 'Age',
    selector: row => row.age,
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

  races.forEach(item => { 
    let h = item.finishHour * 3600
    let m = item.finishMin ? 60*item.finishMin : 0 
    let s = item.finishSec ? item.finishSec : 0
    item['finishDurSec'] = h + m + s
    let h_s = item.finishHour.toString()
    let m_s = item.finishMin ? item.finishMin.toString() : '00'
    let s_s = item.finishSec ? item.finishSec.toString() : '00'
    item['finishDur'] = h_s + ':' + m_s + ':' + s_s
    item['name'] = item.firstName + ' ' + item.lastName

    let userDob = moment(item.dob.toString())
    let age = moment().diff(userDob, 'years')
    item['age'] = age.toString()
  
  })
  console.log(races)


  let races_sorted = _.sortBy(races, 'finishDurSec');

  let i = 1
  races_sorted.forEach(item => {
    item['rank'] = i
    i++
  })

  // handle rehydration issues
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Marathon Ranking | Home</title>
        <meta name="keywords" content="Ranking Marathon Finishing Time - All" />
      </Head>
      <div className='container'>
        <h1 className={styles.title}>All Runner Finish Time Ranking</h1>
            <DataTable dense pagination 
              columns={columns} 
              data={races_sorted} 
            />
        
        Please go to <Link className='linkover' href='/entry'>Join to Rank</Link> page to enter your race information.

      </div>
    </>
  )
}

export default Home
