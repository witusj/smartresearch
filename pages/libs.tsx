import { Toolbar } from '../components/toolbar'
import { LibItem } from '../components/libitem'
import { Row } from 'react-bootstrap'
import styles from '../styles/libs.module.scss'

const Libs = ({ items, title }) => {
   
    const libitems = items.map(item => {
        return ( item.data.itemType != 'note' &&
            <LibItem
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
            <div className="libstitle">
                <h1>Libguide: {title}</h1>
            </div>
            
            <div className={styles.main}>
                <Row>
                    {libitems}
                </Row>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({query}) => {
    const title = query.title
    const response = await fetch(`https://api.zotero.org/groups/2930755/collections/${query.cid}/items`)
    const items = await response.json()
    return {
        props: {
            items,
            title,
        },
        
    }
}

export default Libs