import { Navbar, Nav, Container } from "react-bootstrap";


const NavBar = () => {
    return (
     <div>
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/">Game &nbsp;Harbour</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#trending"> Trending Game</Nav.Link>
                    <Nav.Link href="#best"> Best Game</Nav.Link>
                    <Nav.Link href="#contact"> Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
     </div>       
    )
}

export default NavBar;