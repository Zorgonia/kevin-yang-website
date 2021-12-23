import Image from 'next/image'
import HeaderButton from '../header_button'
import styles from './header.module.css'

export default function Header() {
  return (
      <div className={styles.container}>
          <HeaderButton id="Home" link="/"></HeaderButton>
          <HeaderButton id="Projects" link="/projects"></HeaderButton>
      </div>
    
  )
}