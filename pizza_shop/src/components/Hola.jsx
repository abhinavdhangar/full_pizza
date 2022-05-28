import React, { useRef,useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import {create} from '@lottiefiles/lottie-interactivity'

export default function Hola(){
const container = useRef(null)
const chatak=()=> {
  let hola_style = container.current.props.style

  hola_style.width = '200px'
  hola_style.height= '200px'
}



 useEffect(() => {
    container.current.addEventListener("load", function (e) {
      create({
        mode: "scroll",
        player: "#hola",
        actions: [
          {
            visibility: [0, 1],
            type: "seek",
            frames: [0, 181]
          }
        ]
      });
    });
  }, [container]);
    return (
      <div className="App">
        <div className="">
          <div className="app">
            Hola <span onClick={chatak} className="devs">Developers !</span>
          </div>
          <div>
          <div style={{ height: "200px" }}></div>
            <Player id="hola" ref={container} 
                 mode="scroll"
              autoplay
              loop
              src="https://assets2.lottiefiles.com/packages/lf20_Uk3Ei3.json"
              style={{ height: "400px", width: "400px"}}
            />
 <div style={{ height: "600px" }}></div>
          </div>
          <h1 className="text-3xl">Sorry, no content !</h1>
        </div>
      </div>
    );
    }


