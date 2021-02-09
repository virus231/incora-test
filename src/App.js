import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Header} from './components/Header'
import {Posts} from './pages/Posts'
import {Users} from './pages/Users'
import {Post} from './components/Post'
import {Details} from './pages/Details'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'




function App() {
  return (
    <div className="App">
      <Router>
        <Container>
        <Header/>
          <Switch>
            <Route path={'/','/users'} component={Users}/>
            <Route path="/posts/:id" component={Posts}/>
            <Route exact path="/details-post/:id" component={Details}></Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
