import { Toolbar } from '../components/toolbar'
import { LibItem } from '../components/libitem'
import { Row } from 'react-bootstrap'
import { getData } from './api/libguides'
import styles from '../styles/libs.module.scss'
import { withRouter } from 'next/router'

const Libs = ({ items }) => {
   
    const libitems = items.map(item => {
        return (
            <LibItem className={styles.libitem}
                title={item.data.title}
                description={item.data.abstractNote}
                date={item.data.date}
                url={item.data.url}
                itemtype = {item.data.itemType}
            />
        )
    })
    return (
        <div className='page-container'>
            <Toolbar />
            <div className={styles.main}>
                <Row>
                    {libitems}
                </Row>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({query}) => {
    
    const response = await fetch(`https://api.zotero.org/groups/2930755/collections/${query.cid}/items`)
    const items = await response.json()
    return {
        props: {
            items,
        },
        
    }
}

export default Libs