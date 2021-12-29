import Image from 'next/image'
import HeaderButton from '../header_button'
import styles from './header.module.css'
import { Constants } from '../../lib/const'

export default function Header() {
  return (
      <div className={styles.container}>
          <HeaderButton id="Home" link="/"/>
          <HeaderButton id="Projects" link="/projects"/>
          <HeaderButton id="Resume" link={Constants().resumeUrl}/>
      </div>
    
  )
}