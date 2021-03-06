import { Button, Card, Col } from 'react-bootstrap'
import styles from '../styles/libitem.module.scss'


export const LibItem = (props) => {

    const splitWord = (word) => {
        let rx = /[A-Z]/g
        let ix = word.search(rx)
        return word.substring(0, ix) + " " + word.substring(ix)
    }

    const textTruncation = (text, num) => {
        const setText = text + ''
        const truncText = setText.length <= num ? text : text.slice(0, num) + '....'
        

        return truncText
    }

    return (
        <Col md={4}>
            <Card className={styles.libitemcard}>
                <Card.Header as="h5">{ props.title }</Card.Header>
                    <Card.Body className={styles.libitembody}>
                    <Card.Text>
                        {textTruncation(props.description, 280) }
                    </Card.Text>
                    <Card.Text className="libssmalltext">
                        <small className="text-muted ">
                            Toegevoegd op: { props.date }
                        </small>
                    </Card.Text>
                    <Button className="libs text-capitalize" href={props.url} target="_blank">Naar { splitWord(props.itemtype) }</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}