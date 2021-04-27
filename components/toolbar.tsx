import { useRouter } from 'next/router'
import styles from '../styles/toolbar.module.scss'

export const Toolbar = () => {
    const router = useRouter()

    return (
        <div>
            <img className="img-fluid" src="logo.png"></img>
            <div className={styles.main}>
                <div className="lead" onClick={() => router.push('/')}>Start</div>
                <div className="lead" onClick={() => router.push('/inspiration')}>Inspiratie</div>
                <div className="lead" onClick={() => router.push('/libguides')}>Libguides</div>
                <div className="lead" onClick={() => window.open('https://www.linkedin.com/in/witektenhove/', '_blank')}>Linkedin</div>
            </div>
        </div>
    )
}