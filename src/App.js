import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'
import Header from './header.js'
import "./PageStyle.css"
import ChangingText from "./changingText.js"
import Footer from './footer.js'
import puzzle from "./puzzle.svg"
import multiple from "./multiple.svg"
import adapt from "./adapt.svg"
import VideoPlayer from './videoPlayer.js';

function App() {
  return (
    <div className="App">
      <div style={{boxShadow: "-2px 0px 5px rgba(0, 0, 0, 0.2)", position:"absolute", width: "100%"}}>
      <Header></Header>
      </div>
      <div style={{height: "", backgroundColor: "#fff5f4", paddingTop:"12vh", display:"flex", justifyContent:"center", flexDirection:"column"}}>
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
            <VideoPlayer></VideoPlayer>
          </div>
      </div>
      <div className='secondSection' id="features" style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center", paddingBottom:"17vh"}}>
        <div>
          <p className='gradientTxt2' style={{fontSize:"4rem", margin:"1vh", fontWeight: "700" }}>
              AI that understands <br></br> the human body
            </p>
            <p style={{color: "#000000ff", fontSize: "1.2rem", marginBottom:"3vh"}}>
              Say goodbye to pricey coaches and confusing videos <br></br> train smarter with real-time, personalized feedback anytime, anywhere.
            </p>
        </div>
        <div className='feature-cards'>
          <div class="card">
            <div className='iconText'>
              <div class="icon">
                <img src={puzzle} style={{width:"40px"}}></img>
              </div>
              <h3>Profound understanding</h3>
            </div>
            <p>Be it a punch, kick, jump, or any other movement. Begin a lesson and see how real-time feedback helps you improve.</p>
          </div>

          <div class="card">
            <div className='iconText'>
              <div class="icon">
                <img src={multiple} style={{width:"35px"}}></img>
              </div>
              <h3>Multiple sports</h3>
            </div>
            <p>Learn multiple sports effortlessly, without needing separate coaches or apps. One AI coach, endless possibilities.</p>
          </div>
          <div class="card">
            <div className='iconText'>
              <div class="icon">
                <img src={adapt} style={{width:"35px"}}></img>
              </div>
              <h3>Adaptive Coaching</h3>
            </div>
            <p>Our AI coach continuously learns from your movements — adapting its feedback to your unique style so you improve faster, smarter, and more efficiently over time.</p>
          </div>

        </div>
      </div>
      <div className='thirdSection' id="aboutUs">

      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;