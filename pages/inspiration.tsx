import { InspirationCards} from '../components/inspirationcards'
import { Toolbar } from '../components/toolbar'
import styles from '../styles/inspiration.module.scss'

export const Inspiration = () => {
    return (
        <div className='page-container'>
            <Toolbar />
            <div className={styles.main}>
                <InspirationCards />
            </div>
            
        </div>
    )
}

export default Inspiration