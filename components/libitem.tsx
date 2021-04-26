import { Button, Card, Col } from 'react-bootstrap'
import styles from '../styles/libitem.module.scss'


export const LibItem = (props) => {

    const splitWord = (word) => {
        let rx = /[A-Z]/g
        let ix = word.search(rx)
        return word.substring(0, ix) + " " + word.substring(ix)
    }

    const textTruncation = (text, num) => {
        return text.length <= num ? text : text.slice(0, num) + '....'
    }

    const dateConverter = (date) => {
        let dateObject = new Date(date)
        return date ? dateObject.getDate() + "/" + dateObject.getMonth() + "/" + dateObject.getFullYear(): "niet bekend"
    }

    return (
        <Col md={4}>
            <Card className={styles.libitemcard}>
                <Card.Img variant="top" src={props.imagesrc} />
                    <Card.Body className={styles.libitembody}>
                    <Card.Title className={styles.libitemtitle }>{ props.title }</Card.Title>
                        <Card.Text>
                        {textTruncation(props.description, 280) }
                    </Card.Text>
                    <Card.Text>
                        <small className="text-muted">
                            Gepubliceerd op: { dateConverter(props.date) }
                        </small>
                    </Card.Text>
                    <Button className="libs text-capitalize" href={props.url} target="_blank">Naar { splitWord(props.itemtype) }</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}