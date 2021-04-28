import { useRouter } from 'next/router'
import { Nav, Navbar } from 'react-bootstrap'

export const Toolbar = () => {
    const router = useRouter()

    return (
        <div className="mb-5">
            <img className="img-fluid mb-5" src="logo.png"></img>
            <Navbar expand="lg">
                <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link className="lead" onClick={() => router.push('/')}>Start</Nav.Link>
                    <Nav.Link className="lead" onClick={() => router.push('/inspiration')}>Inspiratie</Nav.Link>
                    <Nav.Link className="lead" onClick={() => router.push('/libguides')}>Libguides</Nav.Link>
                    <Nav.Link className="lead" onClick={() => window.open('https://www.linkedin.com/in/witektenhove/', '_blank')}>Linkedin</Nav.Link>
                    </Nav>
                        </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}