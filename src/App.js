import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DynamicPage from './pages/DynamicPage'
import NavBar from './components/Navbar'
import PointPage from './pages/PointPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path={'/login'}>
                    <LoginPage />
                </Route>
                <Route path={'/register'}>
                    <RegisterPage />
                </Route>
                <Route path={'/:name/:password'}>
                    <DynamicPage />
                </Route>
                <Route path={'/pointpage'}>
                    <PointPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
