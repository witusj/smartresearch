import { Toolbar } from '../components/toolbar'
import { LibCard } from '../components/libcard'
import { Row } from 'react-bootstrap'
import styles from '../styles/libguides.module.scss'
import data from './libguides.json'

const Libguides = () => {

    const libcards = data.map((item) => {
        return (
            <LibCard
                imagesrc={item.image}
                title = {item.title}
                description={item.description}
                cid = {item.cid}
                />
        )
                
                })
    return (
        <div className='page-container'>
            <Toolbar />
            <div className={styles.main}>
                <Row>
                    {libcards}
                </Row>
            </div>
        </div>
    )
}

export default Libguides