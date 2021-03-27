import { Navbar, Form, FormControl, Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <NavLink to="/login" className="nav-link">
                        Login
                    </NavLink>
                    <NavLink to="/register" className="nav-link">
                        Register
                    </NavLink>
                    <NavLink to="/pointpage" className="nav-link">
                        Homework1
                    </NavLink>
                    <NavLink to="/dynamic" className="nav-link">
                        Homework2
                    </NavLink>
                </Nav>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                    />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}
export default NavBar
