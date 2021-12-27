import styles from "./header_button.module.css"
import Link from "next/link"

export default function HeaderButton(props) {
    return (
        <div className={styles.container}>
            {props.link.includes("https") || props.link.includes("http") ? 
            <a className={styles.headerText} href={props.link} target="_blank" rel="noreferrer">{props.id}</a> :  
            <Link href={props.link}>
                <a className={styles.headerText}>{props.id}</a>
            </Link>
            }
            
        </div>
    )
}