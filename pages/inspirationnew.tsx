import { Inspirationcard} from '../components/inspirationcard'
import { Toolbar } from '../components/toolbar'
import { Col, Row, Button, ButtonGroup } from 'react-bootstrap'
import { useState } from 'react'
import data from '../pages/api/video.json'
import styles from '../styles/inspirationnew.module.scss'

export function getStaticProps() {
  
  return {
    props: {
      data,
    },
  }
}

export const Inspirationnew = ({ data }) => {
    const maxCounter = data.length
    const [counter, setCounter] = useState(15)
    const phases = ['discovery', 'analysis', 'writing', 'publication', 'outreach', 'assessment', 'all']
    const [selectedPhase, setSelectedPhase] = useState('all')
    let sorted = data.sort((a, b) => { return b.id - a.id })
    let selection = selectedPhase === 'all' ? sorted.slice(0, counter) : sorted
    const newcard = selection.map((item) => {
        return (
            (selectedPhase === 'all' || selectedPhase === item.phase) &&
            <Inspirationcard
                id={item.id}
                src={item.src}
                name={item.name}
                desc={item.desc}
                phase={item.phase}
            />
        )
    })
    
    return (
        <div className='page-container'>
            <Toolbar />
            <Row>
                <Col>
                    <ButtonGroup className="mb-5 flex-wrap">
                        {phases.map(
                        (phase) => (
                            <div
                                    className={`${phase} btn text-capitalize p-3`}
                                    id={`${{phase}}`}
                                    onClick={() => {
                                        setSelectedPhase(phase)
                                        setCounter(15)
                                    }}>
                                {phase}
                            </div>
                        )
                        )}
                    </ButtonGroup>
                </Col>
            </Row>
            <div className={styles.main}>
                <Row>
                    {newcard}
                </Row>
            </div>
            
            {(selectedPhase === 'all' && counter <= maxCounter &&
                <Row>
                    <Button onClick={() => setCounter(counter + 15)}>Toon volgende</Button>
                </Row>
            )
            }
            
        </div>
    )
}

export default Inspirationnew