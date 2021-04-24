import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RouterFile from './RouterFile/RouterFile';

function App() {
  return (
    <div className="App">
      <Router>
        <RouterFile />
      </Router>
    </div>
  );
}

export default App;
