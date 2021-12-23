import styles from "./header_button.module.css"
import Link from "next/link"

export default function HeaderButton(props) {
    return (
        <div className={styles.container}>
            <Link href={props.link}>
                <a className={styles.headerText}>{props.id}</a>
            </Link>
        </div>
    )
}