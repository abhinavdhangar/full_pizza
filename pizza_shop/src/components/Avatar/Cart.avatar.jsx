import React, { useEffect, useState, useRef } from "react";
import * as Player from "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";

export default function Testing() {
    const lottiee = React.useRef(null);

    React.useEffect(() => {
        lottiee.current.addEventListener("load", function (e) {
            create({
                player: '#flower',
                mode: "cursor",
                actions: [
                    {
                        type: "click",
                        forceFlag: false
                    }
                ]
            });
        });
    }, [lottiee]);

    return (
        <div >

            <div class="flex items-center justify-center h-[90vh]">
                <div class="relative">
                    <div > 
                    <lottie-player 
                        ref={lottiee} 
                        
                        id="flower"
                        
                        // src="https://assets2.lottiefiles.com/packages/lf20_w9wl8mlm.json"
                        // src = "https://assets2.lottiefiles.com/packages/lf20_6kbjigp3.json"
                        src="https://assets5.lottiefiles.com/packages/lf20_uaymabex.json"
                        style={{ width: "70px" }}
                    ></lottie-player>
                    </div>
                    <span class="top-[-11px] left-[3.9rem] absolute  w-7 h-7 bg-green-400 border-2 border-white rounded-full flex items-center text-sm justify-center">43</span>
                </div>
            </div>


            <div style={{ height: "600px" }}></div>
        </div>
    );
}