import { Col, Card, ButtonGroup } from 'react-bootstrap'
import { YouTube} from './youtube'
import styles from '../styles/inspirationcards.module.scss'

export const Inspirationcard = (props) => {
    return (
        <Col md={4}>
            <Card className={styles.inspirationcard} key={props.id}>
                <Card.Body className={styles.inspirationbody}>
                    <YouTube url={props.src} />
                    <Card.Title className={styles.inspirationtitle}>
                        {props.name}
                    </Card.Title>
                    <Card.Text>
                        {props.desc}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className={`${props.phase} lead text-center text-white text-capitalize font-weight-bold`}>
                        {props.phase}
                </Card.Footer>
            </Card>
        </Col>
    )
}
