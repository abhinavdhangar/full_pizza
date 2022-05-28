import React, { useEffect, useState, useRef } from "react";
import error from '../json/error.json'
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";

export default function Scroll() {
  const lottiee = React.useRef(null);

  React.useEffect(() => {
    lottiee.current.addEventListener("load", function (e) {
      create({
        mode: "scroll",
        player: "#firstLottie",
        actions: [
          {
            visibility: [0, 1],
            type: "seek",
            frames: [0, 181]
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
        id="firstLottie"
        
        mode="scroll"
        src="https://assets2.lottiefiles.com/packages/lf20_w9wl8mlm.json"
        style={{ width: "320px" }}
      ></lottie-player>
      <div style={{ height: "600px" }}></div>
    </div>
  );
}