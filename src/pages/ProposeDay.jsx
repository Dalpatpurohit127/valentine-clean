import React, { useEffect, useRef, useState } from "react";
import TypeWriter from "../components/TypeWriter";
import "./ProposeDay.css";

const ProposeDay = () => {
  const audioRef = useRef(null);
  const [showProposal, setShowProposal] = useState(false);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.7;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  const loveLetter = `
  मेरी प्यारी जान ❤️,

आज Propose Day है...
और मैं दिल की सबसे सच्ची बात तुमसे कहना चाहता हूँ 🥺💍

तुम मेरी ज़िंदगी का वो हिस्सा हो,
जिसके बिना हर खुशी अधूरी लगती है...

जब तुम मुस्कुराती हो,
तो लगता है जैसे पूरी दुनिया खूबसूरत हो गई हो 🌍✨

मैं तुम्हारे साथ हर दिन,
हर खुशी, हर मुश्किल, हर सपना जीना चाहता हूँ...

मैं चाहता हूँ कि तुम हमेशा मेरे साथ रहो...
मेरे दुःख में, मेरे सुख में, हर पल 💖

तो आज मैं तुमसे पूछता हूँ...

क्या तुम मेरी ज़िंदगी भर साथ निभाओगी 🥹💍

मैं तुम्हें हमेशा...
अपने दिल से, अपनी रूह से, और अपनी पूरी ज़िंदगी से प्यार करूँगा ❤️

Happy Propose Day मेरी जान 💌

तुम्हारा Husband ❤️
`;

  const handleYes = () => {
    setAnswer("YES");
    setShowProposal(true);
  };

  

  return (
    <div className="propose-page">
      {/* Song */}
      <audio ref={audioRef} loop autoPlay>
        <source src="/music/Raatan.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating Hearts Background */}
      <div className="floating-hearts">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 6}s`,
              fontSize: `${20 + Math.random() * 25}px`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      {/* Sparkles Front */}
      <div className="sparkle-front">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 7}s`,
              fontSize: `${18 + Math.random() * 20}px`,
            }}
          >
            ✨
          </span>
        ))}
      </div>

      <div className="propose-container">
        {/* Header */}
        <h1 className="propose-title">💍 Happy Propose Day ❤️</h1>
        <p className="propose-subtitle">
          Aaj main tumse ek dil ki baat kehna chahta hoon...
        </p>

        {/* Ring Animation */}
        <div className="ring-box">
          <div className="ring">💍</div>
          <p className="ring-text">My Forever Proposal 💖</p>
        </div>

        {/* Image Slider */}
        <div className="propose-slider">
          <div className="propose-track">
            <img src="/images/propose1.jpeg" alt="proposal" />
            <img src="/images/propose2.jpeg" alt="proposal" />
            <img src="/images/propose3.jpeg" alt="proposal" />
            <img src="/images/propose4.jpeg" alt="proposal" />
            <img src="/images/propose5.jpeg" alt="proposal" />
            <img src="/images/propose6.jpeg" alt="proposal" />
            <img src="/images/propose7.jpeg" alt="proposal" />
            <img src="/images/propose8.jpeg" alt="proposal" />
            <img src="/images/propose9.jpeg" alt="proposal" />
            <img src="/images/propose10.jpeg" alt="proposal" />
            <img src="/images/propose11.jpeg" alt="proposal" />
            <img src="/images/propose12.jpeg" alt="proposal" />

          </div>
        </div>

        {/* Love Letter */}
        <div className="propose-letter-box">
          <h2 className="propose-letter-title">💌 My Love Letter</h2>
          <TypeWriter text={loveLetter} speed={35} />
        </div>

        {/* Proposal Question */}
        <div className="proposal-box">
          <h2 className="proposal-title">💍 Do you love  Me?</h2>
          <p className="proposal-text">
            Jaan... tumhare bina main complete nahi hoon 😘❤️
          </p>

          <div className="proposal-btns">
            <button className="yes-btn" onClick={handleYes}>
              Yes ❤️
            </button>
            <button className="no-btn" onClick={handleYes}>
              No 😢
            </button>
          </div>
        </div>

        {/* Surprise */}
        <div className="surprise-box">
          <h2 className="surprise-title">🎁 Special Surprise</h2>
          <p className="surprise-text">
            Ek surprise hai sirf tumhare liye... jaan 😘
          </p>

          <button
            className="surprise-btn"
            onClick={() =>
              alert(
                "💍 Surprise: Main tumhare liye ek ring nahi... apni poori zindagi lekar aa raha hoon ❤️😘"
              )
            }
          >
            Open Surprise 💖
          </button>
        </div>
      </div>

      {/* Popup */}
      {showProposal && (
        <div className="popup-overlay">
          <div className="popup-card">
            {answer === "YES" ? (
              <>
                <h2>😍 OMG YES!!</h2>
                <p>
                  Meri jaan... muje pata tha tu yes hi bolegi 🥹❤️  
                  love you bachchuu 💍✨
                </p>
                <p className="popup-love">I Love You Forever 😘</p>
              </>
            ) : (
              <>
                <h2>😢</h2>
                
                <p className="popup-love">No Option Nahi Hai💖</p>
              </>
            )}

            <button className="close-btn" onClick={() => setShowProposal(false)}>
              Close 💌
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProposeDay;
