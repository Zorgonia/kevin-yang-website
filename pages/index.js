import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Kevin Yang</title>
        <meta name="description" content="cool beans" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1 className={styles.title}>
          Kevin Yang
        </h1>
        <p>
          Welcome to my website!
        </p>


    </Layout>
  )
}
