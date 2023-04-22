import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './App.css';
import  Mainarea  from "./components/Mainarea";
import "./fonts/CabinetGrotesk-Variable.woff2"
import "./fonts/CabinetGrotesk-Variable.woff"
import "./fonts/CabinetGrotesk-Variable.ttf"

function App() {
  return (
    <div>
      <Parallax pages={3} style={{ top: '0', left: '0' }} className = "animation">
      <ParallaxLayer offset={0} speed={0.2}>
        <div className = "animation_layer parallax" id = "Background"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <div className = "animation_layer parallax" id = "Man_Cave"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.35}>
        <div className = "animation_layer parallax" id = "Stone"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.24}>
        <div className = "animation_layer parallax" id = "second"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.25}>
        <Mainarea/>
      </ParallaxLayer>
    </Parallax>
    </div>
  );
}

export default App;
