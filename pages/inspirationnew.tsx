import { Inspirationcard} from '../components/inspirationcard'
import { Toolbar } from '../components/toolbar'
import { Col, Row, ButtonGroup } from 'react-bootstrap'
import { useState } from 'react'
import data from '../pages/api/video.json'

export function getStaticProps() {
  
  return {
    props: {
      data,
    },
  }
}

export const Inspirationnew = ({ data }) => {
    const phases = ['discovery', 'analysis', 'writing', 'publication', 'outreach', 'assessment', 'all']
    const [selectedPhase, setSelectedPhase] = useState('all')
    let sorted = data.sort((a, b) => { return b.id - a.id })
    const newcard = sorted.map((item) => {
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

export default Inspirationnew