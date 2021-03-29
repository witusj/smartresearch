import { useRouter } from 'next/router'
import styles from '../styles/Toolbar.module.scss'

export const Toolbar = () => {
    const router = useRouter()

    return (
        <div>
            <img className="img-fluid" src="logo.png"></img>
            <div className={styles.main}>
                <div className="lead" onClick={() => router.push('/')}>Home</div>
                <div className="lead" onClick={() => router.push('/inspiration')}>Inspiration</div>
                <div className="lead" onClick={() => window.open('https://www.linkedin.com/in/witektenhove/', '_blank')}>Linkedin</div>
            </div>
        </div>
    )
}