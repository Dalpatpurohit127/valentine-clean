import React, { useEffect, useRef, useState } from "react";
import TypeWriter from "../components/TypeWriter";
import "./TeddyDay.css";

const TeddyDay = () => {
  const audioRef = useRef(null);
  const [openGift, setOpenGift] = useState(false);
  const [showBigMessage, setShowBigMessage] = useState(false);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  const letter = `

  मेरी प्यारी Wife 🧸❤️,

आज Teddy Day है...
और सच कहूं तो, तुम्हारी याद मुझे teddy से भी ज्यादा cute लगती है 🥺💕

Teddy एक soft सा gift होता है,
लेकिन तुम्हारा प्यार उससे भी ज्यादा soft और प्यारा है 😘

जब तुम मेरे पास नहीं होती,
तो मैं सोचता हूं काश...
ये teddy बनकर मैं तुम्हारे पास रह पाता 🤗🧸

तुम मेरी जिंदगी की सबसे cute खुशी हो...
तुम्हारी हंसी मेरी favorite music है,
और तुम्हारी बातें मेरी दुनिया 🌍❤️

आज Teddy Day पर मैं तुम्हें ये teddy भेज रहा हूं...
लेकिन असली teddy तो मैं खुद हूं,
जो सिर्फ तुम्हारे लिए बना है 😍🧸

Happy Teddy Day Meri Jaan 🧸💝

तुम्हारा Husband ❤️
`;

  return (
    <div className="teddy-page">
      {/* Background Song */}
      <audio ref={audioRef} loop autoPlay>
        <source src="/music/Pehla.mp3" type="audio/mp3" />
      </audio>

      {/* Floating Hearts */}
      <div className="floating-hearts">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i}>💖</span>
        ))}
      </div>

      {/* Main Container */}
      <div className="teddy-wrapper">
        {/* Header */}
        <h1 className="main-title">🧸 Happy Teddy Day 🧸</h1>
        <p className="sub-title">
          For My Cute Wife ❤️ (Jo meri duniya hai)
        </p>

        {/* Teddy + Glow */}
        <div className="teddy-hero">
          <div className="teddy-glow"></div>
        </div>

        {/* Letter First */}
        <div className="letter-card">
          <h2 className="section-title">💌 Love Letter</h2>
          <TypeWriter text={letter} speed={35} />
        </div>

        {/* Photo Memories */}
        <div className="memory-section">
          <h2 className="section-title">📸 Our Cute Memories</h2>

          <div className="memory-slider">
            <div className="memory-track">
              <img src="/images/teddy1.jpeg" alt="mem" />
              <img src="/images/teddy2.jpeg" alt="mem" />
              <img src="/images/teddy3.jpeg" alt="mem" />
              <img src="/images/teddy4.jpeg" alt="mem" />
              <img src="/images/teddy5.jpeg" alt="mem" />
              <img src="/images/teddy6.jpeg" alt="mem" />
              <img src="/images/teddy7.jpeg" alt="mem" />
              <img src="/images/teddy8.jpeg" alt="mem" />
              <img src="/images/teddy9.jpeg" alt="mem" />
              <img src="/images/teddy10.jpeg" alt="mem" />
              <img src="/images/teddy11.jpeg" alt="mem" />
              <img src="/images/teddy12.jpeg" alt="mem" />
            </div>
          </div>
        </div>

        {/* Gift Surprise */}
        <div className="gift-section">
          <h2 className="section-title">🎁 Your Teddy Surprise</h2>
          <p className="gift-text">
            Jaan, gift pe click karo… tumhare liye special hai 😘
          </p>

          <div
            className={`gift-box ${openGift ? "open" : ""}`}
            onClick={() => {
              setOpenGift(true);
              setTimeout(() => setShowBigMessage(true), 800);
            }}
          >
            <div className="gift-lid"></div>
            <div className="gift-body"></div>
            <div className="gift-ribbon"></div>
          </div>

          {showBigMessage && (
            <div className="big-popup">
              <h2>🧸 Surprise For My Wife ❤️</h2>
              <p>
                Ye teddy tumhare liye…
                <br />
                aur is teddy ke andar meri saari mohabbat 💝
                <br />
                Jab bhi tum miss karo… hug kar lena 🤗
                <br />
                <br />
                <b>I Love You Forever ❤️</b>
              </p>

              <button
                className="close-btn"
                onClick={() => setShowBigMessage(false)}
              >
                Close ❌
              </button>
            </div>
          )}

          <button
            className="love-btn"
            onClick={() => alert("🧸 Tum meri jaan ho ❤️ Happy Teddy Day 😘")}
          >
            🧸 Send Love
          </button>
        </div>

        {/* Footer */}
        <p className="footer">
          © {currentYear} Made with ❤️ for My Wife 
        </p>
      </div>
    </div>
  );
};

export default TeddyDay;
