import { Row, Col, Card } from 'react-bootstrap'
import data from './data/data.json'
import styles from '../styles/inspirationcards.module.scss'

const YouTube = (props) => {
    return (
        <iframe
        className="card-img-top"
        width="560"
        height="315"
        src={props.src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>
    )
}

const newcard = data.map((item) => {
    return (
        <Col md={4}>
            <Card className={styles.inspirationcard} key={item.id}>
                <Card.Body className={styles.inspirationbody}>
                    <YouTube src={item.src} />
                    <Card.Title className={styles.inspirationtitle}>
                        {item.name}
                    </Card.Title>
                    <Card.Text>
                        {item.desc}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className={`${item.phase} lead text-center text-white text-capitalize font-weight-bold`}>
                        {item.phase}
                </Card.Footer>
            </Card>
        </Col>
            
    )
}
)

export const InspirationCards = () => {
    return (
        <div className={styles.main}>
            <Row>
                {newcard}
            </Row>
        </div>
    )
}