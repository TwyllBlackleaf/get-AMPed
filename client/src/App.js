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
        <>
          <Header></Header>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path="/mypage" component={MyProfile} />
            <Route path="/:id" component={UserPage}></Route>
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
          <Footer></Footer>
        </>
      </Router>
    );
  }

export default App;
