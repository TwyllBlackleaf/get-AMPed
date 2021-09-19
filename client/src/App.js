import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import UserPage from './components/UserPage';
import MyProfile from './components/MyProfile';

function App() {
    return (
        <Router>
            <App>
                <Header></Header>
                <Switch>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/mypage">
                        <MyProfile></MyProfile>
                    </Route>
                    <Route path="/:id">
                        <UserPage></UserPage>
                    </Route>
                    <Route path="/">
                        <Home></Home>
                    </Route>
                </Switch>
                <Footer></Footer>
            </App>
        </Router>
    );
}

export default App;
