import Layout from '../../components/layout/layout'
import ProjectBlock from '../../components/project_block'
import styles from '../../styles/projects.module.css'
import { getSortedProjectData } from '../../lib/projects'
import { Constants } from '../../lib/const'

export async function getStaticProps() {
    const allProjectData = await getSortedProjectData()
    return {
      props: {
        allProjectData
      }
    }
  }
  

export default function Projects({ allProjectData }) {
  return (
    <Layout>
      <h1 className={styles.title}>Projects</h1>
      <p className={styles.description}>
          You can find my projects below. Most of the source codes can also be found on my
           <a href={Constants().githubUrl} target="_blank" rel="noreferrer"> github</a>.
      </p>
      {allProjectData.map(({id, contentHtml, title, link, image, date}) => (
        <ProjectBlock
            key={id}
            image={"/images/" + image}
            descriptionText={contentHtml}
            link={link}
            title={title}
        />
      ))}
      <h1 className={styles.title}>Technical Skills</h1>
      <div className={styles.description}>
          Proficient: Python, Kotlin <br/>
          Have used in projects: Unity (C#), React, NodeJS, Html/CSS, Javascript, Java, Shell, Unix<br/>
          Have experience with: SQL, OS<br/>
          Tools: Git, Android Studio, MongoDB, Firebase
          {/* <div className={styles.columns}>
          <p className={styles.centerText}>Proficient:</p>
          <ul className={styles.centerItems}>
            <li>Python</li>
            <li>Kotlin</li>
          </ul>
          </div>
          <div className={styles.columns}>
          Have used in projects:
          <ul>
            <li>Unity (C#)</li>
            <li>React</li>
            <li>NodeJS</li>
            <li>HTML/CSS</li>
            <li>Javascript</li>
            <li>Java</li>
          </ul>
          </div>
          <div className={styles.columns}>
          Proficient:
          <ul>
            <li>Python</li>
            <li>Kotlin</li>
          </ul>
          </div> */}
      </div>
    </Layout>
  )
}
