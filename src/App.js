import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Message from './components/Messages';
import SendMessage from './components/SendMessage';

function App() {
  return (

    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Ana Sayfa</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/login">Giriş</Link>
              <Link className="nav-item nav-link" to="/signup">Kayıt Ol</Link>
              <Link className="nav-item nav-link" to="/send-message">Mesaj Gönder</Link>
              <Link className="nav-item nav-link" to="/message">Mesaj Listele</Link>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/send-message">
            <SendMessage />
          </Route>
          <Route path="/message">
            <Message />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
