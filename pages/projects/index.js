import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout/layout'

export default function Projects() {
  return (
    <Layout>
      <h1>Yo</h1>
      <p>what's up dog</p>
      <h2>
        <Link href="/">
            <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
