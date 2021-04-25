import { Toolbar } from '../components/Toolbar'
import { LibCard } from '../components/LibCard'
import { Row } from 'react-bootstrap'
import { getData } from './api/libguides'
import styles from '../styles/libguides.module.scss'

const Libguides = ({ items }) => {
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

export const getStaticProps = async () => {
    let items = await getData('EVK6CIDU')
    return {
        props: {
            items,
        },
    }
}

export default Libguides