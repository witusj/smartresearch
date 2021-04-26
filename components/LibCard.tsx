import { Button, Card, Col } from 'react-bootstrap'

export const LibCard = (props) => {
    return (
        <div className={styles.main}>
            <Col md={4}>
                <Card className={styles.inspirationcard}>
                    <Card.Img variant="top" src={props.imagesrc} />
                        <Card.Body className={styles.inspirationbody}>
                        <Card.Title className={styles.inspirationtitle}>{ props.title }</Card.Title>
                            <Card.Text>
                                Gepubliceerd op: { props.description }
                            </Card.Text>
                        <Button variant="primary">Naar { props.title }</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
        
    )
}