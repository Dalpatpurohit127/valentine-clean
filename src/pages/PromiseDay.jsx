import React, { useEffect, useRef, useState } from "react";
import "./PromiseDay.css";

const TypeWriter = ({ text, speed = 55 }) => {
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

const PromiseDay = () => {
  const audioRef = useRef(null);
  const [showSurprise, setShowSurprise] = useState(false);

  const currentYear = new Date().getFullYear();

  const letter = `  मेरी प्यारी Wife ❤️💍,
आज Promise Day है...

मैं आज तुम्हें एक वादा करना चाहता हूँ,
जो सिर्फ शब्द नहीं… मेरी पूरी जिंदगी है।

मैं वादा करता हूँ —
हर खुशी में तुम्हारा हाथ थामे रहूँगा,
हर दुख में तुम्हारा सहारा बनूँगा।

जब तुम हंसोगी,
तो मैं खुद को सबसे अमीर इंसान समझूँगा...
और जब तुम्हारी आँखों में आँसू होंगे,
तो मैं अपनी सारी दुनिया भूल जाऊँगा।

मैं वादा करता हूँ कि
तुम्हें हमेशा Queen की तरह रखूँगा 👑
और हर दिन तुम्हें पहले से ज्यादा प्यार करूँगा ❤️✨

आज नहीं...
हर दिन तुम्हें Propose करता हूँ ❤️💍

Happy Promise Day My Love 💞
तुम्हारा Husband ❤️`;

  // Floating Hearts + Rings
  useEffect(() => {
    const container = document.querySelector(".promise-container");

    for (let i = 0; i < 30; i++) {
      const item = document.createElement("div");
      item.className = "floating-item";
      item.style.left = Math.random() * 100 + "vw";
      item.style.animationDuration = 4 + Math.random() * 6 + "s";
      item.style.fontSize = 18 + Math.random() * 25 + "px";
      item.style.opacity = 0.4 + Math.random() * 0.6;

      const icons = ["❤️", "💍", "✨", "💖", "🌹"];
      item.innerHTML = icons[Math.floor(Math.random() * icons.length)];

      container.appendChild(item);
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  // Auto Song Play
  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.volume = 0.5;
          await audioRef.current.play();
        }
      } catch (error) {
        console.log("Autoplay blocked by browser. User interaction needed.");
      }
    };

    playAudio();
  }, []);

  return (
    <div className="promise-page">
      <div className="overlay"></div>

      <div className="promise-container"></div>

      <div className="content">
        <h1 className="title">💍 Happy Promise Day Bachchuu 💍</h1>
        <h2 className="subtitle">I Promise You Forever ❤️</h2>

        {/* Letter First */}
        <div className="card">
          <TypeWriter text={letter} speed={50} />
        </div>

        {/* Proposal Quote */}
        <div className="quote-box">
          <h3>💖 Special Line 💖</h3>
          <p>
            "अगर जिंदगी दोबारा भी मिले...
            तो भी मैं हर बार तुम्हें ही चुनूँगा ❤️"
          </p>
        </div>

        {/* Images After Letter */}
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src="/images/roj5.jpeg" alt="memory1" />
            </div>
            <div className="slide">
              <img src="/images/kiss2.jpeg" alt="memory2" />
            </div>
            <div className="slide">
              <img src="/images/hug3.jpeg" alt="memory3" />
            </div>
            <div className="slide">
              <img src="/images/hug8.jpeg" alt="memory4" />
            </div>
            <div className="slide">
              <img src="/images/propose2.jpeg" alt="memory5" />
            </div>

            <div className="slide">
              <img src="/images/roj3.jpeg" alt="memory1" />
            </div>
            <div className="slide">
              <img src="/images/kiss7.jpeg" alt="memory2" />
            </div>
            <div className="slide">
              <img src="/images/hug8.jpeg" alt="memory3" />
            </div>
            <div className="slide">
              <img src="/images/velentine5.jpg" alt="memory4" />
            </div>
            <div className="slide">
              <img src="/images/propose1.jpeg" alt="memory5" />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="buttons">
          <button className="btn btn-love" onClick={() => setShowSurprise(true)}>
            🎁 Open Promise Gift
          </button>

          <button
            className="btn"
            onClick={() =>
              alert("💍 Meri jaan, I Promise You Forever ❤️✨")
            }
          >
            💌 Click My Promise
          </button>
        </div>

        <p className="footer">© {currentYear} Made with 💍❤️ for My Wife</p>
      </div>

      {/* Surprise Popup */}
      {showSurprise && (
        <div className="popup">
          <div className="popup-card">
            <h2>💖 My Promise Gift 💖</h2>
            <p>
              मेरी जान ❤️💍  
              आज मैं तुम्हें ये वादा देता हूँ कि...  
              मैं हमेशा तुम्हारा रहूँगा😘  
              तुम मेरी दुनिया हो ❤️✨  
              <br />
              I Love You Forever 💞
            </p>

            <img
              className="gift-img"
              src="/images/roj2.jpeg"
              alt="gift"
            />

            <button className="btn" onClick={() => setShowSurprise(false)}>
              ❌ Close
            </button>
          </div>
        </div>
      )}

      {/* Auto Song */}
      <audio ref={audioRef} loop>
        <source src="/music/Janam.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
};

export default PromiseDay;
