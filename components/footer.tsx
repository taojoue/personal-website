import styles from '../styles/Home.module.css'
import Image from 'next/image'


const footer = () => {
    return (
        <div>
            <a href='https://www.linkedin.com/in/taojouet/'>
                <span className={styles.logo}>
                    <Image src="/linkedin-icon-2.svg" alt="Linkedin Logo" width={108} height={24} />
                </span>
            </a>

            <a href='mailto: taojouet@gmail.com'>
                <span className={styles.logo}>
                    <Image src="/email-message-svgrepo-com.svg" alt="Email Logo" width={108} height={24} />
                </span>
            </a>

            <a href='https://www.github.com/taojoue/'>
                <span className={styles.logo}>
                    <Image src="/github-icon-1.svg" alt="GitHub Logo" width={108} height={24} />
                </span>
            </a>
        </div>
    )
}

export default footer