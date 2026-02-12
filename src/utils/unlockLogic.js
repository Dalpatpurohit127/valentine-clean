export const festivalDays = [
  { date: "2026-02-07", name: "Rose Day", path: "/rose-day", emoji: "🌹" },
  { date: "2026-02-08", name: "Propose Day", path: "/propose-day", emoji: "💍" },
  { date: "2026-02-09", name: "Chocolate Day", path: "/chocolate-day", emoji: "🍫" },
  { date: "2026-02-10", name: "Teddy Day", path: "/teddy-day", emoji: "🧸" },
  { date: "2026-02-11", name: "Promise Day", path: "/promise-day", emoji: "🤝" },
  { date: "2026-02-12", name: "Hug Day", path: "/hug-day", emoji: "🤗" },
  { date: "2026-02-13", name: "Kiss Day", path: "/kiss-day", emoji: "😘" },
  { date: "2026-02-14", name: "Valentine Day", path: "/valentine-day", emoji: "❤️" },
];

export const isUnlocked = (dateString) => {
  const today = new Date();
  const unlockDate = new Date(dateString);

  today.setHours(0, 0, 0, 0);
  unlockDate.setHours(0, 0, 0, 0);

  return today >= unlockDate;
};
