import styles from "./AnimatedBackground.module.css";

const SPARKLES = ["✦", "✦", "•", "✦", "•", "✦", "•", "✦", "✦", "•", "✦", "•", "✦", "•"];

const FOODS = [
  "✨",
  "⭐",
  "🌟",
  "💫",
  "✨",
  "⭐",
  "🌟",
  "💫",
  "✨",
  "⭐",
];

export default function AnimatedBackground() {
  return (
    <div className={styles.bg} aria-hidden="true">
      <div className={styles.glowOne} />
      <div className={styles.glowTwo} />

      <div className={styles.particles}>
        {SPARKLES.map((s, i) => (
          <span key={`s${i}`}>{s}</span>
        ))}
        {FOODS.map((f, i) => (
          <span key={`f${i}`}>{f}</span>
        ))}
      </div>
    </div>
  );
}
