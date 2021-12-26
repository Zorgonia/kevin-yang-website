import Layout from '../../components/layout/layout'
import ProjectBlock from '../../components/project_block'
import styles from '../../styles/projects.module.css'
import { getSortedProjectData } from '../../lib/projects'

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
          You can find my projects below. Most of the source codes can also be found on my <a href="https://github.com/Zorgonia" target="_blank" rel="noreferrer">github</a>.
      </p>
      {allProjectData.map(({id, contentHtml, title, link, image, date}) => (
        <ProjectBlock
            image={"/images/" + image}
            descriptionText={contentHtml}
            link={link}
            title={title}
        />
      ))}
    </Layout>
  )
}
