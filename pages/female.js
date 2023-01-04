import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Layout from "../components/Layout";
import { Flex, Box, Text, Button, StylesProvider } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';




function Female() {



  return (
    <>
      <Head>
        <title>Marathon Ranking | Female</title>
        <meta name="keywords" content="Ranking Marathon Finishing Time" />
      </Head>
      <div>
        <h1 className={styles.title}>All Female Runner Finish Time Ranking</h1>
        <p className={styles.text}>Occaecat deserunt eu id proident consectetur deserunt nostrud fugiat quis voluptate labore cillum. Commodo elit proident mollit sint culpa proident fugiat excepteur nisi nulla anim. Nostrud incididunt nulla reprehenderit officia amet sit elit cillum aliquip amet nostrud mollit. Nisi do enim tempor Lorem.</p>
        
        
        Please go to <Link className='linkover' href='/entry'>Join to Rank</Link> page to enter your race information.

      </div>
    </>
  )
}

export default Female