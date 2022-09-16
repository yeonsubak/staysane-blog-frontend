import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <button className='m-4 p-4 rounded-full border border-blue-500'>Hello World</button>
    </div>
  )
}

export default Home
