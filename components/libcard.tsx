import { Button, Card, Col } from 'react-bootstrap'
import styles from '../styles/libcard.module.scss'
import * as gtag from '../lib/gtag.js'
import { propTypes } from 'react-bootstrap/esm/Image'



export const LibCard = (props) => {
    const toLibguide = ()=>  {
    gtag.event ({
        action : "choose_libguide",
        category : `${ props.title }`,
        label : "libguide chosen",
        value : "done"
    })
    }
    
    return (
            <Col md={4}>
            <Card className={styles.libcardcard}>
                <Card.Img variant="top" src={props.imagesrc} />
                <Card.Body className={styles.libcardbody}>
                    
                        <Card.Title className={styles.libcardtitle}>{ props.title }</Card.Title>
                            <Card.Text>
                                { props.description }
                            </Card.Text>
                    <Button className="libguides" href={`./libs?cid=${props.cid}&title=${props.title}`} onClick={() => toLibguide()} >Naar { props.title }</Button>
                    </Card.Body>
                </Card>
            </Col>
    )
}
