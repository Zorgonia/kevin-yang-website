import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout/layout'
import ProjectBlock from '../../components/project_block'
import styles from '../../styles/projects.module.css'

const PROJECT_TEXTS = 
["A 2.5D Action game where you're a robot trying to escape the mind with conflicting controls. Can you leverage your partners to make your way through the labryinth? Developed by a team of 3 developers (including myself), 2 artists, and 2 musicians. <br/><br/> Developed in <b>Unity</b>. Worked on implementing player abilties, designed some levels, implemented art/music assets, and fixed bugs. Worked on from September 2021 to December 2021.",
"An Android app that allows users to look at the cards released in the last <a href=\"https://shadowverse.com/\" target=\"_blank\">Shadowverse</a> expansion and rate them. Users can use any of the languages available on <a href=\"https://shadowverse-portal.com/\" target=\"_blank\">Shadowverse Portal</a>, as well as create deck links on the portal from deckcodes. <br/><br/> Developed in <b>Kotlin</b> for Android. Used MVVM, REST, and Single Activity Pattern. Worked on during January 2021.",
"An online store that allows users to sign up, add items to their cart, and purchase items from a store. <br/><br/> Developed in a team of 4 developers, including myself. Developed with <b>React</b> using Express, <b>NodeJS</b>, and <b>MongoDB</b>. Worked on from February 2020 to April 2020. I worked on the front end for the login and sign-up pages, as well as the REST API calls related to checkout."]

export default function Projects() {
  return (
    <Layout>
      <h1 className={styles.title}>Projects</h1>
      <p className={styles.description}>You can find my projects below. Most of the source codes can also be found on my <a href="https://github.com/Zorgonia" target="_blank">github</a>.</p>
      <ProjectBlock 
        descriptionText={PROJECT_TEXTS[0]} 
        title="Cross Control" 
        image="/images/cc.png"
        link="https://zorgonia.itch.io/crosscontrol"/>
      <ProjectBlock 
        descriptionText={PROJECT_TEXTS[1]} 
        image="/images/svr.jpg"
        link="https://github.com/Zorgonia/Shadowverse-Card-Ratings"
        title="Shadowverse Card Ratings" />
      <ProjectBlock 
        descriptionText={PROJECT_TEXTS[2]} 
        image="/images/ryan.png"
        link="https://quiet-journey-89938.herokuapp.com"
        title="RyanBrand Online Store" />
      <h2>
        <Link href="/">
            <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
