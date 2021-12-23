import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout/layout'
import Header from '../components/header/header'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Kevin Yang</title>
        <meta name="description" content="cool beans" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <p className={styles.description}>
            Welcome to my website! Honestly I have no idea what to place here so placeholder lmao.
        </p>


    </Layout>
  )
}
