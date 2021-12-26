import styles from "./project_block.module.css"
import Link from "next/link"
import Image from "next/image"

export default function ProjectBlock(props) {
    return (
        <div className={styles.container}>
                <Image
                    src={props.image ? props.image : "/images/profile.jpg"}
                    className={styles.subImage}
                    height={160}
                    width={160}
                    alt={props.title}
                    layout={"fixed"}
                />

                <div className={styles.textContainer}>
                    <p className={styles.titleText}><a href={props.link} className={styles.linkText} target="_blank">{props.title}</a></p>
                    {/* <p className={styles.titleStyle}>{props.title}</p> */}
                    
                    <div 
                    className={styles.descriptionText} 
                    dangerouslySetInnerHTML={{__html: props.descriptionText}}></div>
                </div>
        </div>
    )
}