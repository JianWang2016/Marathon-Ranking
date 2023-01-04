import Link from "next/link"
import Image from "next/image"
import { Flex, Box, Text, Button, StylesProvider } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';


import { RaceCreateForm } from '../src/ui-components';

function Entry() {

  const [showForm, setShowForm] = useState(true)
  const router = useRouter()

  return (
    <div>
      { showForm && <RaceCreateForm onSuccess={() => {
          setShowForm(false) // Hide the form
          router.push('/')
        }}/>
      } 


    </div>
  )
}

export default Entry