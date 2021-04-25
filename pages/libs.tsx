import { Toolbar } from '../components/toolbar'
import { LibItem } from '../components/libitem'
import { getData } from './api/libguides'

const Libs = ({ items }) => {

    const libitems = items.map(item => {
        return (
            <LibItem
                title={item.data.title}
                description={item.data.title}
            />
        )
    })
    return (
        <div className='page-container'>
            <Toolbar />
            
                
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

export default Libs