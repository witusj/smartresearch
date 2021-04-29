import { Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap'
import { useState } from 'react'
import data from '../pages/api/video.json'
import styles from '../styles/inspirationcards.module.scss'

export const InspirationCards = () => {
    
    const phases = ['discovery', 'analysis', 'writing', 'publication', 'outreach', 'assessment', 'all']
    const [selectedPhase, setSelectedPhase] = useState('all')

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
        (selectedPhase === 'all' || selectedPhase === item.phase) &&
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

    return (
        <div className={styles.main}>
            <Row>
                <Col>
                    <ButtonGroup className="mb-5 flex-wrap">
                        {phases.map(
                        (phase) => (
                            <div
                                    className={`${phase} btn text-capitalize p-3`}
                                    id={`${{phase}}`}
                                onClick={() => setSelectedPhase(phase)}>
                                {phase}
                            </div>
                        )
                        )}
                    </ButtonGroup>
                </Col>
            </Row>
            <Row>
                {newcard}
            </Row>
        </div>
    )
}