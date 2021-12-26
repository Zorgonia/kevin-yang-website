import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout/layout'
import ProjectBlock from '../../components/project_block'

const PROJECT_TEXTS = ["A 2.5D Action game where you're a robot trying to escape the mind with conflicting controls. Can you leverage your partners to make your way through the labryinth? Developed by a team of 3 developers (including myself), 2 artists, and 2 musicians. <br/><br/> Worked on implementing player abilties, designed some levels, implemented art/music assets, and fixed bugs."]

export default function Projects() {
  return (
    <Layout>
      <h1>Yo</h1>
      <p>what's up dog</p>
      <ProjectBlock 
        descriptionText={PROJECT_TEXTS[0]} 
        title="Cross Control" 
        link="https://zorgonia.itch.io/crosscontrol"/>
      <h2>
        <Link href="/">
            <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
