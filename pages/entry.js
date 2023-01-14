import Link from "next/link"
import Image from "next/image"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Layout from "../components/Layout";
import { Flex, Box, Text, Button, StylesProvider, Alert } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

import { RaceCreateForm } from '../src/ui-components';

function Entry() {

  const [showForm, setShowForm] = useState(true)

  return (
    <div className="container">

      { showForm ? ( 
          <RaceCreateForm onSuccess={() => { setShowForm(false) }} />
        ) : (
          <Alert variation="success">Congratulation on your achievement!
            Please Head over to ranking page to see how you are doing.
          </Alert>
        )
      } 
    </div>

  )
      
}

export default Entry