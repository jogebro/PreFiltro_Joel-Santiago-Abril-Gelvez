import './App.css';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Cards from './components/cards.jsx';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <Route exact path="/tienda">
          <Cards />
        </Route>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
