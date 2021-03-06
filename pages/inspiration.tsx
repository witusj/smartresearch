import { Inspirationcard} from '../components/inspirationcard'
import { Toolbar } from '../components/toolbar'
import { Col, Row, Button, ButtonGroup } from 'react-bootstrap'
import { useState } from 'react'
import data from './api/video.json'
import styles from '../styles/inspiration.module.scss'

export function getStaticProps() {
  
  return {
    props: {
      data,
    },
  }
}

export const Intro = (props) => {
  return (
    <div className="pb-5">
      <h1>{props.heading}</h1>
      <hr>
      </hr>
      <p className='lead'>{props.lead}</p>
    </div>
  )
}

export const Inspirationnew = ({ data }) => {
    const maxCounter = data.length
    const step = 15
    const [counter, setCounter] = useState(step)
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
            <div className={styles.main}>
                <Intro
                    heading="Inspiratiebronnen Smart Research"
                    lead={`Om je onderzoeksproces sneller, leuker en effectiever te maken, zijn er tal van slimme tools en tips beschikbaar. Hieronder vind je ${maxCounter} video's ter inspiratie. Iedere video is gekoppeld aan een stap in het onderzoeksproces. Gebruik onderstaande knoppen om te filteren.`}
                />
                <Row>
                    <Col>
                        <ButtonGroup className="mb-5 flex-wrap">
                            {phases.map((phase) => (
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
                <Row md={4}>
                    {newcard}
                </Row>
            
            {(selectedPhase === 'all' && counter <= maxCounter &&
                <Row className={styles.morebtn}>
                    <Button onClick={() => setCounter(counter + step)}>Toon volgende {Math.min(step, maxCounter - counter)} van {maxCounter - counter}</Button>
                </Row>
            )
            }
            </div>
        </div>
    )
}

export default Inspirationnew