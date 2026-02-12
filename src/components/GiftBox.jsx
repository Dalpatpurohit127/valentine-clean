import { useState } from "react";
import { motion } from "framer-motion";

const GiftBox = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginTop: "30px" }}>
      {!open ? (
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(true)}
          style={{
            fontSize: "80px",
            cursor: "pointer",
          }}
        >
          🎁
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="gift-message"
        >
          <h2>💖 Surprise For You ABC 💖</h2>
          <p>
            Meri jaan ABC 😘  
            tum meri zindagi ka sabse pyara gift ho...  
            main tumhe har din aur zyada pyaar karunga ❤️🌹  
          </p>

          <h3>🌹 I Love You Forever 🌹</h3>
        </motion.div>
      )}

      {!open && <p style={{ marginTop: "10px" }}>🎀 Gift ko click karo ABC 😍</p>}
    </div>
  );
};

export default GiftBox;
