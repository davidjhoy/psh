import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function getAnimationSettings(angle, originX) {
  return {
    particleCount: 1,
    startVelocity: 0,
    ticks: 200,
    gravity: 1.5,
    origin: {
      x: Math.random(),
      y: Math.random() * 0.999 - 0.9
    },
    colors: ["#fc0"],
    shapes: ["circle", "square"],
    scalar: randomInRange(0.9, 1.4),
    drift: 1.3
  };
}

export default function Snow() {
  const refAnimationInstance = useRef(null);
  const [intervalId, setIntervalId] = useState();

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(60, 0));
      refAnimationInstance.current(getAnimationSettings(120, 1));
    }
  }, []);

  const startAnimation = useCallback(() => {
    
  }, [nextTickAnimation, intervalId]);

 

  useEffect(() => {
    if (!intervalId) {
        setIntervalId(setInterval(nextTickAnimation, 16));
      }
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId, nextTickAnimation]);

  return (
    <>
      
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </>
  );
}
