import { Toolbar } from '../components/toolbar'
import { LibCard } from '../components/libcard'
import { Row } from 'react-bootstrap'
import { getData } from './api/libguides'
import styles from '../styles/libguides.module.scss'

const Libguides = () => {
    return (
        <div className='page-container'>
            <Toolbar />
            <div className={styles.main}>
                <Row>
                <LibCard
                    imagesrc="datascience.jpeg"
                    title = "Data Science"
                    description="Data Science is de wetensachap van data"
                />
                <LibCard
                    imagesrc="digitaltransformation.jpeg"
                    title = "Digital Transformation"
                    description="Data Science is de wetensachap van data"
                />
                <LibCard
                    imagesrc="openinnovation.jpeg"
                    title = "Open Innovation"
                    description="Data Science is de wetensachap van data"
                />
            </Row>
            </div>
        </div>
    )
}

export default Libguides