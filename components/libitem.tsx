import { Button, Card, Col } from 'react-bootstrap'

export const LibItem = (props) => {
    return (
        <Col md={4}>
            <Card>
                <Card.Img variant="top" src={props.imagesrc} />
                    <Card.Body>
                    <Card.Title>{ props.title }</Card.Title>
                        <Card.Text>
                            { props.description }
                        </Card.Text>
                    <Button variant="primary">Naar { props.title }</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
