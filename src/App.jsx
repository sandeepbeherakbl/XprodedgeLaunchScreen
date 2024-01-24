import { useState, useEffect } from "react";
import Confetti from "react-dom-confetti";
import "./App.css";

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const handleLaunchClick = () => {
    // Show the timer and start the countdown
    setShowTimer(true);
    setCountdown(3);

    // Start the countdown
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Activate confetti after 3 seconds
    setTimeout(() => {
      setShowConfetti(true);
      clearInterval(countdownInterval); // Stop the countdown
    }, 3000);
  };

  const confettiConfig = {
    angle: 45,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    decay: 0.9,
  };

  // Reset confetti, timer, and countdown after 3 seconds
  useEffect(() => {
    if (showConfetti) {
      const resetTimeout = setTimeout(() => {
        setShowConfetti(false);
        setShowTimer(false);
        setCountdown(3);
      }, 3000);

      return () => clearTimeout(resetTimeout);
    }
  }, [showConfetti]);

  return (
    <>
      <div className="main-div">
        <div className="image-div">
          <img src="https://xprodedge.com/images/slider/hero.png" alt="" />
        </div>
        
        {showTimer && (
          <div className="timer-div">
            <h1>{countdown}</h1>
          </div>
        )}

        <div className="launch-button">
          <button
            className="button-19"
            role="button"
            onClick={handleLaunchClick}
            disabled={showConfetti}
          >
            Launch
          </button>
        </div>
      </div>

      <Confetti
        active={showConfetti}
        config={confettiConfig}
        className="confetti top-left"
      />
      <Confetti
        active={showConfetti}
        config={confettiConfig}
        className="confetti top-left"
      />
      <Confetti
        active={showConfetti}
        config={confettiConfig}
        className="confetti top-right"
      />
      <Confetti
        active={showConfetti}
        config={confettiConfig}
        className="confetti top-right"
      />
      <Confetti
        active={showConfetti}
        config={confettiConfig}
        className="confetti bottom-left"
      />
      <Confetti
        active={showConfetti}
        config={confettiConfig}
        className="confetti bottom-left"
      />
      <Confetti
        active={showConfetti}
        config={confettiConfig}
        className="confetti bottom-right"
      />
      <Confetti
        active={showConfetti}
        config={confettiConfig}
        className="confetti bottom-right"
      />
    </>
  );
}

export default App;
