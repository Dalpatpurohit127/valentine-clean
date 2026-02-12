import React, { useEffect, useRef, useState } from "react";
import TypeWriter from "../components/TypeWriter";
import "./KissDay.css";

const KissDay = () => {
  const audioRef = useRef(null);
  const [showSurprise, setShowSurprise] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  const kissLetter = `
  मेरी प्यारी Wife 😘❤️,

आज Kiss Day है...
और सच बताऊँ तो तुम्हारी कमी आज सबसे ज्यादा महसूस हो रही है 💋

एक Kiss सिर्फ lips का touch नहीं होता,
वो प्यार का वो एहसास होता है,
जो दिल को दिल से जोड़ देता है...

जब तुम पास होती हो,
तो मेरी दुनिया सबसे खूबसूरत लगती है...
और जब तुम दूर होती हो,
तो तुम्हारी यादें मुझे हर पल तड़पाती हैं ❤️

मैं चाहता हूँ कि आज के दिन
मैं तुम्हारे माथे पर एक प्यारी सी Kiss दूँ 😘
और कहूँ...

"तुम मेरी ज़िन्दगी हो...
तुम मेरी आदत हो...
और तुम ही मेरा सुकून हो..." 💞

मैं वादा करता हूँ...
मैं हमेशा तुम्हें ऐसे ही प्यार करूँगा,
जैसे पहली बार किया था ❤️💋

Happy Kiss Day Meri Jaan 😘💋✨  
तुम्हारा Husband ❤️
  `;

  return (
    <div className="kiss-page">
      {/* Kiss Rain */}
      <div className="kiss-rain">
        <span>💋</span><span>💋</span><span>😘</span><span>💋</span><span>😘</span>
        <span>💋</span><span>💋</span><span>😘</span><span>💋</span><span>😘</span>
      </div>

      {/* Song Auto Loop */}
      <audio ref={audioRef} loop autoPlay>
        <source src="/music/KHAIRIYAT.mp3" type="audio/mpeg" />
      </audio>

      <div className="kiss-container">
        <h1 className="kiss-title">💋 Happy Kiss Day Bachchuu❤️</h1>
        <p className="kiss-subtitle">
          तुम मेरे प्यार की सबसे प्यारी Kiss हो 😘
        </p>

        {/* Image Slider */}
        <div className="kiss-slider">
          <div className="kiss-track">
            <img src="/images/kiss1.jpeg" alt="memory" />
            <img src="/images/kiss2.jpeg" alt="memory" />
            <img src="/images/kiss3.jpeg" alt="memory" />
            <img src="/images/kiss4.jpeg" alt="memory" />
            <img src="/images/kiss5.jpeg" alt="memory" />
            <img src="/images/kiss6.jpeg" alt="memory" />
            <img src="/images/kiss7.jpeg" alt="memory" />
            <img src="/images/kiss8.jpeg" alt="memory" />
            <img src="/images/kiss9.jpeg" alt="memory" />
            <img src="/images/kiss10.jpeg" alt="memory" />
            <img src="/images/kiss11.jpeg" alt="memory" />

          </div>
        </div>

        {/* Letter */}
        <div className="kiss-letter-box">
          <h2 className="kiss-letter-title">💌 Kiss Day Love Letter</h2>
          <TypeWriter text={kissLetter} speed={35} />
        </div>

        {/* Buttons */}
        <div className="kiss-buttons">
          <button className="kiss-btn" onClick={() => setShowSurprise(true)}>
            🎁 Kiss Surprise
          </button>

          <button
            className="kiss-btn special"
            onClick={() => alert("😘 Meri Jaan... Tumhare lips ki yaad aa rahi hai 💋❤️")}
          >
            💋 Special Message
          </button>
        </div>
      </div>

      {/* Surprise Popup */}
      {showSurprise && (
        <div className="kiss-popup">
          <div className="kiss-popup-card">
            <h2>💋 Surprise Kiss For You 😘</h2>
            <p>
              मेरी जान ❤️  
              ये Kiss सिर्फ emoji नहीं है...  
              ये मेरा दिल है जो तुम तक पहुँच रहा है 😘💋  
              <br /><br />
              तुम्हारे lips पर मेरी kiss pending है 😍  
              और तुम्हारी forehead पर मेरा प्यार हमेशा रहेगा ❤️✨
            </p>

            <div className="kiss-gifts">
              <div className="kiss-gift">💋 1000 Kisses</div>
              <div className="kiss-gift">❤️ Unlimited Love</div>
              <div className="kiss-gift">😘 Hug + Kiss Combo</div>
              <div className="kiss-gift">👑 Queen Forever</div>
            </div>

            <button className="kiss-close" onClick={() => setShowSurprise(false)}>
              Close 💕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KissDay;
