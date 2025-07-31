import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'
import Header from './header.js'
import "./PageStyle.css"
import ChangingText from "./changingText.js"
import demoVideo from "./fitech2.mp4"

function App() {
  return (
    <div className="App">
      <div style={{boxShadow: "-2px 0px 5px rgba(0, 0, 0, 0.2)", position:"absolute", width: "100%"}}>
      <Header></Header>
      </div>
      <div style={{height: "", backgroundColor: "#fff5f4", paddingTop:"7vh", display:"flex", justifyContent:"center", flexDirection:"column"}}>
          <div style={{}}>
            <p className='gradientTxt' style={{fontSize:"4.8rem", margin:"1vh", fontWeight: "700" }}>
              World-class coach <br></br> right in your phone
            </p>
          </div>
          <div>
            <p style={{color: "#535353", fontSize: "1.2rem", marginBottom:"1vh"}}>
              Stand in front of your camera and let our AI coach teach you... 
            </p>
            <ChangingText></ChangingText>
          </div>
          <div style={{width:"100%"}}>
          <button className='waitlistButton' style={{width:"15rem", marginTop:"3vh"}}>
            Join waitlist
          </button>
          </div>
          <div>
            <video  src = {demoVideo} style={{width:"60vw", height:"", marginTop:"50px", borderRadius:"20px", objectFit:"cover"}} autoPlay loop muted playsInline>
            </video>
          </div>
      </div>
    </div>
  );
}

export default App;