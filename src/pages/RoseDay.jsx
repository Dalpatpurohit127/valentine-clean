import React, { useEffect, useRef, useState } from "react";
import "./RoseDay.css";

const TypeWriter = ({ text, speed = 60 }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayText("");

    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text.charAt(index));
      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className="typing-text">{displayText}</p>;
};

const RoseDay = () => {
  const audioRef = useRef(null);
  const [showSurprise, setShowSurprise] = useState(false);

  const currentYear = new Date().getFullYear();

  const letter = `  मेरी प्यारी Wife ❤️🌹,
आज Rose Day है… और तुम दूर होकर भी मेरे दिल के सबसे पास हो।
तुम मेरी जिंदगी का सबसे खूबसूरत हिस्सा हो।

हर गुलाब की खुशबू में मुझे तुम्हारी याद आती है…
और हर रात की चांदनी में तुम्हारा चेहरा दिखता है।

तुम मेरी मुस्कान हो,
तुम मेरी शांति हो,
और तुम ही मेरी दुनिया हो।

मैं चाहता हूँ कि ये गुलाब तुम्हें बताए —
कि मैं तुम्हें हर दिन पहले से ज्यादा प्यार करता हूँ ❤️

Happy Rose Day My Love 🌹✨
तुम्हारा Husband ❤️`;

  // Auto Falling Roses
  useEffect(() => {
    const container = document.querySelector(".rose-container");

    for (let i = 0; i < 25; i++) {
      const rose = document.createElement("div");
      rose.className = "falling-rose";
      rose.style.left = Math.random() * 100 + "vw";
      rose.style.animationDuration = 4 + Math.random() * 4 + "s";
      rose.style.fontSize = 18 + Math.random() * 22 + "px";
      rose.style.opacity = 0.5 + Math.random() * 0.5;
      rose.innerHTML = "🌹";
      container.appendChild(rose);
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  // Auto Play Song Loop
  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.volume = 0.5;
          await audioRef.current.play();
        }
      } catch (error) {
        console.log("AutoPlay blocked by browser. User interaction needed.");
      }
    };

    playAudio();
  }, []);

  return (
    <div className="rose-page">
      <div className="overlay"></div>

      <div className="rose-container"></div>

      <div className="content">
        <h1 className="title">🌹 Happy Rose Day 🌹</h1>
        <h2 className="subtitle">My Beautiful Wife ❤️</h2>

        {/* Auto Scrolling Images */}
        <div className="slider">
          <div className="slide-track">
           
            <div className="slide">
              <img src="/images/roj2.jpeg" alt="memory2" />
            </div>
            <div className="slide">
              <img src="/images/roj3.jpeg" alt="memory3" />
            </div>
           
            <div className="slide">
              <img src="/images/roj5.jpeg" alt="memory5" />
            </div>
            <div className="slide">
              <img src="/images/roj6.jpeg" alt="memory5" />
            </div>
            <div className="slide">
              <img src="/images/roj7.jpeg" alt="memory5" />
            </div>
            <div className="slide">
              <img src="/images/roj8.jpeg" alt="memory5" />
            </div>
            <div className="slide">
              <img src="/images/roj9.jpeg" alt="memory5" />
            </div>
            <div className="slide">
              <img src="/images/roj10.jpeg" alt="memory5" />
            </div>
            <div className="slide">
              <img src="/images/roj11.jpeg" alt="memory5" />
            </div>
            <div className="slide">
              <img src="/images/roj12.jpeg" alt="memory5" />
            </div>
          </div>
        </div>

        {/* Letter Card */}
        <div className="card">
          <TypeWriter text={letter} speed={50} />
        </div>

        {/* Buttons */}
        <div className="buttons">
          <button className="btn btn-love" onClick={() => setShowSurprise(true)}>
            🎁 Surprise Gift
          </button>

          <button
            className="btn"
            onClick={() => alert("I Love You Meri Jaan ❤️🌹")}
          >
            💌 Click For Love
          </button>
        </div>

        <p className="footer">© {currentYear} Made with ❤️ for My Wife</p>
      </div>

      {/* Surprise Popup */}
      {showSurprise && (
        <div className="popup">
          <div className="popup-card">
            <h2>💖 Surprise For You 💖</h2>
            <p>
              मेरी जान ❤️🌹  
              तुम मेरी जिंदगी की सबसे प्यारी चीज हो...  
              मैं तुम्हें हमेशा खुश देखना चाहता हूँ 😘  
              <br /><br />
              तुमसे बहुत प्यार करता हूँ ❤️✨
            </p>

            <button className="btn" onClick={() => setShowSurprise(false)}>
              ❌ Close
            </button>
          </div>
        </div>
      )}

      {/* Auto Song */}
      <audio ref={audioRef} loop>
        <source src="/music/romantic1.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
};

export default RoseDay;
