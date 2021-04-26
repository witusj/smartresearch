import { Button, Card, Col } from 'react-bootstrap'

export const LibCard = (props) => {
    return (
        <div>
            <Col md={4}>
                <Card>
                    <Card.Img variant="top" src={props.imagesrc} />
                        <Card.Body>
                        <Card.Title>{ props.title }</Card.Title>
                            <Card.Text>
                                Gepubliceerd op: { props.description }
                            </Card.Text>
                        <Button>Naar { props.title }</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
        
    )
}
