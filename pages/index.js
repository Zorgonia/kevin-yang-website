import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout/layout'
import Header from '../components/header/header'
import Link from 'next/link'
import { Constants } from '../lib/const'

export default function Home() {
  return (
    <Layout>
        <p className={styles.description}>
            Hey! I'm Kevin Yang and welcome to my website.
        </p>
        <p className={styles.subdesc}>
            I'm a 4th year computer science student currently studying at the University of Toronto. I'm expecting to graduate in June 2022. 
            <br/><br/>
            I'm currently looking for an entry-level software developer position. I'm mainly looking in Toronto, Ontario, but am also looking for positions located in other parts of Canada or the US.
            <br/><br/>
            I am most proficient in <b>Python</b>, and <b>Kotlin</b>, previously having done Android development for a year as a co-op at Accedo. 
            I also have used <b>Java, React, C, </b> and <b>Unity</b> previously. 
            You can find all my technical skills on the <Link href={'/projects'}>projects page</Link> or <a target="_blank" rel="noreferrer" href={Constants().resumeUrl}>resume</a> .
        </p>


    </Layout>
  )
}
