import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import Header from '../header/header'

const name = 'Kevin Yang'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }) {
  return (
    <div>
             

    <div className={styles.container}>
        <div className={styles.thinContainer}>
            <header className={styles.header}>
            {(
            <>
                <Image
                priority
                src="/images/me.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
                />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
                <p>4th year CS Student at UofT 
                    <br/><br/> 
                    <a href="https://github.com/Zorgonia"><Image src="/images/github.png" 
                        width={32} height={32} alt={"github"} href="https://github.com/Zorgonia">
                    </Image></a>
                    
                    <br/><br/>
                    yang.kevin.100[at]gmail.com
                </p>
            </>
            )}
            </header>
        </div>

      <main className={styles.main}> <Header></Header>{children}</main>
    </div>
    </div>
  )
}
