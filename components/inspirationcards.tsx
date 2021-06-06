import { Row, Col, Card, ButtonGroup } from 'react-bootstrap'
import { useState } from 'react'
import { YouTube} from './youtube'
import data from '../pages/api/video.json'
import styles from '../styles/inspirationcards.module.scss'

export const InspirationCards = () => {
    
    const phases = ['discovery', 'analysis', 'writing', 'publication', 'outreach', 'assessment', 'all']
    const [selectedPhase, setSelectedPhase] = useState('all')

    let sorted = data.sort((a, b) => { return b.id - a.id })
    const newcard = sorted.map((item) => {
    
    return (    
        (selectedPhase === 'all' || selectedPhase === item.phase) &&
        <Col md={4}>
            <Card className={styles.inspirationcard} key={item.id}>
                <Card.Body className={styles.inspirationbody}>
                    <YouTube url={item.src} />
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
                                    key={phase}
                                    className={`${phase} btn text-capitalize p-3`}
                                    id={phase}
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