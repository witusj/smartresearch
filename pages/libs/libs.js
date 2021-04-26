import { withRouter } from 'next/router'

const Libs = withRouter((props) => {
    return (
        <div>
            <h1>Collection: {props.router.query.cid}</h1>
            <p>Well done!</p>
        </div>

    )
})

export default Libs