import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'
import Header from './header.js'

function App() {
  return (
    <div className="App">
      <div style={{boxShadow: "5px 1px 10px rgba(0, 0, 0, 0.2)", position:"absolute", width: "100%"}}>
      <Header></Header>
      </div>
      <div style={{height: "93vh", backgroundColor: "#fff5f4", paddingTop:"7vh"}}>

      </div>
    </div>
  );
}

export default App;