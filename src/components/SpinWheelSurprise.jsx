import React, { useState, useRef } from "react";
import "./SpinWheelSurprise.css";

const SpinWheelSurprise = () => {
  const wheelRef = useRef(null);

  const allOptions = [
    "💋 Kiss",
    "🤗 Hug",
    "🍫 Chocolate",
    "🌹 Rose",
    "🎁 Gift",
    "💌 Letter",
    "😍 Date",
    "🔥 Romance"
  ];

  const [options, setOptions] = useState([...allOptions]);
  const [result, setResult] = useState("");
  const [spinning, setSpinning] = useState(false);

  const spinWheel = () => {
    if (spinning) return;

    if (options.length === 0) {
      setOptions([...allOptions]);
      setResult("✨ Sare surprises complete! Dubara spin karo 😘");
      return;
    }

    setSpinning(true);

    const randomIndex = Math.floor(Math.random() * options.length);
    const selectedOption = options[randomIndex];

    const sliceDeg = 360 / allOptions.length;

    // random spin: 6 rounds + correct slice
    const rotation = 360 * 6 + randomIndex * sliceDeg;

    wheelRef.current.style.transition = "transform 4s cubic-bezier(0.17, 0.67, 0.17, 1)";
    wheelRef.current.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
      setResult(selectedOption);

      const newOptions = options.filter((_, i) => i !== randomIndex);
      setOptions(newOptions);

      setSpinning(false);
    }, 4000);
  };

  return (
    <div className="spinwheel-box">
      <h2 className="spinwheel-title">🎡 Spin Wheel Surprise</h2>
      <p className="spinwheel-subtitle">Ek spin... aur ek cute surprise 💞</p>

      <div className="spinwheel-wrapper">
        <div className="spinwheel-pointer">▼</div>

        <div className="spinwheel-wheel" ref={wheelRef}>
          {allOptions.map((item, index) => (
            <div
              key={index}
              className="spinwheel-slice"
              style={{
                transform: `rotate(${index * (360 / allOptions.length)}deg)`
              }}
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <button className="spinwheel-btn" onClick={spinWheel} disabled={spinning}>
        {spinning ? "Spinning..." : "Spin Now 💘"}
      </button>

      {result && (
        <div className="spinwheel-result">
          ✨ Surprise: <span>{result}</span>
        </div>
      )}
    </div>
  );
};

export default SpinWheelSurprise;
