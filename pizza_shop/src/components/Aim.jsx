import React, { useEffect, useState, useRef } from "react";
import error from '../json/error.json'
import * as Player from "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";

export default function Aim() {
  const lottiee = React.useRef(null);

  React.useEffect(() => {
    lottiee.current.addEventListener("load", function (e) {
        create({
            player:'#flower',
            mode:"cursor",
            actions: [
                {
                    type: "pauseHold"
                }
            ]
        });
    });
  }, [lottiee]);

  return (
    <div >
      <div style={{ height: "600px" }}></div>
      <lottie-player
        ref={lottiee} // 2. set the reference for the player
        id="flower"
      autoplay
       loop
        // src="https://assets2.lottiefiles.com/packages/lf20_w9wl8mlm.json"
        src = "https://assets2.lottiefiles.com/packages/lf20_6kbjigp3.json"
        style={{ width: "320px" }}
      ></lottie-player>
      <div style={{ height: "600px" }}></div>
    </div>
  );
}