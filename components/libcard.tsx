import { Button, Card, Col } from 'react-bootstrap'
import styles from '../styles/libcard.module.scss'

export const LibCard = (props) => {
    return (
            <Col md={4}>
                <Card className={styles.libcardcard}> 
                <Card.Body className={styles.libcardbody}>
                    <Card.Img variant="top" src={props.imagesrc} />
                        <Card.Title className={styles.libcardtitle}>{ props.title }</Card.Title>
                            <Card.Text>
                                { props.description }
                            </Card.Text>
                        <Button className="libguides" href={`./libs?cid=${ props.cid }&title=${ props.title }`}>Naar { props.title }</Button>
                    </Card.Body>
                </Card>
            </Col>
    )
}
