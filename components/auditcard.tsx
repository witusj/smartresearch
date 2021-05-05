import { Card, Tabs, Tab, ListGroup, Col } from 'react-bootstrap'

export const AuditCard = (props) => {
    
    const listItems = (itemstolist) => {
        return(
        itemstolist.map((item) =>
            <ListGroup.Item key={item}>
                {item}
            </ListGroup.Item>
        )
        )
    }

    return (
<Col md={4}>
            <Card className={"mb-5"}>
            <Card.Body>
                <Tabs className="bg-light" defaultActiveKey="leerdoel" id={props.title}>
                    <Tab className="pt-5 p-3" eventKey="leerdoel" title={props.title}>
                            <h5>
                                    <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">       
                                    <image className="m-5" xlinkHref={props.imagehref} height="30" width="30"></image>
                                </svg> Leerdoel
                            </h5>
                        <p>
                            {props.learningoutcome}, zodat ik:
                        </p>
                        <ListGroup>
                            {listItems(props.learninggoals)}
                        </ListGroup>
                    </Tab>
                    <Tab className="pt-5 p-3" eventKey="vraag 1" title="Vraag 1">
                        <h5>Kwaliteitsvraag 1</h5>
                        <p>{props.firstquestiontxt}</p>
                        <ListGroup>
                            {listItems(props.firstquestionansw)}
                        </ListGroup>
                    </Tab>
                    <Tab className="pt-5 p-3" eventKey="vraag 2" title="Vraag 2">
                        <h5>Kwaliteitsvraag 2</h5>
                        <p>{props.secondquestiontxt}</p>
                        <ListGroup>
                            {listItems(props.secondquestionansw)}
                        </ListGroup>
                    </Tab>
                    <Tab className="pt-5 p-3" eventKey="vraag 3" title="Vraag 3">
                        <h5>Kwaliteitsvraag 3</h5>
                        <p>{props.thirdquestiontxt}</p>
                        <ListGroup>
                            {listItems(props.thirdquestionansw)}
                        </ListGroup>
                    </Tab>
                    <Tab className="pt-5 p-3" eventKey="vraag 4" title="Vraag 4">
                        <h5>Kwaliteitsvraag 4</h5>
                        <p>{props.fourthquestiontxt}</p>
                        <ListGroup>
                            {listItems(props.fourthquestionansw)}
                        </ListGroup>
                    </Tab>
                </Tabs>
            </Card.Body>
            </Card>
        </Col>
        
    )
}

