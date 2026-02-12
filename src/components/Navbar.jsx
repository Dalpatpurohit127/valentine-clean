import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: linear-gradient(135deg, #ff5f9e, #ff85b3);
          color: white;
          flex-wrap: wrap;
        }

        .navbar h2 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
        }

        .nav-links {
          display: flex;
          gap: 15px;
        }

        .navlink {
          text-decoration: none;
          color: white;
          font-size: 15px;
          padding: 6px 12px;
          border-radius: 20px;
          transition: background 0.3s;
        }

        .navlink:hover {
          background: rgba(255, 255, 255, 0.25);
        }

        .log {
          background: rgba(255, 255, 255, 0.2);
        }

        /* 📱 Mobile Responsive */
        @media (max-width: 600px) {
          .navbar {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }

          .navbar h2 {
            font-size: 18px;
          }

          .nav-links {
            width: 100%;
            justify-content: center;
          }

          .navlink {
            font-size: 14px;
            padding: 8px 14px;
          }
        }
      `}</style>

      <div className="navbar">
        <h2>💖 Valentine Surprise</h2>

        <div className="nav-links">
          <Link className="navlink" to="/home">Home</Link>
          <Link className="navlink log" to="/">Log Out</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
