import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      {/* Background */}
      <div className={styles.glowOne} />
      <div className={styles.glowTwo} />

      <div className={styles.particles}>
        <span>✦</span>
        <span>✦</span>
        <span>•</span>
        <span>✦</span>
        <span>•</span>
        <span>✦</span>
        <span>•</span>
        <span>✦</span>
        <span>✦</span>
        <span>•</span>
        <span>✦</span>
        <span>•</span>
        <span>✦</span>
        <span>•</span>

        <span>🍕</span>
        <span>🍔</span>
        <span>🍩</span>
        <span>🧁</span>
        
      </div>

    

      {/* Content */}
      <section className={styles.content}>

        <div className={styles.badge}>
          <span>✦</span>
          ERROR 404
          <span>✦</span>
        </div>

        <h1 className={styles.title}>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </h1>

        {/* Food scene */}
        <div className={styles.scene}>

          {/* Floating foods */}
          <div className={`${styles.food} ${styles.food1}`}>🍅</div>
          <div className={`${styles.food} ${styles.food2}`}>🌶️</div>
          <div className={`${styles.food} ${styles.food3}`}>🧀</div>
          <div className={`${styles.food} ${styles.food4}`}>🌿</div>
          <div className={`${styles.food} ${styles.food5}`}>🧅</div>

          {/* Chef */}
          <div className={styles.chef}>

            <div className={styles.chefHat}>
              <div className={styles.hatBubble1} />
              <div className={styles.hatBubble2} />
              <div className={styles.hatBubble3} />
              <div className={styles.hatBottom} />
            </div>

            <div className={styles.face}>
              <div className={`${styles.eye} ${styles.eyeLeft}`} />
              <div className={`${styles.eye} ${styles.eyeRight}`} />

              <div className={styles.nose} />

              <div className={styles.mustacheLeft} />
              <div className={styles.mustacheRight} />

              <div className={styles.mouth} />
            </div>

            <div className={styles.body}>
              <div className={styles.neck} />

              <div className={styles.button1} />
              <div className={styles.button2} />

              <div className={`${styles.arm} ${styles.armLeft}`}>
                👋
              </div>

              <div className={`${styles.arm} ${styles.armRight}`}>
                ✋
              </div>
            </div>

          </div>

          {/* Speech bubble */}
          <div className={styles.speech}>
            Where is the food?
            <div className={styles.speechArrow} />
          </div>

          {/* Pan */}
          <div className={styles.pan}>
            <div className={styles.panHandle} />

            <div className={styles.panBody}>
              <div className={styles.emptyPlate}>
                <span>?</span>
              </div>
            </div>
          </div>

          {/* Fire */}
          <div className={styles.fire}>
            <span>🔥</span>
            <span>🔥</span>
            <span>🔥</span>
          </div>

          {/* Steam */}
          <div className={`${styles.steam} ${styles.steam1}`}>〰</div>
          <div className={`${styles.steam} ${styles.steam2}`}>〰</div>
          <div className={`${styles.steam} ${styles.steam3}`}>〰</div>
        </div>

        {/* Text */}
        <div className={styles.message}>
          <h2>
            Oops! This dish
            <span> disappeared.</span>
          </h2>

          <p>
            The page you're looking for isn't on our menu.
            <br />
            Let's get you back to something delicious.
          </p>

          <Link href="/" className={styles.homeButton}>
            <span>🏠</span>
            Back to Home
            <strong>→</strong>
          </Link>
        </div>

        {/* Quick links */}
        <div className={styles.quickTitle}>
          <span />
          MAYBE YOU'RE LOOKING FOR
          <span />
        </div>

        <div className={styles.cards}>

          <Link href="/foods" className={styles.card}>
            <div className={styles.cardIcon}>🍔</div>
            <div>
              <strong>Our Foods</strong>
              <small>Explore our menu</small>
            </div>
            <b>→</b>
          </Link>

          <Link href="/foods" className={styles.card}>
            <div className={styles.cardIcon}>🍕</div>
            <div>
              <strong>Popular</strong>
              <small>Customer favorites</small>
            </div>
            <b>→</b>
          </Link>

          <Link href="/about" className={styles.card}>
            <div className={styles.cardIcon}>👨‍🍳</div>
            <div>
              <strong>About Us</strong>
              <small>Meet our team</small>
            </div>
            <b>→</b>
          </Link>

        </div>

        <div className={styles.footerText}>
          <span>✦</span>
          Lost in the kitchen, but never lost in flavor.
          <span>✦</span>
        </div>

      </section>
    </main>
  );
}