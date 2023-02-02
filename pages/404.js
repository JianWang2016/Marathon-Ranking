import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Layout from "../components/Layout";
import { useEffect } from 'react'
import { useRouter } from 'next/router'


const NotFound = () => {

    const router = useRouter()

    useEffect( () => {
        setTimeout(() => {
            router.push('/')
        }, 5000)
    }, [])

    return (
        <div className='not-found'>
            <h1>That page cannot be found.</h1>
            <p>Please go back to the <Link className='linkover' href='/'>Home</Link> page</p>
        </div>
    )
}

export default NotFound