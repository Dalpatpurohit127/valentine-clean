import React, { useEffect, useRef, useState } from "react";
import TypeWriter from "../components/TypeWriter";
import "./HugDay.css";

const HugDay = () => {
  const audioRef = useRef(null);
  const [showGift, setShowGift] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  const loveLetter = `
  मेरी प्यारी Wife 🤗❤️,

Hug ek simple sa word lagta hai...
पर सच कहूं तो, ये दुनिया की सबसे खूबसूरत feeling होती है 😘

जब तुम मेरे पास होती हो ना,
तो ऐसा लगता है जैसे मेरी सारी परेशानियां खत्म हो गईं...

तुम्हारी एक Hug मेरे दिल को वो सुकून देती है,
जो किसी और चीज़ में नहीं मिलता 💞

आज Hug Day पर मैं तुम्हें बस इतना कहना चाहता हूं...
तुम चाहे अभी ससुराल में हो,
पर मेरा दिल हर दिन तुम्हें अपने पास महसूस करता है 🤍✨

मैं हर रोज़ तुम्हें याद करता हूं...
और जिस दिन तुम मेरे पास आओगी,
मैं तुम्हें इतनी tight Hug करूंगा,
कि तुम्हें मेरी पूरी मोहब्बत महसूस हो जाएगी 🤗💋

तुम मेरी दुनिया हो...
और मेरी सबसे प्यारी आदत भी ❤️🥺

Happy Hug Day Meri Jaan 🤗💝

तुम्हारा Husband ❤️
  `;

  return (
    <div className="hug-page">
      {/* Song Auto Loop */}
      <audio ref={audioRef} loop autoPlay>
        <source src="/music/Tera.mp3" type="audio/mpeg" />
      </audio>

      {/* BACK EMOJIS */}
      <div className="emoji-bg">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="emoji"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 6}s`,
              fontSize: `${22 + Math.random() * 18}px`,
            }}
          >
            🤗
          </span>
        ))}
      </div>

      {/* FRONT EMOJIS */}
      <div className="emoji-front">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="emoji"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 7}s`,
              fontSize: `${25 + Math.random() * 25}px`,
            }}
          >
            💕
          </span>
        ))}
      </div>

      {/* Main Container */}
      <div className="hug-container">
        <h1 className="hug-title">🤗 Happy Hug Day Bachchuu ❤️</h1>
        <p className="hug-subtitle">
          Tumhari ek Hug meri duniya ka sabse pyara sukoon hai 😘
        </p>

        {/* Romantic Quote Box */}
        <div className="hug-quote-box">
          <p className="hug-quote">
            "Tumhari ek Hug mein meri poori duniya bas jaati hai..." 💞
          </p>
        </div>

        {/* Heart Animation Card */}
        <div className="hug-heart-box">
          <div className="hug-heart"></div>
          <p className="hug-heart-text">
            ये Hug सिर्फ तुम्हारे लिए... मेरे दिल से ❤️🤗
          </p>
        </div>

        {/* Auto Scroll Slider */}
        <div className="hug-slider">
          <div className="hug-track">
            <img src="/images/hug1.jpeg" alt="hug" />
            <img src="/images/hug2.jpeg" alt="hug" />
            <img src="/images/hug3.jpeg" alt="hug" />
            <img src="/images/hug4.jpeg" alt="hug" />
            <img src="/images/hug5.jpeg" alt="hug" />
            <img src="/images/hug6.jpeg" alt="hug" />
            <img src="/images/hug7.jpeg" alt="hug" />
            <img src="/images/hug8.jpeg" alt="hug" />
            <img src="/images/hug9.jpeg" alt="hug" />
            <img src="/images/hug10.jpeg" alt="hug" />
            <img src="/images/hug11.jpeg" alt="hug" />
          </div>
        </div>

        {/* Letter */}
        <div className="hug-letter-box">
          <h2 className="hug-letter-title">💌 Hug Day Love Letter</h2>
          <div className="hug-letter-text">
            <TypeWriter text={loveLetter} speed={35} />
          </div>
        </div>

        {/* Surprise Gift */}
        <div className="hug-surprise">
          <h2 className="hug-surprise-title">🎁 Hug Day Surprise</h2>
          <p className="hug-surprise-sub">
            Jaan, ye button tumhare liye hai 😘🤗
          </p>

          <button className="hug-btn" onClick={() => setShowGift(true)}>
            Open Your Surprise 💝
          </button>

          {showGift && (
            <div className="hug-gift-box">
              <h3>💖 Surprise Unlocked!</h3>
              <p>
                Jaan, main tumhe ek "Real Hug" gift kar raha hoon...
                aur jab tum wapas aaogi,
                main tumhe kabhi door nahi jaane dunga 😘❤️
              </p>
              <p className="hug-gift-love">
                I Love You Forever Meri Wife 💞🤗
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="hug-footer">
          Made with ❤️ for my Wife | {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default HugDay;
