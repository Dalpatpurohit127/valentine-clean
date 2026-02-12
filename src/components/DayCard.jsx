import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const DayCard = ({ day, unlocked }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: unlocked ? 1.05 : 1 }}
      className={`day-card ${unlocked ? "unlocked" : "locked"}`}
      onClick={() => unlocked && navigate(day.path)}
    >
      <h2 className="emoji">{day.emoji}</h2>
      <h3>{day.name}</h3>

      {unlocked ? (
        <p className="status open">🎁 Open Surprise</p>
      ) : (
        <p className="status lock">🔒 Locked</p>
      )}

      <small>{day.date}</small>
    </motion.div>
  );
};

export default DayCard;
