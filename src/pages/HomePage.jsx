import { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import DayCard from "../components/DayCard";
import { festivalDays, isUnlocked } from "../utils/unlockLogic";

const HomePage = () => {
  const [countdown, setCountdown] = useState("");
  const [nextDay, setNextDay] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const upcoming = festivalDays.find(day => !isUnlocked(day.date));

      if (!upcoming) {
        setCountdown("🎉 Sabhi surprises unlock ho chuke hain! ❤️");
        setNextDay(null);
        return;
      }

      setNextDay(upcoming);
      const diff = new Date(upcoming.date) - new Date();

      if (diff <= 0) {
        setCountdown("🎁 Surprise Unlock Ho Gaya! Refresh karo ❤️");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown(`⏳ ${days} दिन ${hours} घंटे ${minutes} मिनट ${seconds} सेकंड`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="page" onClick={playMusic}>
      <Navbar />

      {/* Background music */}
      <audio ref={audioRef} src="/music/romantic.mp3" loop preload="auto" />

      <div className="hero">
        <h1>💖 Valentine Surprise For My Payara sa Bachchuu 💖</h1>

        <p>
          Meri jaan Mera Bachchaa ❤️  
          tumhare liye maine ek special surprise website banayi hai...  
          har din ek naya gift unlock hoga 😘
        </p>

        {nextDay ? (
          <div className="countdown-box">
            <h2>🎀 Next Surprise: {nextDay.name}</h2>
            <p className="countdown-text">{countdown}</p>
          </div>
        ) : (
          <div className="countdown-box">
            <h2>{countdown}</h2>
          </div>
        )}
      </div>

      <div className="grid">
        {festivalDays.map((day, index) => (
          <DayCard key={index} day={day} unlocked={isUnlocked(day.date)} />
        ))}
      </div>

      <div className="footer">
        <p>❤️ Made with Love by Your Husband ❤️</p>
      </div>
    </div>
  );
};

export default HomePage;
