import React, { useEffect, useRef, useState } from "react";
import TypeWriter from "../components/TypeWriter";
import "./ChocolateDay.css";

const ChocolateDay = () => {
  const audioRef = useRef(null);
  const [openGift, setOpenGift] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  const loveLetter = `
  मेरी जान ❤️🍫,

आज Chocolate Day है...
और सच कहूँ तो तुम मेरी ज़िन्दगी की सबसे मीठी Chocolate हो 😘

जैसे Chocolate का स्वाद धीरे-धीरे दिल में उतरता है,
वैसे ही तुम्हारा प्यार मेरी रूह में बस गया है...

तुम्हारी हँसी मेरे लिए सबसे बड़ा टॉनिक है,
और तुम्हारी बातें मेरे दिल की सबसे प्यारी मिठास 💝

आज मैं तुमसे एक बात कहना चाहता हूँ...

तुम मेरे साथ हो तो ज़िन्दगी "Sweet" लगती है,
और तुम दूर हो तो भी तुम्हारी यादें मेरे पास रहती हैं ❤️

मैं वादा करता हूँ...
मैं हमेशा तुम्हें ऐसे ही प्यार करता रहूँगा,
जैसे Chocolate कभी पुरानी नहीं लगती 🍫✨

Happy Chocolate Day मेरी रानी 👑❤️  
तुम्हारा Husband ❤️💌
  `;

  return (
    <div className="choco-page">
      {/* Chocolate Rain Animation */}
      <div className="choco-rain">
        <span>🍫</span><span>🍫</span><span>🍫</span><span>🍫</span><span>🍫</span>
        <span>🍩</span><span>🍪</span><span>🍫</span><span>🍬</span><span>🍫</span>
      </div>

      {/* Background Music */}
      <audio ref={audioRef} loop autoPlay>
        <source src="/music/Dil.mp3" type="audio/mpeg" />
      </audio>

      <div className="choco-container">
        <h1 className="choco-title">🍫 Happy Chocolate Day Bachchuu❤️</h1>
        <p className="choco-subtitle">
          तुम मेरी ज़िन्दगी की सबसे मीठी मिठास हो 😘
        </p>

        {/* Image Slider */}
        <div className="choco-slider">
          <div className="choco-track">
            <img src="/images/chocolate1.jpg" alt="choco" />
            <img src="/images/chocolate2.jpg" alt="choco" />
            <img src="/images/chocolate3.jpg" alt="choco" />
            <img src="/images/chocolate4.jpg" alt="choco" />
            <img src="/images/chocolate5.jpeg" alt="choco" />
            <img src="/images/chocolate6.jpeg" alt="choco" />
            <img src="/images/chocolate7.jpeg" alt="choco" />
            <img src="/images/chocolate8.jpeg" alt="choco" />
            <img src="/images/chocolate9.jpeg" alt="choco" />
          </div>
        </div>

        {/* Chocolate Quotes */}
        <div className="choco-quotes">
          <div className="quote-card">🍫 "तुम्हारी यादें Chocolate जैसी हैं… मीठी और addictive 😘"</div>
          <div className="quote-card">❤️ "तुम न हो तो मेरी ज़िन्दगी Dessert बन जाती है"</div>
          <div className="quote-card">🍬 "तुम मेरी हर सुबह का sweet reason हो"</div>
        </div>

        {/* Letter */}
        <div className="choco-letter-box">
          <h2 className="choco-letter-title">💌 मेरे दिल का Letter</h2>
          <TypeWriter text={loveLetter} speed={35} />
        </div>

        {/* Gift Surprise */}
        <div className="choco-surprise">
          <h2>🎁 तुम्हारे लिए Surprise Gift</h2>
          <p>इस gift को खोलो मेरी जान 😍</p>

          <button className="gift-btn" onClick={() => setOpenGift(true)}>
            🎁 Open My Sweet Gift 🍫
          </button>
        </div>
      </div>

      {/* Modal Gift Popup */}
      {openGift && (
        <div className="gift-modal">
          <div className="gift-box">
            <h2>🍫 Surprise For You ❤️</h2>
            <p>
              मेरी जान, ये chocolate सिर्फ chocolate नहीं है...
              इसमें मेरा प्यार, मेरी यादें और मेरा दिल छुपा है 😘
            </p>

            <div className="gift-items">
              <div className="gift-item">🍫 Dairy Milk Silk</div>
              <div className="gift-item">🍬 1000 Sweet Kisses</div>
              <div className="gift-item">❤️ Unlimited Love</div>
              <div className="gift-item">👑 Queen Treatment</div>
            </div>

            <button className="close-btn" onClick={() => setOpenGift(false)}>
              Close ❤️
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChocolateDay;
