import React, { useEffect, useRef, useState } from "react";
import TypeWriter from "../components/TypeWriter";
import SpinWheelSurprise from "../components/SpinWheelSurprise";
import "./ValentineDay.css";

const ValentineDay = () => {
  const audioRef = useRef(null);

  const [giftOpen, setGiftOpen] = useState(false);
  const [proposalOpen, setProposalOpen] = useState(false);
  const [secretOpen, setSecretOpen] = useState(false);
  const [loveMeter, setLoveMeter] = useState(0);

  // Spin Wheel States

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.55;
      audioRef.current.play().catch(() => {});
    }

    let meter = 0;
    const interval = setInterval(() => {
      meter += 2;
      setLoveMeter(meter);
      if (meter >= 100) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // Hindi Love Letter
  const letter = `
  मेरी जान ❤️,

आज Valentine Day है…  
और सच बोलूं तो तुमसे प्यार करना मेरी जिंदगी की सबसे प्यारी आदत बन गई है 😘

तुम मेरी जिंदगी का वो सबसे खूबसूरत हिस्सा हो,
जिसके बिना सब कुछ अधूरा लगता है…

तुम्हारी मुस्कान मेरे दिल की शांति है,
और तुम्हारी आवाज मेरी दुनिया की सबसे प्यारी music 🎶❤️

मैं तुम्हें हर दिन पहले से ज्यादा चाहता हूँ…
हर दिन तुम्हारे प्यार में थोड़ा और डूब जाता हूँ 💞

तुम मेरी wife नहीं हो…
तुम मेरी दुनिया हो 🌍❤️

मैं बस इतना कहना चाहता हूँ —
तुम मेरे लिए सबसे खास हो…
और हमेशा रहोगी 💖

Happy Valentine Day Meri Jaan 🌹💋  
तुम्हारा Husband ❤️
`;



  return (
    <div className="valentine-ultra">
      {/* Background Song */}
      <audio ref={audioRef} loop autoPlay>
        <source src="/music/Kesariya.mp3" type="audio/mp3" />
      </audio>

      {/* Heart Rain */}
      <div className="heart-rain">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i}>❤️</span>
        ))}
      </div>

      {/* Rose Rain */}
      <div className="rose-rain">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i}>🌹</span>
        ))}
      </div>

      {/* Sparkles */}
      <div className="sparkles">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i}>✨</span>
        ))}
      </div>

      {/* Main Container */}
      <div className="val-container">
        <h1 className="val-title">💘 Happy Valentine Day 💘</h1>
        <p className="val-subtitle">For My Forever Love ❤️ (Meri Jaan 😘)</p>

        {/* Hero */}
        <div className="val-hero">
          <img src="/images/roj1.jpeg" alt="valentine" />
          <h2 className="val-hero-text">Tum ho to sab kuch perfect hai 😘❤️</h2>
        </div>

        {/* Love Meter */}
        <div className="love-meter-box">
          <h2 className="section-title">💖 Love Meter</h2>
          <div className="meter">
            <div className="meter-fill" style={{ width: `${loveMeter}%` }}></div>
          </div>
          <p className="meter-text">
            Tumhare liye mera love: <b>{loveMeter}%</b> 💞
          </p>
        </div>

        {/* Love Letter */}
        <div className="val-letter">
          <h2 className="section-title">💌 Love Letter</h2>
          <TypeWriter text={letter} speed={25} />
        </div>

        {/* Image Slider */}
        <div className="val-slider">
          <div className="val-track">
            <img src="/images/velentine1.jpg" alt="mem" />
            <img src="/images/velentine2.jpg" alt="mem" />
            <img src="/images/velentine3.jpg" alt="mem" />
            <img src="/images/velentine4.jpg" alt="mem" />
            <img src="/images/velentine5.jpg" alt="mem" />
            <img src="/images/velentine6.jpg" alt="mem" />
            <img src="/images/velentine7.jpg" alt="mem" />
            <img src="/images/velentine8.jpg" alt="mem" />
            <img src="/images/velentine9.jpg" alt="mem" />
            <img src="/images/velentine10.jpg" alt="mem" />
          </div>
        </div>

        {/* Proposal Button */}
        <div className="proposal-box">
          <h2 className="section-title">💍 Special Question</h2>

          <button
            className="proposal-btn"
            onClick={() => setProposalOpen(true)}
          >
            💍 Click for Proposal
          </button>

          {proposalOpen && (
            <div className="proposal-popup">
              <h2>💍 Meri Jaan...</h2>
              <p>
                Do you love me ❤️  
                💞
              </p>

              <button
                className="yes-btn"
                onClick={() =>
                  alert("😍 She said YESSS! Ab shaadi dubara karni padegi 😂❤️")
                }
              >
                YES 😘❤️
              </button>

              <button
                className="no-btn"
                onClick={() => alert("😡 No option नहीं है! YES बोलो 😂💘")}
              >
                NO 😤
              </button>
            </div>
          )}
        </div>

        {/* Gift Surprise */}
        <div className="gift-section">
          <h2 className="section-title">🎁 Valentine Surprise</h2>
          <p className="gift-text">
            Jaan gift kholo... warna main teddy ko bhej dunga tumhe hug karne 😈🧸😂
          </p>

          <div
            className={`gift-box ${giftOpen ? "open" : ""}`}
            onClick={() => setGiftOpen(true)}
          >
            <div className="gift-lid"></div>
            <div className="gift-body"></div>
            <div className="gift-ribbon"></div>

            {giftOpen && (
              <div className="gift-popup">
                <h3>💘 Surprise!</h3>
                <p>
                  तुम मेरी Valentine हो... ❤️  
                  <br />
                  और मैं तुम्हारा पागल lover 😘😂  
                  <br />
                  💋 1000 kisses pending!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Spin Wheel Surprise */}
       <SpinWheelSurprise />


        {/* Secret Message */}
        <div className="secret-box">
          <h2 className="section-title">🔐 Secret Message</h2>

          <button
            className="secret-btn"
            onClick={() => setSecretOpen(!secretOpen)}
          >
            {secretOpen ? "🙈 Hide Secret" : "👀 Reveal Secret"}
          </button>

          {secretOpen && (
            <p className="secret-message">
              सच बोलूं जान...  
              तुम मेरे लिए सिर्फ wife नहीं हो...  
              तुम मेरी **दुनिया, मेरी दुआ, और मेरी सबसे बड़ी खुशी** हो ❤️🌍✨  
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="actions">
          <button
            className="hug-btn"
            onClick={() =>
              alert("🤗 Hug Delivered Successfully! Ab real hug bhi chahiye 😘❤️")
            }
          >
            🤗 Send Hug
          </button>

          <button
            className="kiss-btn"
            onClick={() => alert("💋 Kiss Delivered! Ab tum bhi bhejo 😈❤️")}
          >
            💋 Send Kiss
          </button>
        </div>

        <p className="footer">
          Made with 💘 for My Valentine | © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default ValentineDay;
